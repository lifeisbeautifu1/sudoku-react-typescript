import generator from 'sudoku';
import { SudokuType, RowType, ColType } from './types';

export const generateSudoku = (): SudokuType => {
  const raw: number[] = generator.makepuzzle();
  const rawSolution: number[] = generator.solvepuzzle(raw);

  const formatted = raw.map((e) => (e === null ? null : e + 1));
  const formattedSolution = rawSolution.map((e) => e + 1);

  const result: SudokuType = {
    raw,
    rows: [],
    solution: formattedSolution,
    startTime: new Date(),
    solveTime: null,
  };

  for (let i = 0; i < 9; ++i) {
    const row: RowType = { cols: [], index: i };
    for (let j = 0; j < 9; ++j) {
      const value = formatted[i * 9 + j];
      const col: ColType = {
        row: i,
        col: j,
        value,
        readonly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }

  return result;
};

export const checkSolution = (sudoku: SudokuType): boolean => {
  const candidate = sudoku.rows
    .map((row) => {
      return row.cols.map((col) => col.value);
    })
    .flat();
  let solved = true;
  candidate.forEach((value, index) => {
    if (value === null || value !== sudoku.solution[index]) {
      solved = false;
    }
  });
  return solved;
};
