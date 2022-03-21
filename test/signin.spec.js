import { dataValidation } from '../src/views/signin.js';

jest.mock('../src/lib/firebase.js');

describe('dataValidation', () => {
  it('debería ser una función', () => {
    expect(typeof dataValidation).toBe('function');
  });

  // test('12 and 5 should return 17', () => {
  //   const result = sum(12, 5);
  //   expect(result).toBe(17);
  // });
});
