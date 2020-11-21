import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import { results } from "../data/resultsData"
import YourResult from './../components/YourResult';
import ProgCircle from "../components/ProgCircle";
import { Container } from "react-bootstrap";
import styles from "../styles/Result.module.scss"
import ResultBottom from './../components/ResultBottom';
import Head from "next/head"

const Result = () => {

   const router = useRouter()
   const yes = Number(router.query.yes)
   const deg = Number(router.query.deg)
   const [result, setResult] = useState({})
   const [renderResult, setRenderResult] = useState(!false)

   useEffect(() => {
      if (yes <= 2) {
         setResult(results[0])
      } else if (yes <= 5) {
         setResult(results[1])
      } else if (yes <= 8) {
         setResult(results[2])
      } else if (yes <= 11) {
         setResult(results[3])
      }
   }, [])

   console.log(deg)

   

   return (
      <>
         <Head>
            <title>サッカー変態度診断 | 診断結果</title>
         </Head>
         <Container className={styles.flex}>
            <h2>診断結果</h2>
            <div className={styles.wrap}> 
               <ProgCircle deg={deg} />
               <YourResult result={result} renderResult={renderResult} />
            </div>
            <ResultBottom result={result} />
         </Container>
      </>
   )
}

export default Result