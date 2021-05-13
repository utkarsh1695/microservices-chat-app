import React from 'react';
import { shallowEqual } from 'react-redux';

import styles from "./index.scss";

import { useStateDispatch, useStateSelector } from '../../store/hooks';
import { testAction } from './actions';

const HomePage = () => {
  const dispatch = useStateDispatch();
  const homeData = useStateSelector(state => state?.home, shallowEqual);

  const testClick = () => dispatch(testAction(!homeData.flag));
  
  return (
    <h1 className={styles.container} onClick={testClick}>
      Home page
    </h1>
  );
};

export default HomePage;
