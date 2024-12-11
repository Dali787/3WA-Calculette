import React, { useReducer } from 'react';
import './App.css';
import Display from './component/Display';
import NumberButtons from './component/NumberButtons';
import OperatorButtons from './component/OperatorButtons';

const initialState = {
    currentInput: '',
    previousInput: null,
    operator: null,
    result: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_digit':
            return { ...state, currentInput: state.currentInput + action.payload };
        case 'set_operator':
            return {...state, operator: action.payload, previousInput: state.currentInput, currentInput: '',
            };
        case 'calculate':
            if (!state.previousInput || !state.operator) return state;
            const prev = parseFloat(state.previousInput);
            const current = parseFloat(state.currentInput);
            let calculation = 0;
            switch (state.operator) {
                case '+': calculation = prev + current; break;
                case '-': calculation = prev - current; break;
                case 'x': calculation = prev * current; break;
                default: return state;
            }
            return { ...state, result: calculation, currentInput: calculation.toString(), previousInput: null, operator: null };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log('Current state:', state);
    return (
        <div className="calculator">
            <Display currentInput={state.currentInput} result={state.result} />
            <NumberButtons dispatch={dispatch} />
            <OperatorButtons dispatch={dispatch} />
        </div>
    );
};

export default App;
