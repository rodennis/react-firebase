import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import app from '../../firebase/firebase.js'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
    const history = useHistory();

    return (
        <>
            <div className='homePage'>
                <h1>The site is loaded. You can now edit the home page or add other components</h1>
            </div>
        </>
    )
}

export default Home
