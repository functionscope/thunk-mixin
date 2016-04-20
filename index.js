var thunkify = require("thunkify"),
    assert = require('assert');

module.exports = thunkMixin;

function thunkMixin(obj, methodNames){
  if (obj instanceof Function){
    methodNames.forEach(function(methodName){
      assert(obj.prototype[methodName], methodName + ' not found');
      obj.prototype[methodName+"_t"] = thunkify(obj.prototype[methodName]);
    });
  } else if (obj instanceof Object){
    methodNames.forEach(function(methodName){
      assert(obj[methodName], methodName + ' not found');
      obj[methodName+"_t"] = thunkify(obj[methodName]);
    });
  }
  return obj;
}