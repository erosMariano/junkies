const containerImage = document.querySelector(".container-home")

const numAleatorio = (Math.random() * (4 - 0) + 0).toFixed(0)
const colors = [
    "#499B4F",
    "#FCFCF5",
    "#FE4C21",
    "#45BFDD",
    "#F3CD46"
]


if (numAleatorio == 1) {
    containerImage.style.backgroundImage = "none"
    containerImage.style.backgroundColor = `${colors[0]}`
} else if (numAleatorio == 2) {
    containerImage.style.backgroundColor = `${colors[1]}`
} else if (numAleatorio == 3) {
    containerImage.style.backgroundImage = "none"
    containerImage.style.backgroundColor = `${colors[2]}`
} else if (numAleatorio == 4) {
    containerImage.style.backgroundColor = `${colors[3]}`
}

if (window.innerWidth < 645) {
    const molduraGeral = document.querySelector(".molduraGeral")
    molduraGeral.src = "moldura-geral-400.png"

    const stroke = document.querySelector('.stroke-img')
    stroke.src = "stroke-400.png"

    const mask1 = document.querySelector(".mask1")

}

if (window.innerWidth < 500) {
    const molduraGeral = document.querySelector(".molduraGeral")
    molduraGeral.src = "moldura-geral-300.png"

    const stroke = document.querySelector('.stroke-img')
    stroke.src = "stroke-300.png"

    const mask1 = document.querySelector(".mask1")

}