'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.apiAuthDELETE = function apiAuthDELETE (req, res, next, accept) {
  Auth.apiAuthDELETE(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAuthPOST = function apiAuthPOST (req, res, next, body, accept) {
  Auth.apiAuthPOST(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
