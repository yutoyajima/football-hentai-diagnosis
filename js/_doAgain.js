const again = document.querySelector(".again")
const reload = () => {
   window.location.reload();
}
const showAgain = () => {
   again.classList.remove("hide")
}

export { again, reload, showAgain }