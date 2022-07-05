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
                accordionItemBody.style.maxHeight = "1186px"
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
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
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
        document.querySelector('.p.sent').style.display = "block"
        
        document.querySelector("#mce-EMAIL").value = email.value
        document.querySelector("#mce-FNAME").value = nome.value
        document.querySelector("#mce-PHONE").value = phone.value

        document.querySelector("#mc-embedded-subscribe").click()
        
        document.querySelectorAll(".form input").forEach((el) => {
            el.classList.add("disabled")
            el.value = ""
        })


    } catch (e) {
        console.log(e.message)
        errorMessage.classList.add("active")
        errorMessage.innerHTML = `${e.message}`
    }
})