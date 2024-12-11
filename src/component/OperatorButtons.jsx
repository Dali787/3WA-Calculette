import React from 'react';

const OperatorButtons = ({ dispatch }) => {
    const operators = ['+', '-', 'x'];
    return (
        <div className="operator-buttons">
            {operators.map((operator) => (
                <button key={operator} onClick={() => dispatch({ type: 'set_operator', payload: operator })}>
                    {operator}
                </button>
            ))}
            <button onClick={() => dispatch({ type: 'calculate' })}>=</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default OperatorButtons;
