import './index.css'
import { Button, Alert, Breadcrumb, Dropdown, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { googleLogin } from '../../firebase/auth'

const LogIn = ({setUser}) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleGoogleLogin = async () => {
        const user = await googleLogin();
        await setUser(user?.displayName);
    }
    return (
        <div className='loginPage'>
            <h1>Log In</h1>
            <div className='loginDiv'>
                <p>User Name</p>
                <input value={username} onChange={(e)=> {setUserName(e?.target?.value)}}/>
                <p>Password</p>
                <input value={password} onChange={(e)=> {setPassword(e?.target?.value)}}/>
                <div>
                    <Button variant='primary' size='lg' style={{width: 450}}>Login</Button>{' '}
                    <Button variant='primary' size='lg' style={{width: 450}} onClick={() => {handleGoogleLogin()}}>Login With Google</Button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
