import PropTypes from 'prop-types';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className="content">
    <Head>
      <title>Companies List</title>
      <meta name="description" content="Adeleye jamiu companies list app" />
      <meta name="keywords" content="Companies list" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Navbar />
    <main className="mx-auto p-10">{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Layout;
