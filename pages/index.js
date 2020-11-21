import Head from 'next/head'
import Link from 'next/link'
import { Container, Button } from "react-bootstrap"
import styles from '../styles/Home.module.scss'
import { metas } from "../data/meta"

export default function Home() {
   return (
      <>
         <Head>
            <title>サッカー変態度診断</title>
            <meta name="description" content={metas.desc}/>
            <meta property="og:title" content={metas.title} />
            <meta property="og:description" content={metas.desc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metas.url} />
            <meta property="og:image" content="../public/images/sub.png" />
            <meta property="og:site_name" content={metas.title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@tcr_jp" />
            <meta name="twitter:url" content="../public/images/sub.png" />
            <meta name="twitter:title" content={metas.title} />
            <meta name="twitter:description" content={metas.desc} />
            <meta name="twitter:image" content="../public/images/sub.png" />
         </Head>
         <main className={styles.bg}>
            <Container className="d-flex flex-column align-items-center justify-content-center h-100">
               <div className={styles.titles}>
                  <p className={styles.welcome}>Welcome to</p>
                  <h1 className={styles.title}>サッカー<span>変態度</span>診断</h1>
                  <p className={styles.intro}>11個の質問に答えてあなたのサッカー変態度を測りましょう</p>
               </div>
               <div className={styles.btns}>
                  <Link href="/questions">
                     <Button>はじめる</Button>
                  </Link>
                  <Link href="/credit">
                     <Button>クレジット</Button>
                  </Link>
               </div>
            </Container>
         </main>
      </>
   )
}