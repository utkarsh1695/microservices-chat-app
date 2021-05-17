import React from 'react';
import Layout from '../../Layout';
import LoginPage from "../../containers/LoginPage";

const Login = () => {
  return (
    <Layout pageTitle={"Login"} showMenu={false}>
      <LoginPage />
    </Layout>
  )
}

export default Login;