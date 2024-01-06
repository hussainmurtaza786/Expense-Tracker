import React from 'react'

function NewTransaction() {
  return (
    <div className="new-transaction">
        <h3 className="new-transaction">New Transaction:</h3>
        <hr style={{margin:'8px 20px'}}/>
        <div className="enpense-amount">
        <input className="description" type="text" placeholder="Description" /> 
        <h1 style={{margin:'4px 50px' }} > &#x2193; </h1> 
        <input className="amount" type="number" placeholder="Amount" />

        </div>
      
    </div>
  )
}

export default NewTransaction
