import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,sign_in} from './actions'; // actions/index;

const App=()=>{
    const count=useSelector((state)=>state.count);
    const isLogged=useSelector(state=>state.isLogged);
    const dispatch=useDispatch();

    
    return(
        <>
            <h1>Count : {count}</h1>
            {/* with payload */}
            <button onClick={()=>dispatch(increment(5))} >+ by 5</button>
            <button onClick={()=>dispatch(increment(1))} >+ by 1</button>
            <button onClick={ ()=> dispatch( decrement() ) } >- by 1</button><br/>
            <button onClick={ ()=> dispatch( sign_in() ) } >Sign in</button>
            {isLogged?(<h3>Valueable information when Sign in</h3>):''}
        </>
    );
}
 
export default App;