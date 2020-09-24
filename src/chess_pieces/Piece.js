import React from 'react';

class Piece extends React.Component {
    constructor(props) {
        super();
        this.state = {
            player: props.player,
            onDragStart: props.onDragStart,
            url: require("../assets/images/" + props.pieceType + "_" + ((props.player === 1) ? "white" : "black") + ".png")
        };
    }
    
    render() {
        return (
            <img
            draggable
            src={this.state.url}
            onDragStart={(e) => this.state.onDragStart(e)}
            alt='Chess piece'
            />
        );
    }
}

export default Piece;