import React from 'react';
import style from './index.module.scss';

interface IProps {
  children?: React.ReactNode;
  onClick: Function;
  roundBorders?: boolean;
}

function Button({
  onClick,
  roundBorders,
  children
}: IProps) {
  const combinedClass =`${style.container} ${roundBorders ? style.roundBorders : ''}`;

  const onButtonClick = () => {
    onClick();
  }

  return (
    <div className={combinedClass} onClick={onButtonClick}>
      {children}
    </div>
  )
}

export default Button;
