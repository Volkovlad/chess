import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell
}
const CellComponent = ({cell} : CellProps) => {
    return (
        <div className={`cell ${cell.color}`}>
            
        </div>
    );
};

export default CellComponent;