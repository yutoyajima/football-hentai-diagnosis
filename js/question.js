const yes = document.querySelectorAll(".yes")
const no = document.querySelectorAll(".no")




let calcResult = 0
const calculate = () => {
   calcResult += 1
}
for (let i = 0; i <= 10; i++) {
   yes[i].addEventListener("click", calculate)
}


const resultScreen = document.querySelector("#result-screen")
const showResultScreen = () => {
   resultScreen.classList.remove("hide")
}
yes[10].addEventListener("click", showResultScreen)
no[14].addEventListener("click", showResultScreen)
no[15].addEventListener("click", showResultScreen)

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
for (let i = 0; i <= 10; i++) {
   yes[i].addEventListener("click", opacity)
}
for (let i = 0; i <= 15; i++) {
   no[i].addEventListener("click", opacity)
}






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
for (let i = 0; i <= 5; i++) {
   yes[i].addEventListener("click", yourAnswerYes)
   no[i].addEventListener("click", yourAnswerNo)
}
for (let i = 6; i <= 10; i++) {
   yes[i].addEventListener("click", yourAnswer3)
}
for (let i = 6; i <= 15; i++) {
   if (i === 6 || i === 8 || i === 10 || i === 12 || i === 14) {
      no[i].addEventListener("click", yourAnswer1)
   } else if (i === 7 || i === 9 || i === 11 || i === 13 || i === 15) {
      no[i].addEventListener("click", yourAnswer2)
   }
}






const theResult = document.querySelector(".the-result")
const whatToDo = document.querySelector(".what-to-do")
const seeResult = document.querySelector(".see-result")

const showResult = () => {

   seeResult.classList.add("button-hide")
   if (calcResult <= 2) {
      console.log("あなたはサッカー常人です");
      theResult.textContent = "サッカー常人"
      whatToDo.textContent = "通勤・通学中のドリブルには気をつけましょう"
   } else if (calcResult <= 5) {
      console.log("あなたはサッカープチ変態です");
      theResult.textContent = "サッカープチ変態"
      whatToDo.textContent = "上司や恋人との食事中の最中に、お皿を4-4-2に並べないように気をけましょう"
   } else if (calcResult <= 8) {
      console.log("あなたはサッカー変態です");      
      theResult.textContent = "サッカー変態"
      whatToDo.textContent = "たまにはサッカーを忘れて、息抜きにバルセロナの試合を観ましょう"
   } else if (calcResult <= 11) {
      console.log("あなたはサッカード変態です");
      theResult.textContent = "サッカー'ド'変態"
      whatToDo.textContent = "今すぐサッカーから離れる必要があります。部屋で花火をしたり、2階から後輩にダーツの矢を投げてリフレッシュしましょう。"
   }
}

const again = document.querySelector(".again")
const reload = () => {
   window.location.reload();
}
again.addEventListener("click", reload)

const showAgain = () => {
   again.classList.remove("hide")
}

seeResult.addEventListener("click", showResult)
seeResult.addEventListener("click", showAgain)