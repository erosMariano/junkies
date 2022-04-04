const containerImage = document.querySelector(".container-home")

if (window.innerWidth > 1200) {
    const numAleatorio = (Math.random() * (4 - 0) + 0).toFixed(0)
    const loader = document.querySelector(".div-loading");

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
        loader.style.borderColor = "#000000"
        loader.style.borderLeftColor = "transparent"
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
    stroke.src = "./assets/img/stroke-300.png"
}

if (window.innerWidth < 500) {
    const stroke = document.querySelector('.stroke-img')
    stroke.src = "./assets/img/stroke-300.png"
}





const divForm = document.querySelector("#myForm .flex-input")
const imagem1Form = document.querySelector(".img-input")
const buttonForm = document.querySelector("#myForm button")
const loader = document.querySelector(".div-loading");
const inputPosLoading = document.querySelector(".inputPos")



function ativarPreForm() {
    loader.style.display = "none"
    inputPosLoading.style.display = "block"
}

function chamarForm() {
    const inputForm = document.querySelector(".email_user");
    loader.style.display = "block"

    divForm.style.display = "none"
    imagem1Form.style.display = "none"
    buttonForm.style.display = "none"

    if (inputForm.value === "") {
        setTimeout(() => {
            divForm.style.display = "block"
            imagem1Form.style.display = "block"
            buttonForm.style.display = "block"
            loader.style.display = "none"
            alert("Empty input")
        }, 1000)
    } else {
        SubForm()
    }
}