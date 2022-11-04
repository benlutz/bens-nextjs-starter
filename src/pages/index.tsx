import Link from 'next/link'
import { styled, theme } from '../../stitches.config'
import styles from '../styles/Home.module.css'

export default function Home() {
  const Button = styled('button', {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 10,
    marginVertical: 50,
    '@sm': {
      backgroundColor: 'blue',
    },
    '@md': {
      backgroundColor: 'green',
    },
  })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ben&apos;s
          <a href='https://nextjs.org'>Next.js!</a> Starter
        </h1>

        <Button>Test</Button>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <Link href='/blog' className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Visit this projects blog page</p>
          </Link>

          <Link href='/projects' className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Visit this projects project page</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
