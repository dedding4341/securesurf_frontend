import React from 'react';

function Something(props) {

    let saveSite = () => {
        //post request to the backend
    }
    return (
        <div>
            <img src='./logo.svg'></img>
            <h2 onClick="saveSite()">Save site to watch list</h2>
            <p>Surf with out us</p>
        </div>
    )
}

export default Something;