import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // the component that we're currently on
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
