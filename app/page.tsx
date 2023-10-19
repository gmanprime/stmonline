import styles from './page.module.scss'
import Header from '@comp/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />  
    </main>
  )
}
