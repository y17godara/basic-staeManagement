// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BUY_ICECREAM } from "../redux/iceCream/iceCreamType"

function HookIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.cream.numOfIceCream);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Ice Cream - {numOfIceCream}</h2>
            <button onClick={() => dispatch({ type: BUY_ICECREAM  })} >Buy IceCream</button>
        </div>
    );
}

export default HookIceCreamContainer;