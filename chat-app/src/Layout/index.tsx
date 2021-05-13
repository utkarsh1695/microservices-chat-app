import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import style from "./index.scss";

interface ILayoutProps {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent = ({ children }: ILayoutProps) => {
  return (
    <div className={style.container}>
      <button>Test Button</button>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
