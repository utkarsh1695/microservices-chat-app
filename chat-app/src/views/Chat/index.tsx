import React from 'react';
import { useParams } from 'react-router';
import ChatWindow from '../../containers/ChatWindow';
import Layout from '../../Layout';

interface IRouteSlug {
  username: string;
}

const Chat = () => {
  const { username } = useParams() as IRouteSlug;
  return (
    <Layout pageTitle={username}>
      <ChatWindow />
    </Layout>
  )
}

export default Chat;
