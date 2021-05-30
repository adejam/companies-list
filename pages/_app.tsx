import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { wrapper } from '../redux/store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
    PropTypes.symbol,
  ]).isRequired,
};

export default wrapper.withRedux(MyApp);
