/*! zcookies - 0.1.1 license: MIT https://github.com/ukyo/zcookies */
(function(global) {
  "use strict";

  global.zcookies = {
    get: function(k) {
      var x = Cookies.get(k);
      if (x === undefined) return;
      return msgpack.unpack(pako.inflateRaw(atob(x)));
    },
    set: function(k, v, options) {
      var x = Cookies.get(k);
      var cookieSizeBeforeSave = document.cookie.length;
      var y = btoa(String.fromCharCode.apply(null, pako.deflateRaw(msgpack.pack(v), {level: 9})));
      Cookies.set(k, y, options);
      if (x !== y && cookieSizeBeforeSave === document.cookie.length) {
        throw new Error('zcookies: QUOTA Error!');
      }
    }
  };
})(this);