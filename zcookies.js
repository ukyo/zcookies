/*! zcookies - 0.1.0 license: MIT https://github.com/ukyo/zcookies */
(function(global) {
  "use strict";

  global.zcookies = {
    get: function(k) {
      return msgpack.unpack(pako.inflateRaw(atob(Cookies.get(k))));
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