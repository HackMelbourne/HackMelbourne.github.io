import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOadwxsvjJLjV_b6inYObz73BwGFF7vHA',
  authDomain: 'hmwebsite-b89d5.firebaseapp.com',
  projectId: 'hmwebsite-b89d5',
  storageBucket: 'hmwebsite-b89d5.appspot.com',
  messagingSenderId: '441279518479',
  appId: '1:441279518479:web:63bacc397a4c342b69907a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
