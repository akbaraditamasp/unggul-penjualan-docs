'use strict';


/**
 * Delete Product
 *
 * accept String  (optional)
 * returns Object
 **/
exports.apiProduct1DELETE = function(accept) {
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
 * Show Product
 *
 * accept String  (optional)
 * returns Object
 **/
exports.apiProduct1GET = function(accept) {
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
 * Update Product
 *
 * body Object  (optional)
 * accept String  (optional)
 * returns Object
 **/
exports.apiProduct1PUT = function(body,accept) {
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
 * List Product
 *
 * pageSize Integer Optional, default: 100 (optional)
 * page Integer Optional, default: 1 (optional)
 * returns Object
 **/
exports.apiProductGET = function(pageSize,page) {
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
 * Create Product
 *
 * body Object  (optional)
 * accept String  (optional)
 * returns Object
 **/
exports.apiProductPOST = function(body,accept) {
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

