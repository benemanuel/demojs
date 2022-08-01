!(function (e, o) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = o())
    : 'function' == typeof define && define.amd
    ? define(o)
    : ((e || self).bundlingDemo = o());
})(this, function () {
  return function () {
    console.log('demo');
  };
});
//# sourceMappingURL=index.umd.js.map
