// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BUY_CAKE } from "../redux/cake/cakeType"

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch({ type: BUY_CAKE })} >Buy Cake</button>
        </div>
    );
}

export default HookCakeContainer;