import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/common';
import ChatListing from '../../containers/ChatListing';
import Layout from '../../Layout';

const Home = () => {
  return (
    <Layout pageTitle={'Chat App'}>
      <Link
        to={ROUTES.LOGIN}
      >
        LOGIN
      </Link>
      <ChatListing />
    </Layout>
  )
}

export default Home;
