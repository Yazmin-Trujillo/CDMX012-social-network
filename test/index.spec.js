// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import { dataValidation } from '../src/views/signin.js';
// import { signInFirebase } from '../src/lib/firebase.js';

// import { signInWithEmailAndPassword, signInFirebase } from '../lib/firebase-imports';

jest.mock('../lib/firebase-imports.js');

describe('dataValidation', () => {
  it('debería ser una función', () => {
    expect(typeof dataValidation).toBe('function');
  });

  // test('12 and 5 should return 17', () => {
  //   const result = sum(12, 5);
  //   expect(result).toBe(17);
  // });
});

// import {
//   filterFilmsBySearch, filterCharactersBySearch, filterLocationBySearch, filterVehiclesBySearch,
//   ordenarMayorMenor, ordenarMenorMayor, ordenarAZ, ordenarZA,
// } from '../src/filter.js';
// import data from '../src/data/ghibli/ghibli.js';

// describe('filterFilmsBySearch', () => {
//   it('debería ser una función', () => {
//     expect(typeof filterFilmsBySearch).toBe('function');
//   });

//   it("debería retornar Kiki's Delivery Service para `kiki`", () => {
//     const res = filterFilmsBySearch(data.films, 'kiki');

//     expect(res).toStrictEqual([data.films[2]]);

//     expect(res.length).toEqual(1);
//     expect(res[0].id).toEqual('ea660b10-85c4-4ae3-8a5f-41cea3648e3e');
//     expect(res[0].title).toEqual('Kiki\'s Delivery Service');
//   });
// });
