import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import styles from "./index.scss";

import { useStateDispatch, useStateSelector } from '../../store/hooks';
import { actionGetUserList, testAction } from './actions';
import ChatListItem from '../../components/ChatListItem';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/common';

const config = [
  {name: 'Name_1'},
  {name: 'Name_2'},
  {name: 'Name_3'},
  {name: 'Name_4'},
  {name: 'Name_5'}
]

const ChatListing = () => {
  const history = useHistory();
  const dispatch = useStateDispatch();
  const chatData = useStateSelector(state => state?.chat, shallowEqual);

  useEffect(() => {
    dispatch(actionGetUserList());
  }, [])

  const testClick = (userId: string) => history.push(ROUTES.CHAT_WINDOW);

  return (
    <div className={styles.container}>
      {
        config.map(({ name }, index) => (
          <ChatListItem key={index} onClick={testClick} title={name} isLast={index === config.length - 1} />
        ))
      }
    </div>
  );
};

export default ChatListing;
