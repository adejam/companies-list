import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Companies List | Home</title>
      </Head>
      <h1 className={styles.title}>Welcome to Companies List</h1>
      <article className="bg-white p-10">
        <p className={`${styles.title} p-10`}>
          This Project shows a list of companies and their details
          <br />
          <br />
          Built with Nextjs
        </p>
        <Link href="/companies">
          <a className="btn btn-primary d-block my-10 mx-auto">Show Companies List</a>
        </Link>
      </article>
    </>
  );
}
