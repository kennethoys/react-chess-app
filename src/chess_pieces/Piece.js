class Piece {

    constructor(player, pieceType) {
        this.player = player;
        this.style = {
            backgroundImage: 'url(' + require("../assets/images/" + pieceType + "_" + ((player === 1) ? "white" : "black") + ".png") + ')',
            backgroundSize: 'cover'
        };
    }
}

export default Piece;