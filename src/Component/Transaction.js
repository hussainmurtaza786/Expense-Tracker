import React from 'react'

function Transaction() {
  return (
    <div id="transaction">
      <span>
        <h3 className="transaction-text">Transactions:</h3>
      </span>
      <hr/>
      <div className="items-transaction">
        Earning
      <div className="items-transaction-x">
        Rs:80000
      </div>
      </div>
      <div className="items-transaction">
        Shopping
      <div className="items-transaction-x">
        Rs:20000
      </div>
      </div>
      <div className="items-transaction">
        Education
      <div className="items-transaction-x">
        Rs:30000
      </div>
      </div>

    </div>
  )
}

export default Transaction
