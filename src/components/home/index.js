import './index.css'
import { Button, Alert, Breadcrumb, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import app from '../../firebase/firebase.js'
import { googleLogin } from '../../firebase/auth'
import { useEffect, useState } from 'react'
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
