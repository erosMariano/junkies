const containerImage = document.querySelector(".container-home")

const numAleatorio = (Math.random() * (2 - 1) + 1).toFixed(0)

if (numAleatorio == 1) {
    containerImage.style.backgroundImage = "none"
}