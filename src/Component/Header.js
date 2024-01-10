import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'
import React, { useState } from 'react'

function Header({ transactions }) {
    const amounts = transactions.map(tx => tx.amount)
console.log(amounts)
// Total=

    return (
        <div className="header">
            <h1 className="center">
                Expense Tracker
            </h1>
            <h1 className="center">
                by Hussain
            </h1>
           
            
        </div>
    )
}


export default Header
