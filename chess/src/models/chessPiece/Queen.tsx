import { ChessPiece, ChessPieceNames } from './ChessPiece';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import whiteIcon from '../../assets/white-queen.png';
import blackIcon from '../../assets/black-queen.png';
export class Queen extends ChessPiece {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.WHITE ? whiteIcon : blackIcon;
        this.name = ChessPieceNames.QUEEN;
    }
}