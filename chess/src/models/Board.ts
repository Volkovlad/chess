import {Cell} from './Cell';
import {Colors} from "./Colors";
import {Pawn} from "./chessPiece/Pawn";
import {Queen} from "./chessPiece/Queen";
import {King} from "./chessPiece/King";
import {Bishop} from "./chessPiece/Bishop";
import {Knight} from "./chessPiece/Knight";
import {Rook} from "./chessPiece/Rook";

export class Board {
    cells: Cell[][] = [];

    public initsCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];

            for (let j = 0; j < 8; j++) {
                const cellColor = (j + i) % 2 !== 0 ? Colors.BLACK : Colors.WHITE;

                row.push(new Cell(this, j, i, cellColor, null));
            }

            this.cells.push(row);
        }
    }

    /**
     * start from the top left corner
     * @param x
     * @param y
     */
    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }
    public addChessPieces() {
        this.addPawns();
        this.addKings();
        this.addQueens();
        this.addBishops();
        this.addKnights();
        this.addRooks();
    }

    private addPawns() {
        // 8 pawns for each side (black and white)
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, this.getCell(i, 6));
            new Pawn(Colors.BLACK, this.getCell(i, 1));
        }
    }

    private addKings() {
        new King(Colors.BLACK, this.getCell(4,0));
        new King(Colors.WHITE, this.getCell(4,7));
    }

    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3,0));
        new Queen(Colors.WHITE, this.getCell(3,7));
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2,0));
        new Bishop(Colors.BLACK, this.getCell(5,0));
        new Bishop(Colors.WHITE, this.getCell(2,7));
        new Bishop(Colors.WHITE, this.getCell(5,7));
    }

    private addKnights() {
        new Knight(Colors.BLACK, this.getCell(1,0));
        new Knight(Colors.BLACK, this.getCell(6,0));
        new Knight(Colors.WHITE, this.getCell(1,7));
        new Knight(Colors.WHITE, this.getCell(6,7));
    }

    private addRooks() {
        new Rook(Colors.BLACK, this.getCell(0,0));
        new Rook(Colors.BLACK, this.getCell(7,0));
        new Rook(Colors.WHITE, this.getCell(0,7));
        new Rook(Colors.WHITE, this.getCell(7,7));
    }
}