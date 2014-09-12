/*! zcookies - 0.0.2 license: MIT https://github.com/ukyo/zcookies */
(function(global) {
  "use strict";

  global.zcookies = {
    get: function(k) {
      return msgpack.unpack(pako.inflateRaw(atob(Cookies.get(k))));
    },
    set: function(k, v, options) {
      var x = Cookies.get(k);
      var y = btoa(String.fromCharCode.apply(null, pako.deflateRaw(msgpack.pack(v), {level: 9})));
      Cookies.set(k, y, options);
      if (x !== y && x === Cookies.get(k)) {
        throw new Error('MiniCookies: A too large value!');
      }
    }
  };
})(this);