import { Colors } from '../Colors';
import icon from '../../assets/black-king.png'
import { Cell } from '../Cell';

export enum ChessPieceNames {
    FIGURE = 'Figure',
    KING = 'King',
    KNIGHT = 'Knight',
    PAWN = 'Pawn',
    QUEEN = 'Queen',
    ROOK = 'Rook',
    BISHOP = 'Bishop',
}
export class ChessPiece {
    color: Colors;
    icon: typeof icon | null;
    cell: Cell;
    name: ChessPieceNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.chessPiece = this;
        this.icon = null;
        this.name = ChessPieceNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true;
    }

    moveChessPiece(target: Cell) {

    }
}