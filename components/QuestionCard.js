import { Container, Button, ButtonGroup } from "react-bootstrap"
import styles from "./QuestionCard.module.scss"




const QuestionCard = ({ question, answer }) => {

   const choices = question.choice.map((c, i) => {
      return (
         <Button 
            key={i}
            onClick={() => answer(c.plus)} 
            className={styles.choice}
         >
            {c.answer}
         </Button>
      )
   })

   return(
      <>
         <Container className={styles.container} >
            <h3 className={styles.questionText}>{question.text}</h3>
            <p className={styles.tips}>{question.tips}</p>
            <div className={styles.btns}>
               {choices}
            </div>
         </Container>
      </>
   )
}

export default QuestionCard