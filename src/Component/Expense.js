import React from 'react'

function Expense() {
  return (
    <div id="income-expense">

        <div className="income text">
            <h3>Income</h3>
            <p className="rs-inex">Rs:80000</p> 
        </div>
        <hr style={{border:'2px solid blue', height:'40px'}}/>
        <div className="expense text">
            <h3>Expense</h3>
           <p className="rs-inex">Rs:50000</p> 
        </div>
      


    </div>
    
  )
}

export default Expense 
