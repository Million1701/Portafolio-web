let keys = document.getElementById("keys")

let contentnum1 = document.getElementById("content-num1")
let contentnum2 = document.getElementById("content-num2")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const signo = document.getElementById("signo")

let aggNum1 = 0
let aggNum2 = 0
num1.textContent = aggNum1
num2.textContent = aggNum2

let pn = 0
let ope = ""
let punto = 0
let total = 0
let ultipunto = ""

keys.addEventListener("click", (e) => {
    let res1 = Number(aggNum1)
    let res2 = Number(aggNum2)

    if (e.target.matches(".decimal")) {
        x = e.target.textContent
        showNumbers(x)
        topeAnchura()

    } else if (e.target.matches(".dividendo")) {
        ope = e.target.textContent
        selectOperator(ope)

    } else if (e.target.matches(".punto")) {
        showPunto(res1, res2)

    } else if (e.target.matches(".igual")) {
        showResultTotal(res1, res2)

    } else if (e.target.matches(".dltTotal")) {
        deleteTotal()

    } else if (e.target.matches(".dltNumber")) {
        deleteNumber()

    } else if (e.target.matches(".dlt") || e.target.matches(".img")) {
        deleteKey(res1, res2)
    }
})





const showNumbers = (x) => {
    if (pn === 0) {
        if (aggNum1 === 0 || aggNum1 === "0") {
            aggNum1 = x
            total = aggNum1
        } else {
            if (aggNum1.length < 16) {
                aggNum1 += x
                total = aggNum1
            }
        }
        num1.textContent = aggNum1

    } else if (pn === 1) {
        if (aggNum2 === 0 || aggNum2 === "0") {
            aggNum2 = x
        } else {
            if (aggNum2.length < 16) {
                aggNum2 += x
            }
        }
        num2.textContent = aggNum2
    }

}

const selectOperator = (op) => {
    signo.textContent = op
    pn = 1

    CambiarPositions()
    topeAnchura()
}



const deleteTotal = () => {
    aggNum1 = 0
    aggNum2 = 0
    ope = ""

    num1.textContent = aggNum1
    num2.textContent = aggNum2
    signo.textContent = ope
    pn = 0

    topeAnchura()
    CambiarPositions()
}

const deleteNumber = () => {
    if (pn == 0) {
        aggNum1 = 0
        num1.textContent = 0
    } else if (pn == 1) {
        aggNum2 = 0
        num2.textContent = 0
    }
    topeAnchura()
}

const deleteKey = (res1, res2) => {
    let borrado;

    if (pn == 0) {
        borrado = res1.toString().slice(0, -1)
        if (borrado.length !== 0) {
            aggNum1 = borrado
        } else {
            aggNum1 = 0
        }
        num1.textContent = aggNum1

    } else if (pn == 1) {
        borrado = res2.toString().slice(0, -1)
        if (borrado.length !== 0) {
            aggNum2 = borrado
        } else {
            aggNum2 = 0
        }
        num2.textContent = aggNum2
    }

    topeAnchura()
}


const topeAnchura = () => {
    if (pn === 0) {
        if (num1.textContent.length < 10) {
            num1.style.fontSize = "40px"
            contentnum1.style.top = "50px"

        } else if (num1.textContent.length === 10) {
            num1.style.fontSize = "33px"
            contentnum1.style.top = "58px"

        } else if (num1.textContent.length >= 14) {
            num1.style.fontSize = "25px"
            contentnum1.style.top = "65px"
        }
    } else if (pn === 1) {
        if (num2.textContent.length < 10) {
            num2.style.fontSize = "40px"
            contentnum2.style.top = "50px"

        } else if (num2.textContent.length === 10) {
            num2.style.fontSize = "33px"
            contentnum2.style.top = "58px"

        } else if (num2.textContent.length >= 14) {
            num2.style.fontSize = "25px"
            contentnum2.style.top = "65px"
        }
    }
}

