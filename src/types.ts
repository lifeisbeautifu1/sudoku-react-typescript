export type SudokuBoardProps = {
  onChange: (e: ChangeType) => void;
  sudoku: SudokuType;
};

export type SudokuFieldProps = {
  onChange: (e: ChangeType) => void;
  field: ColType;
};

export type ChangeType = {
  field: ColType;
  value: Value;
};

export type Value = number | null;

export type ColType = {
  row: number;
  col: number;
  value: Value;
  readonly: boolean;
};

export type RowType = {
  cols: ColType[];
  index: number;
};

export type SudokuType = {
  raw: number[];
  rows: RowType[];
  solution: number[];
  startTime: Date;
  solveTime: Date | null;
};

export type TimerProps = {
  startTime: Date;
};

export type ResultProps = {
  sudoku: SudokuType;
};
