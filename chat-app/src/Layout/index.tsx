import React from 'react';
import Footer from '../components/Footer';
import Header from '../containers/Header';

import style from "./index.scss";

interface ILayoutProps {
  pageTitle: string;
  children?: React.ReactNode
}

const Layout = ({ children, pageTitle }: ILayoutProps) => {
  return (
    <div className={style.container}>
      <Header title={pageTitle} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
