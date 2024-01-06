import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'
import React, { useState } from 'react'

function Header({ addNewTransaction }) {
    const [income, setIncome] = useState(0);

    const StoreValue = () => {
        console.log(income)
        if (income === '' || income == '0') {
            alert('Please enter some income value')
        } else {
            addNewTransaction("Udhar From Idrees", Number(income))
            setIncome(0);
        }
    }

    const handleChangeIncome = (event) => {
        setIncome(event.target.value)
    }

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
                <div className="salary-box">
                    <input id="balance-amount" type="number" placeholder="Income Here" value={income} onChange={handleChangeIncome} />
                    <button onClick={StoreValue} className="submit">Submit</button>

                </div>
            </span>
        </div>
    )
}


export default Header
