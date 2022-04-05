const buttonMailChimp = document.querySelector("#mc-embedded-subscribe")
const inputMailChimp = document.querySelector("#mce-EMAIL")


const myInput = document.querySelector("#myInput")
const myBtn = document.querySelector(".btnChamarForm")
const myForm = document.querySelector("#myForm");


const loader = document.querySelector(".div-loading");
const imagem1Form = document.querySelector(".img-input")
const divForm = document.querySelector("#myForm .flex-input")

const spanError = `<div class="spanError">Input invalid</div>`

myInput.addEventListener("keyup", () => {
    inputMailChimp.value = myInput.value

    if (document.querySelector(".spanError")){
        document.querySelector(".spanError").style.display = "none"
    }
})
myBtn.addEventListener("click", () => {
    chamarForm()
})


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function ativarPreForm() {
    loader.style.display = "none"

    setTimeout(() => {
        const imagem1Form = document.querySelector(".img-input")
        imagem1Form.style.display = "block"
        imagem1Form.src = "./assets/img/input-concluido.png"

        myInput.style.display = "none"
        myBtn.style.display = "none"
    })
}



function chamarForm() {
    loader.style.display = "block"

    divForm.style.display = "none"
    imagem1Form.style.display = "none"
    myBtn.style.display = "none"



    if (validateEmail(inputMailChimp.value) === false) {
        setTimeout(() => {
            imagem1Form.style.display = "block"
            divForm.style.display = "block"
            myBtn.style.display = "block"
            loader.style.display = "none"
            myForm.insertAdjacentHTML("beforeend", spanError)
        }, 1000)
    } else {
        buttonMailChimp.click()
        ativarPreForm()
        imagem1Form.style.display = "none"
    }
}


myForm.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        chamarForm()
    }
});






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





