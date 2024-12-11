import React from 'react';

const Display = ({ currentInput, result }) => (
    <div className="display">
        {result !== null ? <div>Result: {result}</div> : <div>{currentInput || '0'}</div>}
    </div>
);

export default Display;
