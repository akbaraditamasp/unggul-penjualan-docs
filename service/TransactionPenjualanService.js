'use strict';


/**
 * Delete Transaction
 *
 * returns Object
 **/
exports.apiTransaction1DELETE = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Show Transaction
 *
 * accept String  (optional)
 * returns Object
 **/
exports.apiTransaction3GET = function(accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Transaction
 *
 * body Object  (optional)
 * accept String  (optional)
 * returns Object
 **/
exports.apiTransaction3PUT = function(body,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Transaction
 *
 * returns Object
 **/
exports.apiTransactionGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Transaction
 *
 * body Object  (optional)
 * accept String  (optional)
 * returns Object
 **/
exports.apiTransactionPOST = function(body,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

