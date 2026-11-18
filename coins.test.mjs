import test from "node:test";
import assert from "node:assert/strict";

import {calculateCoins} from "./coins.mjs";

test("승인하면 보상 동전이 지급된다", () => {
    const result = calculateCoins(100, 50, true);

    assert.equal(result, 150);
});

test("승인하지 않으면 보상 동전이 지급되지 않는다", () => {
    const result = calculateCoins(100, 50, false);

    assert.equal(result, 100);
});

test("음수 보상은 허용하지 않는다", () => {
    assert.throws(() => {
        calculateCoins(100, -50, true);
    }, RangeError);
    });

test("문자열 보상은 허용하지 않는다", () => {
    assert.throws(() => {
        calculateCoins(100, "50", true);
    }, TypeError);

});
