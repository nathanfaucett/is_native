var tape = require("tape"),
    isNative = require("..");


tape("isNative(value: Any) should return true when the value is a native function or object", function(assert) {
    assert.equal(isNative(function noop() {}), false);
    assert.equal(isNative(Object.prototype.hasOwnProperty), true);
    assert.end();
});
