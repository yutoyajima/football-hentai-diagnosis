import { Container } from "react-bootstrap"
import styles from "./Progress.module.scss"



const Progress = ({ index, percent }) => {

   return(
      <Container className={styles.container}>
         <h2 className={styles.qNo}>Question {index + 1}</h2>
         <div className={styles.progressBar}>
            <div className={styles.barInside} style={{width: percent + "%" }} />
         </div>
      </Container>
   )
}

export default Progress

// className={styles.}