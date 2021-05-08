import Head from 'next/head';

import { FiCalendar, FiUser } from 'react-icons/fi';

import { GetStaticProps } from 'next';

import Link from 'next/link';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Blog With Nextjs</title>
      </Head>
      <main className={styles.homeMain}>
        <section className={styles.homeSection}>
          <Link href="/">
            <a>
              <h1>Como utilizar Hooks</h1>
            </a>
          </Link>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.homeCalendarUser}>
            <div className={styles.homeCalendar}>
              <FiCalendar />
              <time>19 Abr 2021</time>
            </div>
            <div className={styles.homeUser}>
              <FiUser />
              <text>Bernardo Sertório</text>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
// const prismic = getPrismicClient();
// const postsResponse = await prismic.query();
// };
