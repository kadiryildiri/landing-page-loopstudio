const header = document.getElementById("header")
const aside = document.getElementById("aside")
const main = document.getElementById("main")
const footer = document.getElementById("footer")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")

openBtn.addEventListener("click", () => {
    aside.classList.remove("hidden")
    header.classList.add("hidden")
    main.classList.add("hidden")
    footer.classList.add("hidden")
})

closeBtn.addEventListener("click", () => {
    aside.classList.add("hidden")
    header.classList.remove("hidden")
    main.classList.remove("hidden")
    footer.classList.remove("hidden")
})
