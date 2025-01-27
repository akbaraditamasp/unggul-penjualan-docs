'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.apiCustomer1DELETE = function apiCustomer1DELETE (req, res, next) {
  Customer.apiCustomer1DELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomer1GET = function apiCustomer1GET (req, res, next) {
  Customer.apiCustomer1GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomer1PUT = function apiCustomer1PUT (req, res, next, body, accept) {
  Customer.apiCustomer1PUT(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerGET = function apiCustomerGET (req, res, next) {
  Customer.apiCustomerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerPOST = function apiCustomerPOST (req, res, next, body, accept) {
  Customer.apiCustomerPOST(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
