import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import {Transaction} from "./transaction"

export const TransactionsList = () => {
    const {transactions} = useContext(GlobalContext);
     
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(<Transaction transaction={transaction }/>))}
                
            </ul>
        </>
    )
    }