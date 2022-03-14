import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../firebase/firebase.js'
import UploadFile from '../UploadFile/UploadFile'

const Home = ({user}) => {
    

    return (
        <>
            <div className='homePage'>
                <h1>The site is loaded. You can now edit the home page or add other components</h1>
                
                {user?<h2 style={{textAlign: 'center'}}>Welcome, {user}</h2>:<h2 style={{textAlign: 'center'}}>Login to upload a picture!</h2>}
            </div>
            {user? <UploadFile/> : null}
        </>
    )
}

export default Home
