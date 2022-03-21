import { dataValidation } from '../src/views/signin.js';

jest.mock('../src/lib/firebase.js');

describe('dataValidation', () => {
  it('debería ser una función', () => {
    expect(typeof dataValidation).toBe('function');
  });

  it(' debería retornar mensaje "Correo inválido" para formto de email incorrecto', () => {
    const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const email = (okok.com);
    (expRegEmail.test(email) !== true)
    expect(expRegEmail.test(email) !== true).toStrictEqual();
  });

  // test('12 and 5 should return 17', () => {
  //   const result = sum(12, 5);
  //   expect(result).toBe(17);
  // }); cuando es async dentro del it { expect.assertions(1)}
});
