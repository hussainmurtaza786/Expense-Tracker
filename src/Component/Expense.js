import React from 'react'

function Expense({ transactions }) {
  let expanse = 0;
  let income = 0;
  const amounts = transactions.map(tx => tx.amount)


  transactions.forEach((tx) => {
    if (tx.amount > 0) {
      income += tx.amount;
    } else {
      expanse += tx.amount; 

    }
  });

  console.log(income, expanse)
  const balance = income + expanse;

  //   console.log(transactions)
  //    income = transactions.map(tx => {
  //     if (tx.amount>0){
  //       // alert("postive amount")


  //     }else{
  //       // alert("Negative amount ")
  //       transactions.forEach(item => {
  //         expanse+= item.amount
  //        })
  //     }
  // })
  // console.log(income)

  //  l et income = 0;
  //   let expanse = 0;



  return (
    <div id="income-expense">
    

      <div className="income text">
        <h3 >Income</h3>

        <p id="rs-inex">Rs:{income}  </p>
      </div>
      <hr style={{ border: '2px solid blue', height: '70px' }} />
      <div className="expense text">
        <h3>Expense</h3>
        <p id="rs-inex">Rs: {expanse} </p>
      </div>
      <hr style={{ border: '2px solid blue', height: '70px' }} />

      <div className="expense text">
        <h3>Balance</h3>
        <p id="rs-inex">Rs: {balance} </p>
      </div>



    </div>

  )
}

export default Expense 
