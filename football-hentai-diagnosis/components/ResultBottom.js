import Link from 'next/link'
import { Button } from 'react-bootstrap';
import styles from "./ResultBottom.module.scss"

const ResultBottom = ({ result }) => {
   
   const tweet = `https://twitter.com/intent/tweet?text=私は・・・「${result.youAre}」でした!%0d`

   return(
      <>
         <div className={styles.btns}> 
            <Link href="/">
               <Button>もう一度やる</Button>
            </Link>
            <a href={tweet} target="_blank" >
               <Button>結果をツイート</Button>
            </a>  
         </div>
      </>
   )
}

export default ResultBottom