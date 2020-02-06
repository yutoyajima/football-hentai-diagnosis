
for (let i = 0; i <= 10; i++) {
   yes[i].addEventListener("click", calculate)
}

yes[10].addEventListener("click", showResultScreen)
no[14].addEventListener("click", showResultScreen)
no[15].addEventListener("click", showResultScreen)

for (let i = 0; i <= 10; i++) {
   yes[i].addEventListener("click", opacity)
}
for (let i = 0; i <= 15; i++) {
   no[i].addEventListener("click", opacity)
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

seeResultBtn.addEventListener("click", showResult)

seeResultBtn.addEventListener("click", showAgain)

again.addEventListener("click", reload)