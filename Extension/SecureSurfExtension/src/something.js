/*global chrome*/


import React, {useEffect} from 'react';

function Something(props) {

    let saveSite = () => {
        //post request to the backend
        fetch('https://securesurf-backend.herokuapp.com/', {
            method: "POST",
            body: JSON.stringify({
                user_email: "email@email.com"
            })
        })
    }

    let onAndOff = () => {
        if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined) {
            localStorage.clear();
            console.log("you have been logged out")
        }
    }

    return (
        <div>
            <div className="extensionPanel">
                <button onClick={onAndOff}>Log out</button>
                <p>Logging out will require a you to log back in later.</p>
            </div>
        </div>
    )
}

export default Something;