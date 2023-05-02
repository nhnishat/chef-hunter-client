// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB0ycEsO7n7IIiLHFj5Y3IJAN4DsGvNrqU',
	authDomain: 'chef-hunter-clientsite.firebaseapp.com',
	projectId: 'chef-hunter-clientsite',
	storageBucket: 'chef-hunter-clientsite.appspot.com',
	messagingSenderId: '380130135511',
	appId: '1:380130135511:web:9265278b4ee9b2ad048f92',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
