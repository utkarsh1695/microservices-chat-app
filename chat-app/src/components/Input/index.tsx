import React from 'react';
import style from './index.scss';

interface IProps {
  value: string;
  placeholder: string;
  onInputChange: Function;
}

const Input = ({
  value,
  placeholder,
  onInputChange
}: IProps) => {

  const onChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    onInputChange(value);
  }

  return (
    <div className={style.container}>
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input;