import React, { useEffect, useState } from 'react';
import { RegexValidatorFunction } from '../../types';
import style from './index.module.scss';

interface IProps {
  value: string;
  placeholder: string;
  onChange: Function;
  validations: RegexValidatorFunction[];
  autoFocus?: boolean
}

const Input = ({
  value,
  placeholder,
  onChange,
  validations,
  autoFocus = false
}: IProps) => {
  const error = '';
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (autoFocus) setFocus(true);
  }, [autoFocus])

  const validate = (value: string) => {
    let isValid = true;
    validations.forEach(validation => {
      if (!validation(value).valid) isValid = false;
    })
    return isValid;
  }

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const isValid = validate(inputValue);
    if (!isValid) return;
    onChange(inputValue);
  }

  return (
    <div className={`${style.container} ${focus ? style.active : ""} ${error ? style.error : ""}`}>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={onInputChange}
      />
      <div className={style.placeholder}>{placeholder}</div>
      {error && <div className={style.errorText}>{error}</div>}
    </div>
  )
}

export default Input;
