const yourAnswer = document.querySelectorAll(".your-answer")
let yourAnswerNum = 0
const yourAnswerYes = () => {
   yourAnswer[yourAnswerNum].textContent = "→ YES"
   yourAnswerNum++
}
const yourAnswerNo = () => {
   yourAnswer[yourAnswerNum].textContent = "→ NO"
   yourAnswerNum++
}
const yourAnswer1 = () => {
   yourAnswer[yourAnswerNum].textContent = "→ ①"
   yourAnswerNum++
}
const yourAnswer2 = () => {
   yourAnswer[yourAnswerNum].textContent = "→ ②"
   yourAnswerNum++
}
const yourAnswer3 = () => {
   yourAnswer[yourAnswerNum].textContent = "→ ③"
   yourAnswerNum++
}

export { yourAnswer, yourAnswerNum, yourAnswerYes, yourAnswerNo, yourAnswer1, yourAnswer2, yourAnswer3 }