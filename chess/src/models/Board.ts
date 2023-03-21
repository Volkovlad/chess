import { Cell } from './Cell';
import {Colors} from "./Colors";

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
}