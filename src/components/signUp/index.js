import './index.css'
import { Button, Alert, Breadcrumb, Dropdown, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const LogIn = ({setUser}) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='signUpPage'>
            <h1>Sign Up</h1>
            <div className='signUpDiv'>
                <p>User Name</p>
                <input value={username} onChange={(e)=> {setUserName(e?.target?.value)}}/>
                <p>Password</p>
                <input value={password} onChange={(e)=> {setPassword(e?.target?.value)}}/>
                <div className='d-grid gap 2'>
                    <Button variant='primary' size='lg' style={{width: 450}}>Login</Button>{' '}
                </div>
            </div>


        </div>
    )
}

export default LogIn
