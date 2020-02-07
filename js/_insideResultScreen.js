import { calcResult } from "./_calculation.js"

const theResult = document.querySelector(".the-result")
const whatToDo = document.querySelector(".what-to-do")
const seeResultBtn = document.querySelector(".see-result")

const showResult = () => {
   seeResultBtn.classList.add("button-hide")
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
export { theResult, whatToDo, seeResultBtn, showResult }