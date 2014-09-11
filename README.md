# zcookies

Save objects to cookies!

zcookies uses zlib compression, and it can save more than plain text.

## install

```
bower install zcookies
```

## depandencies

* [ScottHamper/Cookies](https://github.com/ScottHamper/Cookies)
* [msgpack/msgpack-javascript](https://github.com/msgpack/msgpack-javascript)
* [nodeca/pako](https://github.com/nodeca/pako)

## usage

```js
zcookies.set('foo', {a: 1, b: "こんにちは世界"}, options);
zcookies.get('foo');
```

zcookies is a [ScottHamper/Cookies](https://github.com/ScottHamper/Cookies) wrapper.
See `options` details on this page.

## LICENSE

zcookies released under the MIT license.
