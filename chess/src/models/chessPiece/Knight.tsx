import { ChessPiece, ChessPieceNames } from './ChessPiece';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackIcon from '../../assets/black-knight.png';
import whiteIcon from '../../assets/white-knight.png';
export class Knight extends ChessPiece {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.WHITE ? whiteIcon : blackIcon;
        this.name = ChessPieceNames.KNIGHT;
    }
}