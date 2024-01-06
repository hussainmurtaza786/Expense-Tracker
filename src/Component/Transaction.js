import React from 'react'

function Transaction({ transactions }) {
  return (
    <div id="transaction">
      <span>
        <h3 className="transaction-text">Transactions:</h3>
      </span>
      <hr style={{ margin: '8px 20px' }} />
      {transactions.map((trans, idx) => {
        return (
          <div key={idx} className="items-transaction">
            {trans.desc}
            <div className="items-transaction-x">
              Rs:{trans.amount}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Transaction
