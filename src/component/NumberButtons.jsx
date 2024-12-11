import React from 'react';

const NumberButtons = ({ dispatch }) => {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return (
        <div className="number-buttons">
            {digits.map((digit) => (
                <button key={digit} onClick={() => dispatch({ type: 'add_digit', payload: digit })}>
                    {digit}
                </button>
            ))}
        </div>
    );
};

export default NumberButtons;
