import { useRouter } from "next/router"
import { useState, useEffect } from 'react';
import questionsData from './../Questions/questionsData';
import QuestionCard from './../components/QuestionCard';
import Progress from './../components/Progress';
import styles from "../styles/Questions.module.scss"

const Questions = () => {
   const [index, setIndex] = useState(0)
   const [yes, calcYes] = useState(0)
   const [question, setQuestion] = useState(questionsData[index])
   const qLength = questionsData.length

   const answer = (plus) => {
      setIndex(index + 1)
      plus ? calcYes(yes + 1): null
   }

   const percent = (index + 1) / qLength * 100
   const deg = yes / qLength * 100

   const router = useRouter()
   useEffect(() => {
      if(index === qLength) {
         router.push({
            pathname: "/result",
            query: {
               yes,
               deg
            }
         }) 
      } else {
         setQuestion(questionsData[index])
      }
   }, [index])



   return(
      <>
         <main className={styles.flex}>
            <Progress
               index={index}
               percent={percent}
            />
            <QuestionCard 
               question={question}
               answer={answer}
               
            />
         </main>
      </>
   )
}

export default Questions