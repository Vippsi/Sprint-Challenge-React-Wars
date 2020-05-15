import React, {useState, useEffect} from 'react';




export default function({count, setCount}){

    
   const handleChangeIncrease = (event) => {
    event.preventDefault();    
    setCount(count + 1)
       
    }

    const handleChangeDecrease = (event) => {
        event.preventDefault();    
        setCount(count - 1)
           
        }

      
    return(
        <div>
        <form onSubmit={handleChangeIncrease}>
            <h3>Change page:</h3>
            <input type='submit' value='Next Page' onChange={handleChangeIncrease}/>
        </form>
        
        <form onSubmit={handleChangeDecrease}>
        <input type='submit' value='Previous Page' onChange={handleChangeDecrease}/>
    </form>
    </div>


    )
}