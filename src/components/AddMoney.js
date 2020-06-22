import React,{ useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddMoney = () => {
    
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const { addTransaction}= useContext(GlobalContext)
    const onSubmit=e=>{
        e.preventDefault()
         
      const newtransation={
          id:Math.floor(Math.random()*100000000),
        text,
        amount: +amount
      
        }

    addTransaction(newtransation);

    }


    return (
        <div>
            <h4>Add Transaction</h4>
            <hr />
            <form onSubmit={onSubmit} >
                <div className="form-control" >
                    <label htmlFor="text" >Detail</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value) } placeholder="Enter the Detail" />

                </div>
                <div className="form-control" >
                    <label htmlFor="amount" >Add Amount(Note if you want to add the amount do it with + sign and viceversa)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value) } placeholder="Enter the Amount to be added" />

                </div>
                
<button className="btn" > Add Amount </button>


            </form>
        </div>
    )
}
