import { ChessPiece, ChessPieceNames } from './ChessPiece';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import whiteIcon from '../../assets/white-king.png';
import blackIcon from '../../assets/black-king.png';
export class King extends ChessPiece {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.WHITE ? whiteIcon : blackIcon;
        this.name = ChessPieceNames.KING;
    }
}