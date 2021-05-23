// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
