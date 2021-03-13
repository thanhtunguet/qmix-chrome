import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCy4S8crjYyvzeRQufYKFrcR4fbcOonl5c',
  authDomain: 'essential-teaching-system.firebaseapp.com',
  databaseURL: 'https://essential-teaching-system.firebaseio.com',
  projectId: 'essential-teaching-system',
  storageBucket: 'essential-teaching-system.appspot.com',
  messagingSenderId: '80518626950',
  appId: '1:80518626950:web:80d4fee9c71d90aec0db07',
  measurementId: 'G-X159BWM4V4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
