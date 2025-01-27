'use strict';

var utils = require('../utils/writer.js');
var TransactionPenjualan = require('../service/TransactionPenjualanService');

module.exports.apiTransaction1DELETE = function apiTransaction1DELETE (req, res, next) {
  TransactionPenjualan.apiTransaction1DELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTransaction3GET = function apiTransaction3GET (req, res, next, accept) {
  TransactionPenjualan.apiTransaction3GET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTransaction3PUT = function apiTransaction3PUT (req, res, next, body, accept) {
  TransactionPenjualan.apiTransaction3PUT(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTransactionGET = function apiTransactionGET (req, res, next) {
  TransactionPenjualan.apiTransactionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiTransactionPOST = function apiTransactionPOST (req, res, next, body, accept) {
  TransactionPenjualan.apiTransactionPOST(body, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
