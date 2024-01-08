import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'
import React, { useState } from 'react'

function Header({ addNewTransaction }) {


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
               
            </span>
        </div>
    )
}


export default Header
