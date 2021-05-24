import Layout from '../components/Layout';
import '../styles/globals.css';
import '../js/index'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
