import './index.css'
import { Button, Alert, Breadcrumb, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import app from '../../firebase/firebase'
import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth'

const Home = () => {

    const handleLogin = () => {
        const auth = getAuth();
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
  });
    }
    return (
        <>
            <div className='homePage'>
                <h1>The site is loaded. You can now edit the home page or add other components</h1>
                <Button onClick={() => {handleLogin()}}>Login</Button>
            </div>
        </>
    )
}

export default Home
