import { signInWithPopup, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut  } from 'firebase/auth'

const auth = getAuth();
const errorHandle = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.

    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    return {error: true, data: {errorCode, errorMessage}}
}
export const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = await result.user
    return user
}

export const emailPasswordSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => errorHandle(error))
}

export const emailPasswordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    return {error: false, data: {user}}
    // ...
  })
  .catch(error => errorHandle(error))
}


export const signUserOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
