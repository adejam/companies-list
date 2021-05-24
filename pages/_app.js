import PropTypes from 'prop-types';
// import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../js/index';
import wrapper from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </Provider>
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

// const makeStore = () => store;

export default wrapper.withRedux(MyApp);
