import React from 'react';
import { SudokuBoardProps } from '../types';
import SudokuField from './SudokuField';

const SudokuBoard: React.FC<SudokuBoardProps> = ({ sudoku, onChange }) => {
  return (
    <div className="sudoku">
      {sudoku.rows.map((row) => {
        return (
          <div className="row" key={row.index}>
            {row.cols.map((field) => {
              return (
                <SudokuField
                  onChange={onChange}
                  field={field}
                  key={field.col}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SudokuBoard;
