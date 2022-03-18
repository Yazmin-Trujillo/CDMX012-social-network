/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendSignInLinkToEmail,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
// import { signInFirebase } from './firebase.js';

export {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  initializeApp,
  getAnalytics,
  // signInFirebase,
};
