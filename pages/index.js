import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lutty Ramos</title>
        <meta name="description" content="Acessoria de viagens para treinamentos de Access Consciousness" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <Image src="/images/OndaLuttyLg.png" alt="Lutty Ramos" width={142} height={98} />
        <h1 className={styles.title}>
          Lutty Ramos
        </h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Image src="/images/dente-de-leao.jpg" alt="Access Consciousness" width={1000} height={550} />


        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Lorem Ipsum &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et tortor at risus viverra adipiscing at in tellus. Aenean sed adipiscing diam donec. Tincidunt ornare massa eget egestas purus viverra accumsan in.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Lorem Ipsum &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et tortor at risus viverra adipiscing at in tellus. Aenean sed adipiscing diam donec. Tincidunt ornare massa eget egestas purus viverra accumsan in.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Lorem Ipsum &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et tortor at risus viverra adipiscing at in tellus. Aenean sed adipiscing diam donec. Tincidunt ornare massa eget egestas purus viverra accumsan in.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Lorem Ipsum &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Et tortor at risus viverra adipiscing at in tellus. Aenean sed adipiscing diam donec. Tincidunt ornare massa eget egestas purus viverra accumsan in.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://api.whatsapp.com/send?phone=50769806834" target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/OndaLutty.svg" alt="Lutty Ramos" width={72} height={16} />
          </span>
          Lutty Ramos:{' '}
          +507 6980-6834{' '}<FaWhatsapp />
        </a>
      </footer>
    </div>
  )
}
