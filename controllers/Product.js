'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.apiProduct1DELETE = function apiProduct1DELETE (req, res, next, accept) {
  Product.apiProduct1DELETE(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProduct1GET = function apiProduct1GET (req, res, next, accept) {
  Product.apiProduct1GET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProduct1PUT = function apiProduct1PUT (req, res, next, body, accept) {
  Product.apiProduct1PUT(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProductGET = function apiProductGET (req, res, next, pageSize, page) {
  Product.apiProductGET(pageSize, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiProductPOST = function apiProductPOST (req, res, next, body, accept) {
  Product.apiProductPOST(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
