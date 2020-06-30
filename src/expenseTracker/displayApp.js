import React from 'react';
import {Header} from './header'
import {Balance} from './Balance'
import { IncomeExpenses } from './incomeExpenses';
import { TransactionList } from './transactionList';
import { AddTransaction } from './addTransaction';
import {GlobalProvider} from './globalState'
import './App.css';

function DisplayApp () {
    return(
        <React.Fragment>
            <div className="center">
            <GlobalProvider>
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            </GlobalProvider>
            </div>
        </React.Fragment>
    )
}

export default DisplayApp