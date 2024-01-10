import React from 'react'

function Transaction({ transactions, removeTransaction }) {
const handleremove=(index)=>{
  removeTransaction(index)
}
  

  return (
    <div id="transaction">
      <span>
        <h2 className="transaction-text">Transactions:</h2>
      </span>
      <hr style={{ margin: '8px 20px' }} />
      {transactions.map((trans, idx) => {
  const inputBackgroundColor = trans.amount>0  ? 'lightgreen' : trans.amount<0 ? 'rgb(250, 35, 35)  ' : 'white';

        return (
          <div key={idx} className="items-transaction" style={{backgroundColor:inputBackgroundColor}} >
            {trans.desc} 
            <div className="items-transaction-" onClick={handleremove}>
              Rs:{trans.amount}
            </div>
            <div>
                <h4 className='close-x' onClick={() => handleremove(idx)}>
                  <div className='x-text'>
                    <button className="x-button">Close</button>
                  </div>
                  </h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Transaction
