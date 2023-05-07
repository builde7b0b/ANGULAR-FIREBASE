import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoWBsh8H_pfdecuHqgKQaMtBdjXx81zqU",
  authDomain: "angular-19639.firebaseapp.com",
  databaseURL: "https://angular-19639-default-rtdb.firebaseio.com",
  projectId: "angular-19639",
  storageBucket: "angular-19639.appspot.com",
  messagingSenderId: "369303592090",
  appId: "1:369303592090:web:666b6504efa09875cb5323",
  measurementId: "G-6WJY2STKEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
