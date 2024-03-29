import React from 'react';
import style from './index.module.scss';

interface IProps {
  value: string;
  placeholder: string;
  onInputChange: Function;
}

const Textarea = ({
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

export default Textarea;