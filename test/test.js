var main = require('../index');
var assert = require('assert');

describe('Fibonacci Function Tests', function () {
    it('should return 5 for Fib(5)', function () {
        assert.strictEqual(main.fibonacci(5), 5);
    });

    it('should return 0 and 1 for first two terms', function () {
        assert.strictEqual(main.fibonacci(0), 0);
        assert.strictEqual(main.fibonacci(1), 1);
    });

    it('should return 55 for Fib(10)', function () {
        assert.strictEqual(main.fibonacci(10), 55);
    });

    it('should handle larger inputs correctly', function () {
        assert.strictEqual(main.fibonacci(15), 610); // 15th Fibonacci number
    });
});

describe('Factorial Function Tests', function () {
    it('should return 1 for n = 0', function () {
        assert.strictEqual(main.factorial(0), 1);
    });

    it('should return 1 for n = 1', function () {
        assert.strictEqual(main.factorial(1), 1);
    });

    it('should return undefined for negative inputs', function () {
        assert.strictEqual(main.factorial(-5), undefined);
    });

    it('should calculate factorial for positive integers', function () {
        assert.strictEqual(main.factorial(5), 120);
        assert.strictEqual(main.factorial(7), 5040);
    });
});
