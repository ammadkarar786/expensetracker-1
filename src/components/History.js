import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';



export const History = () => {

    const { transaction } = useContext(GlobalContext)

    return (
        <div>
            <h4> History  </h4>
            <hr />
            <ul className="list" >

                {transaction.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/> 
                 ))}




            </ul>
        </div>
    )
}
