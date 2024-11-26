var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('Factorial of a negative number', function() {
  it('should return undefined for negative inputs', function() {
      assert.strictEqual(main.factorial(-5), undefined);
  });
});

describe('Factorial Function Tests', function () {
    it('should return 1 when n is 0', function () {
        assert.strictEqual(factorial(0), 1); 
    });

    it('should return 1 when n is 1', function () {
        assert.strictEqual(factorial(1), 1); 
    });

    it('should return undefined for negative input', function () {
        assert.strictEqual(factorial(-5), undefined); 
    });

    it('should calculate factorial for positive integers', function () {
        assert.strictEqual(factorial(5), 120); 
    });
});
