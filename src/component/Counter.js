import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const dispatch = useDispatch();
    const myCount = useSelector(state => state.updateCounter)
    return (
        <div>
            <h1>Counter</h1>
            <p>{myCount} </p>
            <button onClick={() => dispatch({ type: "INCRE" })}>+</button>
            <button onClick={() => dispatch({ type: "DECRE" })}>-</button>
        </div>
    )
}
