import React from 'react';
import Board from './chess_board/Board';
import Piece from './chess_pieces/Piece';
import './Game.css'

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            squares: initChessBoard()
        }
    }

    render() {
        return (<div className="game">
            <Board
            squares = {this.state.squares}
            />
        </div>
        );
    }
}

function initChessBoard() {
    const squares = [];
    
    for(let i = 0; i < 64; i++) {
        let square = {
            //row: (i === 0) ? 0 : Math.floor(i/8),
            //col: i%8,
            piece: null
        }
        squares[i] = square;
    }
    
    for(let j = 8; j < 16; j++) {
        squares[j].piece = new Piece(2, "pawn");
        squares[j+40].piece = new Piece(1, "pawn");
    }

    squares[0].piece = new Piece(2, "rook");
    squares[7].piece = new Piece(2, "rook");
    squares[56].piece = new Piece(1, "rook");
    squares[63].piece = new Piece(1, "rook");

    squares[1].piece = new Piece(2, "knight");
    squares[6].piece = new Piece(2, "knight");
    squares[57].piece = new Piece(1, "knight");
    squares[62].piece = new Piece(1, "knight");

    squares[2].piece = new Piece(2, "bishop");
    squares[5].piece = new Piece(2, "bishop");
    squares[58].piece = new Piece(1, "bishop");
    squares[61].piece = new Piece(1, "bishop");

    squares[3].piece = new Piece(2, "queen");
    squares[59].piece = new Piece(1, "queen");

    squares[4].piece = new Piece(2, "king");
    squares[60].piece = new Piece(1, "king");

    return squares;
}

export default Game;