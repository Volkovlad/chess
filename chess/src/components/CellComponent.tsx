import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell
}
const CellComponent = ({cell} : CellProps) => {
    return (
        <div className={`cell ${cell.color}`}>
            {cell.chessPiece?.icon && <img src={cell.chessPiece.icon}/>}
        </div>
    );
};

export default CellComponent;