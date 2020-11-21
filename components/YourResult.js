import styles from "./YourResult.module.scss"
const YourResult = ({ result, renderResult }) => {

   if(renderResult) {
      return(
         <div className={styles.wrap}>
            <p className={styles.youAre}>あなたは... <br/><span>{result.youAre}</span></p>
            <p className={styles.advice}>{result.advice}</p>
         </div>
      )
   } else if (!renderResult) {
      return (
         <>
         </>
      )
   }
}

export default YourResult