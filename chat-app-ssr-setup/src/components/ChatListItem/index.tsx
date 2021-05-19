import React from 'react';
import style from './index.scss';

interface IProps {
  title: string;
  isLast: boolean;
  onClick: Function;
}

const ChatListItem = ({ title, isLast, onClick }: IProps) => {
  return (
    <div
      className={`${style.container} ${isLast ? style.last : ''}`}
      onClick={() => onClick(title)}
    >
      <div className={style.icon} />
      <div className={style.title}>{title}</div>
    </div>
  )
}

export default ChatListItem;