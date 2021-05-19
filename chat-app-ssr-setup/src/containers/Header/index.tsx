import React from 'react';
import Hamburger from '../../components/Hamburger';
import style from './index.scss';

interface IHeaderProps {
  title: string;
  showSearch?: boolean;
  showMenu?: boolean;
}

const Header = ({
  title,
  showSearch = false,
  showMenu = true
}: IHeaderProps) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>
        {showSearch && <div className={style.search}><img src="" alt="search" /></div>}
        {showMenu && <Hamburger />}
      </div>
    </div>
  )
}

export default Header
