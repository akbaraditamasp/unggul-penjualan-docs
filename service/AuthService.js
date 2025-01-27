'use strict';


/**
 * Logout
 *
 * accept String  (optional)
 * returns Object
 **/
exports.apiAuthDELETE = function(accept) {
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
 * Login
 *
 * body Object  (optional)
 * accept String  (optional)
 * returns Object
 **/
exports.apiAuthPOST = function(body,accept) {
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

