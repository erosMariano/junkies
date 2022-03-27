const containerImage = document.querySelector(".container-home")
if (window.innerWidth > 1200) {
    const numAleatorio = (Math.random() * (4 - 0) + 0).toFixed(0)

    const colorsDesk = [
        "#499B4F",
        "#FCFCF5",
        "#FE4C21",
        "#45BFDD",
        "#F3CD46"
    ]


    if (numAleatorio == 1) {
        containerImage.style.backgroundImage = "none"
        containerImage.style.backgroundColor = `${colorsDesk[0]}`
    } else if (numAleatorio == 2) {
        containerImage.style.backgroundColor = `${colorsDesk[1]}`
    } else if (numAleatorio == 3) {
        containerImage.style.backgroundImage = "none"
        containerImage.style.backgroundColor = `${colorsDesk[2]}`
    } else if (numAleatorio == 4) {
        containerImage.style.backgroundColor = `${colorsDesk[3]}`
    }
} else {

    const numAleatorio = (Math.random() * (3 - 0) + 0).toFixed(0)
    const colorsDesk = [
        "#499B4F",
        "#FCFCF5",
        "#45BFDD",
        "#F3CD46"
    ]

    if (numAleatorio == 0) {
        containerImage.style.backgroundImage = "none"
        containerImage.style.backgroundColor = `${colorsDesk[0]}`

    }
    if (numAleatorio == 1) {
        containerImage.style.backgroundColor = `${colorsDesk[1]}`
    } else if (numAleatorio == 2) {
        containerImage.style.backgroundImage = "none"
        containerImage.style.backgroundColor = `${colorsDesk[2]}`
    } else if (numAleatorio == 3) {
        containerImage.style.backgroundImage = "none"
        containerImage.style.backgroundColor = `${colorsDesk[3]}`
    }
}
if (window.innerWidth < 645) {
    const stroke = document.querySelector('.stroke-img')
    stroke.src = "stroke-400.png"
}

if (window.innerWidth < 500) {
    const stroke = document.querySelector('.stroke-img')
    stroke.src = "stroke-300.png"
}




