import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../js/index';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* // eslint-disable jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.string.isRequired,
  pageProps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyApp;
