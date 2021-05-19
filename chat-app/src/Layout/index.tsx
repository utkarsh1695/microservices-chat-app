import React from 'react';
import Footer from '../components/Footer';
import Header from '../containers/Header';

import style from "./index.module.scss";

interface ILayoutProps {
  pageTitle: string;
  showMenu?: boolean;
  children?: React.ReactNode;
}

const Layout = ({ children, pageTitle, showMenu }: ILayoutProps) => {
  return (
    <div className={style.container}>
      <Header title={pageTitle} showMenu={showMenu} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
