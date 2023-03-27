import { ChessPiece, ChessPieceNames } from './ChessPiece';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import whiteIcon from '../../assets/white-rook.png';
import blackIcon from '../../assets/black-rook.png';
export class Rook extends ChessPiece {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.WHITE ? whiteIcon : blackIcon;
        this.name = ChessPieceNames.ROOK;
    }
}