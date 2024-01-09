import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'


function NewTransaction({ addNewTransaction, radioBtn }) {
  const [income, setIncome] = useState(0);
  const [desc, setDesc] = useState("")
  const [transactionType, setTransactionType] = useState("")

  const StoreValue = () => {
    if (!["income", "expanse"].includes(transactionType)) {
      alert('Please select a transaction type');
      // return;
    }
    else if (income === '' || income == '0' || desc === "") {
      alert('Please enter some Amount and Description value')
    } else {
      if (transactionType === 'income') {
        addNewTransaction(desc, Number(income))
        setTimeout(() => {

          setIncome(0);
          setDesc('');
          setTransactionType('');
        }, 3000);
      }
      else if (transactionType === 'expanse') {
        addNewTransaction(desc, -Number(income))
        setTimeout(() => {

          setIncome(0);
          setDesc('');
          setTransactionType('');
        }, 3000);
      }
    }


  }


  const handleChangeIncome = (event) => {
    setIncome(event.target.value)

  }
  const handleChangeDesc = (event) => {
    setDesc(event.target.value)

  }
  const handleRadioClick = (event) => {
    // console.log(event.target.name)
    setTransactionType(event.target.name)
  }

  return (
    <div className="new-transaction" >
      <h3 className="new-transaction">New Transaction:</h3>
      <hr style={{ margin: '8px 20px' }} />

      <div className="income-radio">
        <h3>Income</h3>
        <input type="radio" name="income" onChange={handleRadioClick} checked={transactionType === "income"} id="" />
      </div>
      <div className="expense-radio">
        <h3>Expense</h3>
        <input type="radio" onChange={handleRadioClick} checked={transactionType === "expanse"} name="expanse" id="" />
      </div>


      <div className="enpense-amount">
        <input className="description" value={desc} onChange={handleChangeDesc} type="text" placeholder="Description" />
        <h3 style={{ margin: '4px 50px' }} > &#x2193; </h3>

        <div className="salary-box">
          <input id="balance-amount" type="number" placeholder="Income Here" value={income} onChange={handleChangeIncome} />
          <button onClick={StoreValue} className="  submit">Submit</button>

        </div>
      </div>

    </div>
  )
}

export default NewTransaction
