import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState,useEffect } from 'react'


function NewTransaction({ addNewTransaction, radioBtn }) {
  const [income, setIncome] = useState(0);
  const [desc, setDesc] = useState("")
  const [transactionType, setTransactionType] = useState("")

  let text = "This is an Expense Tracker App, in it you have to select one option from below income or expense, Income will add your amount to income  and Vice Versa for Expense.Then you have to set a description for example if you have select income so description could be your salary ,or loan Money, etc.. and then fill the amount and submit it,it will give the answer according to your filled details"

// let speaker =()=>{

  const handleonclick=() => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    
    // Clean up the speech synthesis on component unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  };

  
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
      <h2 className="new-transaction">New Transaction:</h2>
      <hr />

      <div className="income-radio">
        <h3>Income</h3>
        <input type="radio" name="income" onChange={handleRadioClick} checked={transactionType === "income"} id="" />
      </div>
      <div className="expense-radio">
        <h3>Expense</h3>
        <input type="radio" onChange={handleRadioClick} checked={transactionType === "expanse"} name="expanse" id="" />
      </div>


      <div className="enpense-amount newAmount">
        <input className="description form" value={desc} onChange={handleChangeDesc} type="text" placeholder="Description" />

        <input className="balance-amount form" type="number" placeholder="Income Here" value={income} onChange={handleChangeIncome} />

        <button onClick={StoreValue} className="  submit">Submit</button>
      </div>

      <hr className="footerHr"></hr>
      <div id="footer">

        <img src='https://static.thenounproject.com/png/890784-200.png' style={{ width: '70px', height: '70px' }} />

        <div className='circle' onClick={handleonclick}>
        <div className="circle-text">
                  click it
        </div>
        </div>
        <div className='more'>
          <svg aria-label="Settings" class="more-logo" fill="currentColor" height="24" role="img"
            viewBox="0 0 24 24" width="24">
            <title>Settings</title>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3"
              x2="21" y1="4" y2="4"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3"
              x2="21" y1="12" y2="12"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3"
              x2="21" y1="20" y2="20"></line>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NewTransaction
