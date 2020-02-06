const questions = document.querySelectorAll(".question")
const answer = document.querySelectorAll(".answer")
let quesNum = 1
let answerNum = 0
const opacity = () => {
   answer[answerNum].style.opacity = "0.3" 
   questions[answerNum].classList.add("no-click")
   answerNum++
   if (quesNum <= 10) {
      questions[quesNum].classList.remove("hide")
      quesNum++
   }
}

export { questions, answer, quesNum, answerNum, opacity }