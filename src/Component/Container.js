import React, { useState } from 'react'
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
const expense = [
  {
    income: "50000",
    expense: "20000"
  }
]

function Container() {
  const [transactions, setTransaction] = useState(transactionData);


  const addNewTransaction = (desc, amount) => {
    const newTrans = { desc: desc, amount: amount }
    transactions.push(newTrans);
    setTransaction([...transactions]);
  }



  return (
    <div id="container" >
      {/* <button onClick={() => { addNewTransaction("Shopping", -1000) }} >Add New txn</button> */}
      <Header />
      <Expense addNewTransaction={addNewTransaction} />
      <Transaction transactions={transactions} />
      <NewTransaction addNewTransaction={addNewTransaction} />

    </div>
  )
}

export default Container
