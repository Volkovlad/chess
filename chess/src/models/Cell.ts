import { Colors } from './Colors';
import { ChessPiece } from './chessPiece/ChessPiece';
import { Board } from "./Board";


export class Cell {
    readonly xAxis: number;
    readonly yAxis: number;
    readonly  color: Colors;

    id: number; // for react keys
    chessPiece: ChessPiece | null; // null, if there is no chess piece on the cell
    board: Board;
    available: boolean;

    constructor(board: Board, xAxis: number, yAxis: number, color: Colors, chessPiece: ChessPiece| null) {
        this.board = board;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.color = color;
        this.chessPiece = chessPiece;
        this.available = false;
        this.id = Math.random();
    }
}