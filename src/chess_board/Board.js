import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: props.squares
        }
    }

    render() {
        let board = [];

        for(let i = 0; i < 8; i++) {
            let row = [];

            for(let j = 0; j < 8; j++) {
                let color = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-square" : "dark-square";
                row.push(<Square 
                    color={color}
                    style={this.state.squares[i*8+j].piece ? this.state.squares[i*8+j].piece.style : null}
                />);
            }
            board.push(<div className='board-row'>{row}</div>);
        }

        return (
            <div className='board'>{board}</div>
        );
    }
}

// 0 is not even but we just assume it is here
function isEven(num) {
    return num % 2 === 0
}

export default Board;