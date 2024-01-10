import React from 'react'

function Transaction({ transactions }) {

  

  return (
    <div id="transaction">
      <span>
        <h2 className="transaction-text">Transactions:</h2>
      </span>
      <hr style={{ margin: '8px 20px' }} />
      {transactions.map((trans, idx) => {
  const inputBackgroundColor = trans.amount>0  ? 'lightgreen' : trans.amount<0 ? 'red' : 'white';

        return (
          <div key={idx} className="items-transaction" style={{backgroundColor:inputBackgroundColor}} >
            {trans.desc} 
            <div className="items-transaction-x">
              Rs:{trans.amount}
            </div>
            <div>
                <h4 className='close-x'>X</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Transaction
