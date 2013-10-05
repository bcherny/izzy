(function() {
  var extend, izzy, izzyFn, umd;

  umd = function(factory) {
    if (typeof exports === 'object') {
      return module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
      return define([], function() {
        return factory;
      });
    } else {
      return this.izzy = factory;
    }
  };

  extend = function(a, b) {
    var key;
    for (key in b) {
      a[key] = b[key];
    }
    return a;
  };

  izzy = {
    array: function(thing) {
      return !izzy.string(thing) && !izzy.number(thing) && izzy.object(thing) && izzy.defined(thing.length);
    },
    boolean: function(thing) {
      return typeof thing === 'boolean';
    },
    defined: function(thing) {
      return thing !== void 0;
    },
    "function": function(thing) {
      return typeof thing === 'function';
    },
    "null": function(thing) {
      return thing === null;
    },
    number: function(thing) {
      return typeof thing === 'number';
    },
    object: function(thing) {
      return typeof thing === 'object';
    },
    string: function(thing) {
      return typeof thing === 'string';
    }
  };

  izzyFn = function(type, thing) {
    if (izzy.defined(izzy[type])) {
      return izzy[type](thing);
    } else {
      return void 0;
    }
  };

  extend(izzyFn, izzy);

  umd(izzyFn);

}).call(this);
