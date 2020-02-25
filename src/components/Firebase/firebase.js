import app from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDr2An-FKilGdBIhNVs0PSwpk6i3fxpOmc",
    authDomain: "test-nodejs-2.firebaseapp.com",
    databaseURL: "https://test-nodejs-2.firebaseio.com",
    projectId: "test-nodejs-2",
    storageBucket: "test-nodejs-2.appspot.com",
    messagingSenderId: "397010823227",
    appId: "1:397010823227:web:3661a3733fb0a75ff0d41e"
  };

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)

    this.auth = app.auth()
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password)

}

export default Firebase
