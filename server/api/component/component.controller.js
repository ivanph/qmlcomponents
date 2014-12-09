/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /components              ->  index
 * POST    /components              ->  create
 * GET     /components/:id          ->  show
 * PUT     /components/:id          ->  update
 * DELETE  /components/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Component = require('./component.model.js');

// Get list of components
exports.index = function (req, res) {
    Component.find(function (err, components) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, components);
    });
};

// Get a single component
exports.show = function (req, res) {
    Component.findById(req.params.id, function (err, component) {
        if (err) {
            return handleError(res, err);
        }
        if (!component) {
            return res.send(404);
        }
        return res.json(component);
    });
};

// Creates a new component in the DB.
exports.create = function (req, res) {
    Component.create(req.body, function (err, component) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, component);
    });
};

// Updates an existing component in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Component.findById(req.params.id, function (err, component) {
        if (err) {
            return handleError(res, err);
        }
        if (!component) {
            return res.send(404);
        }
        var updated = _.merge(component, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, component);
        });
    });
};

// Deletes a component from the DB.
exports.destroy = function (req, res) {
    Component.findById(req.params.id, function (err, component) {
        if (err) {
            return handleError(res, err);
        }
        if (!component) {
            return res.send(404);
        }
        component.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}