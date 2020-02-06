const resultScreen = document.querySelector("#result-screen")
const showResultScreen = () => {
   resultScreen.classList.remove("hide")
}

export { resultScreen, showResultScreen }