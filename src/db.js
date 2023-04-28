import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyDtEqddy17t_9EFZ4raGysiiD7d0UbrTQY",
	authDomain: "greenstitch-yugank.firebaseapp.com",
	projectId: "greenstitch-yugank",
	storageBucket: "greenstitch-yugank.appspot.com",
	messagingSenderId: "686677402358",
	appId: "1:686677402358:web:24882875e903baedbe02d7",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
