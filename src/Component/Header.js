import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'
import React, { useState } from 'react'

function Header({ transactions }) {
    const amounts = transactions.map(tx => tx.amount)
console.log(amounts)
// Total=

    return (
        <div className="header">
            <h2 className="center">
                Expense Tracker
            </h2>
            <h3 className="center">
                by Hussain
            </h3>
           
            
        </div>
    )
}


export default Header
