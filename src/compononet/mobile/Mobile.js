import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState([100])
    {
        if (charge == 0) {
            alert('battery is low')
        }
    }
    const decrisCharge = () => {
        const newCharge = charge - 10
        setCharge(newCharge)
    }
    return (
        <div>
            <h1>Mobile component</h1>
            <h2>Battery:{charge} % </h2>
            <button onClick={decrisCharge}>Battery down</button>
        </div>
    );
};

export default Mobile;