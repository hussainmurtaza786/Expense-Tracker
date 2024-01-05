import React from 'react'
import Header from './Header'
import Expense from './Expense'
import Transaction from './Transaction'
import NewTransaction from './NewTransaction'

function Container() {
  return (
    <div id="container">
        <Header/>
        <Expense/>
        <Transaction/>
        <NewTransaction/>
      
    </div>
  )
}

export default Container
