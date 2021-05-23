import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Companies List | Home</title>
      </Head>
      <h1 className={styles.title}>Welcome to Companies List</h1>
      <article className="bg-white p-10">
        <p className={[styles.title, 'p-10'].join(' ')}>
          This Project shows a list of companies and their details
          <br /> <br />
          Built with Nextjs
        </p>
        <Link href="/companies">
          <a className={styles.btn}>Show Companies List</a>
        </Link>
      </article>
    </>
  );
}
