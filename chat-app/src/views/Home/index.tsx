import ChatListing from '../../containers/ChatListing';
import Layout from '../../Layout';

const Home = () => {
  return (
    <Layout pageTitle={'Chat App'}>
      <ChatListing />
    </Layout>
  )
}

export default Home;
