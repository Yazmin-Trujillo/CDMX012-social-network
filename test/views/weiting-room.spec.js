/**
* @jest-environment jsdom
*/
/* eslint-disable jest/no-focused-tests */
import { navigateTo } from '../../src/lib/navigator.js';
import { waitForAuthLoad, userState } from '../../src/lib/firebase.js';
import waitingRoom from '../../src/views/waiting-room.js';

jest.mock('../../src/lib/firebase.js');
jest.mock('../../src/lib/navigator.js');

describe('Vista waitingRoom', () => {
  beforeEach(() => {
    // rendereza vista HTML
    document.body.innerHTML = waitingRoom.render();
  });

  describe('despues del afterRender', () => {
    it('mostrar en vista email del usuario', (done) => {
      const email = document.getElementById('email');
      waitForAuthLoad.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ email: 'hgsffdfsh' });

      waitingRoom.afterRender();

      setTimeout(() => {
        expect(email.innerHTML).toBe('hgsffdfsh');
        done();
      }, 50);
    });

    fit('al hacer click en el boton continuar, para emailVerified === true navegar al muro principal ', async () => {
      waitForAuthLoad.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ emailVerified: true });
      waitingRoom.afterRender();
      await waitForAuthLoad;

      document.getElementById('button-go').click();

      expect(navigateTo).toHaveBeenCalledWith('/homeUser');
    });
  });
});
