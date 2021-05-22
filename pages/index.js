// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to development branch</h1>
        <p>This Project shows a list of companies and their details</p>
        <article>
          <Link href="/companies">
            <a>Companies List</a>
          </Link>
        </article>
      </main>
    </div>
  );
}
