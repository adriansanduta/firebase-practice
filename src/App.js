import React from 'react';
import './App.css';
import { auth, db } from './firebase/init'; 
import {collection, addDoc, getDocs, getDoc, doc, query, where} from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

function createPost() {
  const post = {
    title: "Finish Firebase Section",
    description: "Do Frontend Simplified",
    uid: user.uid,
  };
  addDoc(collection(db, "posts"), post)
}

async function getAllPosts() {
  const {docs} = await getDocs(collection(db, "posts"));
  const posts = docs.map(elem => ({...elem.data(), id: elem.id}));
}

function getPostById() {
  const postRef = doc(db, "posts", "id");
}


async function getPostByUid() {
  const postCollectionRef = await query(
    collection(db, "posts"),
    where("uid", "==", user.uid),
  );
}




  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      setUser(user);
    });
  }, []);
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
      {loading ? <h1>Loading...</h1> : <h1>{user?.email}</h1>}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post By ID</button>
      <button onClick={getPostByUid}>Get Post By UID</button>
    </div>
  );
}

export default App;