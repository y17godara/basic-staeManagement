// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function AdvHookCockContainer(props) {
    const [items, setItems] = useState(1);
    return (
        <div>
            <h2>Number of Ice Cream - </h2>
            <button>Buy Cock</button>
        </div>
    );
}

export default AdvHookCockContainer;