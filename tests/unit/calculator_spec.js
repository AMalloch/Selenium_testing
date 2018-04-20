var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

// chain of functions to do an operation
  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  });

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  });

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(100, calculator.runningTotal);
  });

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(20, calculator.runningTotal);
  });

// should change running total but not the calculation
  it('can click a number', function(){
    calculator.numberClick(1);
    assert.equal(false, calculator.newTotal);
    assert.equal(1, calculator.runningTotal);
  });

// should have preformed a new calculation
  it('can click operator', function(){
    calculator.operatorClick("/");
    assert.equal(true, calculator.newTotal);
  });

// should not have performed a calculation but changed running total to 0
  it('can clear', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.clearClick();
    assert.equal(false, calculator.newTotal);
    assert.equal(0, calculator.runningTotal);
  });

});
