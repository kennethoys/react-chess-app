import React from 'react';
import './Square.css';

function Square(props) {
    return (
        <div
        className={'square ' + props.color}
        style={props.style}
        onClick={props.onClick}
        />
    )
}

export default Square;