import React, {useContext} from 'react'
import {GlobalContext} from './globalState'
//import {Transaction} from './transaction'
import './App.css'

export const TransactionList = () => {
    const {transactions, deleteTransaction} = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-' : '+'
    
    return(
        <React.Fragment>
        <h3>History</h3>
        <ul>
            {transactions.map(transaction => 
            <li className="list">{transaction.text}:  <span>{sign}${Math.abs(transaction.amount)}</span>
                <button className="remove" onClick={() => deleteTransaction(transaction.id)}>Remove</button>
            </li>)}
        </ul>
        </React.Fragment>
    )
}