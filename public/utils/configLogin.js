import { initializeApp } from "firebase/app";
import { getAuth, singInWithEmailAndPassword } from "https://www.gstatic.com/firebasesj/9.1.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyB_tzEsUPnqWH_F0ZCkg69oEBX5dDTbIMg",
  authDomain: "tienda-ropa-3165e.firebaseapp.com",
  projectId: "tienda-ropa-3165e",
  storageBucket: "tienda-ropa-3165e.appspot.com",
  messagingSenderId: "209459674479",
  appId: "1:209459674479:web:e985938bd025bf18217c9a"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const login = async () => {
    try {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        const userCredential = await singInWithEmailAndPassword(auth, email, password)
        const idToken = await userCredential.user.getIdToken()

        const response = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken })
        })

        const data = await response.json()

        

    } catch (error) {

    }
}