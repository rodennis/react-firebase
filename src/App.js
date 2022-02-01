import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import Header from './components/header'

require('dotenv').config();
function App() {
    const [user, setUser] = useState('');

	return (
		<BrowserRouter>
            <Header/>
			<Switch>
                <Route path='/' exact={true}>
                    <Home/>
                </Route>
                <Route path='/login'>

                    <LogIn setUser={setUser}/>
                </Route>
                <Route path='/signup'>
                    <SignUp/>
                </Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
