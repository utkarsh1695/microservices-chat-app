import React, { useState } from 'react';
import style from './index.scss';

const config = [
  { key: 'settings', title: "Settings" }
]

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className={style.container}>
      <div onClick={toggleMenu} className={`${style.icon} ${showMenu ? style.cross : ""}`} />
      <div className={`${style.dropdown} ${showMenu ? style.show : ""}`}>
        {
          config.map(({ key, title }, index) => (
            <div key={`__${key}:${index}__`}>{title}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Hamburger;