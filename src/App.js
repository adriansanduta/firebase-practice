import React from 'react';
import './App.css';
import { auth } from './firebase/init'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  function logout() {
    auth.signOut();
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;