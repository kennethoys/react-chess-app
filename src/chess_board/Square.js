import React from 'react';
import Piece from '../chess_pieces/Piece';
import './Square.css';

class Square extends React.Component {
    constructor(props) {
        super();
        this.state = {
            squareNum: props.squareNum,
            className: props.className,
            color: props.color,
            player: props.player,
            pieceType: props.pieceType,
            onDragStart: props.onDragStart,
            onDragOver: props.onDragOver,
            onDragLeave: props.onDragLeave
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return nextProps;
    }

    render(props) {
        if(this.state.player) {
            return (
                <div
                index={this.state.squareNum}
                className={this.state.className}
                onDragOver={(e) => this.state.onDragOver(e)}
                onDragLeave={(e) => this.state.onDragLeave(e)}>
                    <Piece player={this.state.player} pieceType={this.state.pieceType} onDragStart={(e) => this.state.onDragStart(e)}/>
                </div>
            )
        } else {
            return (
                <div
                index={this.state.squareNum}
                className={this.state.className}
                onDragOver={(e) => this.state.onDragOver(e)}
                onDragLeave={(e) => this.state.onDragLeave(e)}
                />
            )
        }
    }
}

export default Square;