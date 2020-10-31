import React, {useState, useEffect} from 'react';
import Something from './something'
import Login from './Login'

function Popup(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    let token = localStorage.getItem("token");

    let loginToggle = () => {
        if(loggedIn == true) {
            return <Something/>
        }

        if(loggedIn == false) {
            return <Login/>
        }
    }

    useEffect(() => {
        if(token === null) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    })

    return (
        <div>
            {loginToggle()}
        </div>
    )
}

export default Popup;