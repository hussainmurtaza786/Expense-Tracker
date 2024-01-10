import React, { useState, useEffect } from 'react'
import Header from './Header'
import Expense from './Expense'
import Transaction from './Transaction'
import NewTransaction from './NewTransaction'

const transactionData = [
  { desc: "Salary", amount: 50000 },
  { desc: "Coaching Fee", amount: -5000 },
  { desc: "Shopping", amount: -5000 },
  { desc: "Shopping", amount: -10000 },
]








function Container() {
  const [transactions, setTransaction] = useState(transactionData);
  const addNewTransaction = (desc, amount) => {
    const newTrans = { desc: desc, amount: amount }
    transactions.push(newTrans);
    setTransaction([...transactions]);
  }
 




  return (
    <div id="container">
      {/* <button onClick={() => { addNewTransaction("Shopping", -1000) }} >Add New txn</button> */}
      <Header transactions={transactions} />
      <Expense transactions={transactions} />
      <Transaction transactions={transactions} />
      <NewTransaction addNewTransaction={addNewTransaction} />

    </div>
  )
}

export default Container
