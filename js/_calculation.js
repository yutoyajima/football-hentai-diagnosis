const yes = document.querySelectorAll(".yes")
const no = document.querySelectorAll(".no")

let calcResult = 0
const calculate = () => {
   calcResult += 1
}

export { yes, no, calcResult, calculate }