import React from 'react'

function Header() {
    return (
        <div className="header">
            <h2 className="center">
                Expenser Tracker
            </h2>
            <h3 className="center">
                by Hussain
            </h3>
            <span className="balance font-size center">
                <h5> Balance: </h5>
            </span>
            <span className="Rs font-size center">
                <h5> Income-here: </h5>
            <div className="salary-box">
            <input className="balance-amount" type="number "placeholder="20000"/>
            </div>
            </span>
        </div>
    )
}


export default Header
