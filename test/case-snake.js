var caseSnake = require("../case-snake"),
    assert = require("assert");

describe("case-snake", function() {
    var tests = [
            ["T", ["T"]],
            ["t", ["t"]],
            ["Test", ["Test"]],
            ["test", ["test"]],
            ["this_Is_A_Test", ["this", "Is", "A", "Test"]],
            ["This_Is_A_Test", ["This", "Is", "A", "Test"]],
            ["THIS_Is_A_Test", ["THIS", "Is", "A", "Test"]]
        ];

    describe("#parse()", function() {
        tests.forEach(function(pair) {
            var name = pair[0],
                parsed = pair[1];

            it(JSON.stringify(name) + " -> " + JSON.stringify(parsed), function() {
                assert.deepEqual(caseSnake.parse(name), parsed);
            });
        });
    });

    describe("#stringify()", function() {
        tests.forEach(function(pair) {
            var name = pair[0],
                parsed = pair[1];

            it(JSON.stringify(parsed) + " -> " + JSON.stringify(name), function() {
                assert.equal(caseSnake.stringify(parsed), name);
            });
        });
    });

    describe("#is()", function() {
        tests.forEach(function(pair) {
            var name1 = pair[0],
                parsed = pair[1],
                name2 = pair[1].join("#"),
                val1 = parsed.length > 1;

            it(JSON.stringify(name1) + " (" + val1 + ")", function() {
                assert.equal(caseSnake.is(name1), val1);
            });
            it(JSON.stringify(name2) + " (false)", function() {
                assert.equal(caseSnake.is(name2), false);
            });
        });
    });
});
