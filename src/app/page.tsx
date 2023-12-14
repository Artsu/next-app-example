import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.grid}>
        <Link
          href="/fi/checkout"
          className={styles.card}
        >
          <h2>
            FI <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/en/checkout"
          className={styles.card}
        >
          <h2>
            EN <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/se/checkout"
          className={styles.card}
        >
          <h2>
            SE <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  )
}
