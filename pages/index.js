import Head from 'next/head'
import Link from 'next/link'

import { Container, Button } from "react-bootstrap"
import styles from '../styles/Home.module.scss'

export default function Home() {
   return (
      <main className={styles.bg}>
         <Container className="d-flex flex-column align-items-center justify-content-center h-100">
            <div className={styles.titles}>
               <p className={styles.welcome}>Welcome to</p>
               <h1 className={styles.title}>サッカー<span>変態度</span>診断</h1>
               <p className={styles.intro}>11個の質問に答えてあなたのサッカー変態度を測りましょう</p>
            </div>
            <Link href="/questions">
               <Button className={styles.start}>はじめる</Button>
            </Link>
         </Container>
      </main>
   )
}



//className={styles.}