const CambiarPositions = () => {
    if (pn === 1) {
        contentnum1.style.top = "0px"
        num1.style.fontSize = "20px"

        contentnum2.style.top = "50px"
        num2.style.fontSize = "40px"
    } else if (pn === 0) {
        contentnum1.style.top = "50px"
        num1.style.fontSize = "40px"

        contentnum2.style.top = "0px"
        num2.style.fontSize = "20px"
    }
}


const showPunto = (res1, res2) => {
    if (pn === 0) {
        if (res1 === 0) {
            aggNum1 = "0."
        } else {
            aggNum1 += "."
        }

        ultipunto = aggNum1.lastIndexOf(".")
        if (ultipunto > aggNum1.indexOf(".")) {
            aggNum1 = aggNum1.substring(0, ultipunto)
        }
        num1.textContent = aggNum1

    } else if (pn === 1) {
        if (res2 === 0) {
            aggNum2 = "0."
        } else {
            aggNum2 += "."
        }

        ultipunto = aggNum2.lastIndexOf(".")
        if (ultipunto > aggNum2.indexOf(".")) {
            aggNum2 = aggNum2.substring(0, ultipunto)
        }
        num2.textContent = aggNum2
    }
}


const showResultTotal = (res1, res2) => {
    switch (ope) {
        case "+": {
            total = res1 + res2
            break;
        }
        case "-": {
            total = res1 - res2
            break;
        }
        case "/": {
            total = res1 / res2
            break;
        }
        case "*": {
            total = res1 * res2
            break;
        }
        case "": {
            total = res1
        }
    }

    aggNum1 = total
    aggNum2 = 0
    num1.textContent = aggNum1
    num2.textContent = 0
    console.log(total)
    ope = ""
    signo.textContent = ope
    pn = 0

    CambiarPositions()
    topeAnchura()
    results(total)
}





//// MOSTRAR EN LA PANTALLA DE RESULTADOS////
let nmr = 0
let open = false
let openResults = document.querySelector(".resultados")
let screenRes = document.getElementById("resultsScreen")

openResults.addEventListener("click", () => {
    showResults()
})

const results = (total) => {
    const divCabecera = document.createElement("div")
    const divCuerpo = document.createElement("div")

    nmr += 1
    divCuerpo.innerHTML = `
    <div class="row p-0 m-0 text-center">
    <p class="col-6">${nmr}</p>
    <p class="col-6 valor">${total}</p>
    </div>
    `

    screenRes.append(divCuerpo)
}

const showResults = () => {

    if (open === false) {
        screenRes.style.clipPath = "circle(141.1% at 0 0)"
        open = true
        openResults.firstElementChild.setAttribute("src", "close.png")
    } else if (open === true) {
        screenRes.style.clipPath = "circle(0.3% at 0 0)"
        open = false
        openResults.firstElementChild.setAttribute("src", "menu.png")

    }

}






////EVENTOS DEL TECLADO/////
document.addEventListener('keydown', (event) => {
    let keyValue = event.key;
    let keysCode = event.keyCode
    let res1 = Number(aggNum1)
    let res2 = Number(aggNum2)

    if (keysCode >= 48 && keysCode <= 57 || keysCode >= 96 && keysCode <= 105) {
        showNumbers(keyValue)
        topeAnchura()
    }
    if (event.shiftKey && keysCode === 187 || keysCode === 106) {
        ope = keyValue
        selectOperator(ope)
    }
    if (keysCode === 187 || keysCode === 107) {
        ope = keyValue
        selectOperator(ope)
    }
    if (keysCode === 189 || keysCode === 109) {
        ope = keyValue
        selectOperator(ope)
    }
    if (keysCode === 111) {
        ope = keyValue
        selectOperator(ope)
    }
    if (keysCode === 8) {
        deleteKey(res1, res2)
    }
    if (keysCode === 190) {
        showPunto(res1, res2)
    }
    if (keysCode === 13) {
        showResultTotal(res1, res2)
    }
    console.log(keysCode)
}, false);