const fizzBuzz = require('./fizzbuzz')

describe('fizzBuzz', () => {
  it('returns Fizz if number is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('returns Buzz if number is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('returns 8 if number is 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
  it('returns FizzBuzz if number is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('returns Fizz if number is 18', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  it('returns Buzz if number is 20', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
})