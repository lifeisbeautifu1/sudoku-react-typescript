import React from 'react';
import SudokuBoard from './components/SudokuBoard';
import { SudokuType, ChangeType } from './types';
import { generateSudoku, checkSolution } from './sudoku';
import Timer from './components/Timer';
import Result from './components/Result';

function App() {
  const [sudoku, setSudoku] = React.useState<SudokuType>(generateSudoku());
  const onChange = (e: ChangeType): void => {
    const copyState: SudokuType = { ...sudoku };
    copyState.rows[e.field.row].cols[e.field.col].value = e.value;
    if (!sudoku.solveTime) {
      const solved = checkSolution(copyState);
      if (solved) {
        copyState.solveTime = new Date();
      }
    }
    setSudoku(copyState);
  };

  const solveSudoku = () => {
    const copyState = { ...sudoku };
    copyState.rows.forEach((row) => {
      row.cols.forEach((col) => {
        col.value = copyState.solution[row.index * 9 + col.col];
      });
    });
    setSudoku(copyState);
  };
  return (
    <div className="App">
      <header>Sudoku</header>

      <div className="container">
        {!sudoku.solveTime && <Timer startTime={sudoku.startTime} />}
        {sudoku.solveTime && <Result sudoku={sudoku} />}
        <SudokuBoard sudoku={sudoku} onChange={onChange} />
        {/* <button className="btn" onClick={solveSudoku}>
          Solve It
        </button> */}
      </div>
    </div>
  );
}

export default App;
