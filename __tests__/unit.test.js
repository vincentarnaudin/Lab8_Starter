// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2const functions = require('../code-to-unit-test/unit-test-me');

describe('Unit tests', () => {
  // isPhoneNumber tests
  test('Valid phone number should return true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });

  test("isPhoneNumber", () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
  });

  test('Valid phone number should return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('Invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('123-45-6789')).toBe(false);
  });

  // isEmail tests
  test('Valid email should return true', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
  });

  test('Invalid email should return false', () => {
    expect(functions.isEmail('testexample.com')).toBe(false);
  });

  test('Valid email should return true', () => {
    expect(functions.isEmail('user_123@example.co')).toBe(true);
  });

  test('Invalid email should return false', () => {
    expect(functions.isEmail('user@example')).toBe(false);
  });

  // isStrongPassword tests
  test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('password123_')).toBe(true);
  });

  test('Invalid strong password should return false', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
  });

  test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('Abc1234_')).toBe(true);
  });

  test('Invalid strong password should return false', () => {
    expect(functions.isStrongPassword('example123_123456789')).toBe(false);
  });

  // isDate tests
  test('Valid date should return true', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
  });

  test('Invalid date should return false', () => {
    expect(functions.isDate('13/32/20')).toBe(false);
  });

  test('Valid date should return true', () => {
    expect(functions.isDate('12/01/2022')).toBe(true);
  });

  test('Invalid date should return false', () => {
    expect(functions.isDate('2022/12/01')).toBe(false);
  });

  // isHexColor tests
  test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
  });

  test('Invalid hex color should return false', () => {
    expect(functions.isHexColor('#ZZZZZZ')).toBe(false);
  });

  test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#abcdef')).toBe(true);
  });

  test('Invalid hex color should return false', () => {
    expect(functions.isHexColor('invalid')).toBe(false);
  });
});