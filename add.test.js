const add = require('./add')

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
  it('adds 0 and 5', () => {
    expect(add(0, 5)).toBe(5);
  });
  it('adds 20 and 15', () => {
    expect(add(20, 15)).toBe(35);
  });
});