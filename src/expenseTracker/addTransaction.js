import React, {useState, useContext} from 'react'
import {GlobalContext} from './globalState'
import './App.css'
export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.random(),
            text,
            amount: +amount
        }

        setText('');
        setAmount(0);
        
        addTransaction(newTransaction)
    }

    return(
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Text:</label>
                    <input type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter text.." 
                    className="input"/>
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter number.."
                    className="input"/>
                </div>
                <button className="add">Add transection</button>
            </form>
        </React.Fragment>
    )
}