import React from 'react';
import { ResultProps } from '../types';

const Result: React.FC<ResultProps> = ({ sudoku }) => {
  const elapsed = Math.floor(
    (sudoku.solveTime?.getTime()! - sudoku.startTime.getTime()) / 1000
  );
  return <h1>Congrats! You solvide Sudoku in {elapsed} seconds</h1>;
};

export default Result;
