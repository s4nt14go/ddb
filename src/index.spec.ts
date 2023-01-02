import { helloWorld, goodBye } from '../src';
import npmPackage from '../src';

describe('NPM Package', () => {
  it('should have a helloWorld and goodBye property', () => {
    expect(npmPackage.helloWorld).toBeDefined();
    expect(npmPackage.goodBye).toBeDefined();
  });
});

describe('Hello World Function', () => {

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!';
    const actual = helloWorld();
    expect(actual).toBe(expected);
  });
});

describe('Goodbye Function', () => {

  it('should return the goodbye message', () => {
    const expected = 'Goodbye from my example modern npm package!';
    const actual = goodBye();
    expect(actual).toBe(expected);
  });
});