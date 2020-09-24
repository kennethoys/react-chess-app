import React from 'react';
import Board from './chess_board/Board';
import './Game.css'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: initChessBoard(),
            turn: 1
        }

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
    }

    onDragStart = (e) => {
        console.log("Drag start #1");
        console.log(this.state.turn);

        // Change color of square to show valid move
        let squares = this.state.squares;
        squares[0].className = "square available-square";

        this.setState((state) => ({
            squares: squares,
            turn: state.turn + 1
        }));
    }
    
    onDragOver = (e) => {
        console.log("Dragged over");

        // Change color of square to show current selected position
    }
    
    onDragLeave = (e) => {
        console.log("Drag leave");

        // Update game state and set everything back to normal
    }

    possibleMovesRook() {
        
    }

    render() {
        return (<div className="game">
            <Board
            squares={this.state.squares}
            onDragStart={this.onDragStart}
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            />
        </div>
        );
    }
}

function initChessBoard() {
    const squares = [];
    
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            let squareNum = i*8+j;
            let color = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-square" : "dark-square";

            let square = {
                squareNum: squareNum,
                className: "square " + color,
                piece: null
            }
            squares[squareNum] = square;
        }
    }

    for(let k = 8; k < 16; k++) {
        squares[k].piece = {
            player: 2,
            pieceType: "pawn"
        };

        squares[k+40].piece = {
            player: 1,
            pieceType: "pawn"
        }
    }

    squares[0].piece = {
        player: 2,
        pieceType: "rook"
    };
    squares[7].piece = {
        player: 2,
        pieceType: "rook"
    };
    squares[56].piece = {
        player: 1,
        pieceType: "rook"
    };
    squares[63].piece = {
        player: 1,
        pieceType: "rook"
    };

    squares[1].piece = {
        player: 2,
        pieceType: "knight"
    };
    squares[6].piece = {
        player: 2,
        pieceType: "knight"
    };
    squares[57].piece = {
        player: 1,
        pieceType: "knight"
    };
    squares[62].piece = {
        player: 1,
        pieceType: "knight"
    };

    squares[2].piece = {
        player: 2,
        pieceType: "bishop"
    };
    squares[5].piece = {
        player: 2,
        pieceType: "bishop"
    };
    squares[58].piece = {
        player: 1,
        pieceType: "bishop"
    };
    squares[61].piece = {
        player: 1,
        pieceType: "bishop"
    };

    squares[3].piece = {
        player: 2,
        pieceType: "queen"
    };
    squares[59].piece = {
        player: 1,
        pieceType: "queen"
    };

    squares[4].piece = {
        player: 2,
        pieceType: "king"
    };
    squares[60].piece = {
        player: 1,
        pieceType: "king"
    };

    return squares;
}

// 0 is not even but we just assume it is here
function isEven(num) {
    return num % 2 === 0
}

export default Game;