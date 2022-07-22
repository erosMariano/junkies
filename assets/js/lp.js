const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");


accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active")
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;

        }

        accordionItemHeader.classList.toggle("active")
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if (accordionItemHeader.classList.contains("active")) {
            if (accordionItemBody.scrollHeight >= 768) {
                accordionItemBody.style.maxHeight = "10186px"
            } else {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
            }

        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})


const accordionItem = document.querySelectorAll(".accordion-item")
accordionItem.forEach((el) => {
    el.addEventListener("click", () => {
        accordionItem.forEach((accordion) => {
            accordion.classList.remove("active")
        })
        el.classList.add("active")
    })
})


const [nome, email, phone] = document.querySelectorAll(".form input")
const submit = document.querySelector(".form .enviar")
const errorMessage = document.querySelector(".error")


function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        // alert("Valid email address!");
        return true;
    } else {
        // alert("You have entered an invalid email address!");
        throw new Error("invalid email")
    }
}


function validateName(inputName) {
    if (inputName.value !== "" && inputName.value.length > 2) {
        return true;
    } else {
        throw new Error("invalid name")
    }
}

function validatePhoneNumber(input_str) {

    const valid = !isNaN(parseFloat(input_str)) && isFinite(input_str);
    return valid
}

function validateForm(inputPhone) {
    var phone = inputPhone.value;
    if (!validatePhoneNumber(phone)) {
        throw new Error("Please enter a valid phone number")
    } else {
        return true
    }
}



submit.addEventListener("click", () => {
    try {
        validateName(nome)
        ValidateEmail(email);
        validateForm(phone)

        errorMessage.classList.remove("active")
        submit.classList.add("enviado")
        submit.innerHTML = "Sent"

        document.querySelector("#mce-EMAIL").value = email.value
        document.querySelector("#mce-FNAME").value = nome.value
        document.querySelector("#mce-PHONE").value = phone.value

        document.querySelector("#mc-embedded-subscribe").click()

        document.querySelectorAll(".form input").forEach((el) => {
            el.style.display = "none"
        })
        document.querySelectorAll(".form p")[0].style.display = 'none'
        document.querySelector(".form p.enviadoText").style.display = 'block'

    } catch (e) {
        console.log(e.message)
        errorMessage.classList.add("active")
        errorMessage.innerHTML = `${e.message}`
    }
})




const menuMobile = document.querySelector('.MenuMobile')


function handleActiveMenuMobile() {
    document.querySelector(".menuMobileClick img").addEventListener("click", () => {
        menuMobile.classList.toggle("active")

        if (menuMobile.classList.contains("active")) {
            menuMobile.style.marginTop = "0px"
        } else {
            menuMobile.style.marginTop = `-${menuMobile.clientHeight}px`
        }
    })
}

handleActiveMenuMobile()

menuMobile.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", () => {
        menuMobile.style.marginTop = `-${menuMobile.clientHeight}px`
        menuMobile.classList.toggle("active")
    })
})