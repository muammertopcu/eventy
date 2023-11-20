import checkContentIsValid from './checkContentIsValid';

describe('checkContentIsValid', () => {
  it('should return false if field is invalid type', () => {
    expect(checkContentIsValid('&nbsp;')).toBe(false);
    expect(checkContentIsValid('<br />')).toBe(false);
    expect(checkContentIsValid('')).toBe(false);
  });

  it('should return true if field is valid type', () => {
    expect(checkContentIsValid('test')).toBe(true);
  });
});
