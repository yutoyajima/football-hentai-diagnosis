import styles from "../styles/Credit.module.scss"
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link  from 'next/link';
import Head from 'next/head';

const Credit = () => {

   return (
      <> 
         <Head>
            <title>サッカー変態度診断 | クレジット</title>
         </Head>
         <h2 className={styles.title}>クレジット</h2>
         <Container className={styles.wrap}>
            <div className={styles.inspire}>
               <p>This app is inspired by <span>"5分で分かるサッカー変態度診断"</span> <br/>from <a href="">Leo the Football TV</a></p>
               <iframe 
                  src="https://www.youtube.com/embed/yXqDpDRVHgQ" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
               />
            </div>
            <div className={styles.me}>
               <p>Webapp developed by <a href="">YutoDev</a></p>
               <p>Visit <a href="https://github.com/yutoyajima/football-hentai-diagnosis" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
         </Container>
         <Link href="/">
            <Button className={styles.bottom}>トップ</Button>
         </Link>
      </>
   )
}

export default Credit