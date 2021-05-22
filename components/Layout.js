import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <title>Companies List</title>
        <meta name="description" content="Adeleye jamiu companies list app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
