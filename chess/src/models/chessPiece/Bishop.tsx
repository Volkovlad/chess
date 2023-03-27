import { ChessPiece, ChessPieceNames } from './ChessPiece';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackIcon from '../../assets/black-bishop.png';
import whiteIcon from '../../assets/white-bishop.png';

export class Bishop extends ChessPiece {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.WHITE ? whiteIcon : blackIcon;
        this.name = ChessPieceNames.BISHOP;
    }
}