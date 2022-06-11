import React from 'react';
import { SudokuFieldProps } from '../types';

const SudokuField: React.FC<SudokuFieldProps> = ({ field, onChange }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = isNaN(parseInt(e.currentTarget.value))
      ? null
      : parseInt(e.currentTarget.value);
    onChange({ field, value });
  };
  return (
    <input
      className="field"
      value={field.value === null ? '' : field.value}
      readOnly={field.readonly}
      onChange={handleChange}
    />
  );
};

export default SudokuField;
