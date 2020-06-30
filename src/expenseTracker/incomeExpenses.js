import React, {useContext} from 'react'
import {GlobalContext} from './globalState'
import './App.css'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return(
        <React.Fragment>
            <div className="incomeExpense">
            <div>
            <h4 className="income">Income</h4>
            <p>${income}</p>
            </div>
            <div>
            <h4 className="expense">Expense</h4>
            <p>${expense}</p>
            </div>
            </div>
        </React.Fragment>
    )
}