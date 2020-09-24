import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            squares: props.squares,
            onDragStart: props.onDragStart,
            onDragOver: props.onDragOver,
            onDragLeave: props.onDragLeave
        } 
    }

    static getDerivedStateFromProps(nextProps) {
        return nextProps;
    }

    render() {
        let board = [];

        for(let i = 0; i < 8; i++) {
            let row = [];

            for(let j = 0; j < 8; j++) {
                let squareNum = i*8+j;

                if(this.state.squares[squareNum].piece) {
                    row.push(
                    <Square 
                    squareNum={this.state.squares[squareNum].squareNum}
                    className={this.state.squares[squareNum].className}
                    onDragStart={this.state.onDragStart}
                    onDragOver={this.state.onDragOver}
                    onDragLeave={this.state.onDragLeave}
                    player={this.state.squares[squareNum].piece.player} 
                    pieceType={this.state.squares[squareNum].piece.pieceType} 
                    />
                    );
                }
                else {
                    row.push(
                    <Square 
                    squareNum={this.state.squares[squareNum].squareNum}
                    className={this.state.squares[squareNum].className}
                    onDragStart={this.state.onDragStart}
                    onDragOver={this.state.onDragOver}
                    onDragLeave={this.state.onDragLeave}
                    />
                    );
                }
            }
            board.push(<div className='board-row'>{row}</div>);
        }

        return (
            <div className='board'>{board}</div>
        );
    }
}

export default Board;