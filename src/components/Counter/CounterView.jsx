import React from 'react';

const CounterView = ({ count, increment, decrement, reset, save, reloud }) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>zerar</button>
            <button onClick={save}>salvar</button>
            <button onClick={reloud}>carregar</button>
        </div>
    )
};

export default CounterView;