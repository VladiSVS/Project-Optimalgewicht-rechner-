calcWeight = () => {
    let size = Number(document.getElementById("size").value)
    let age = Number(document.getElementById("age").value)
    let radioOne = document.getElementById("radioOne")
    let radioTwo = document.getElementById("radioTwo")

    calcSmall = () => {
        let result = 0
        if (radioOne.checked) {
            result = ((size - 100) + (age / 10) * 0.9 * 0.9).toFixed(2)
            document.getElementById("textResult").innerHTML = `<p>Dein Idealgewicht is ${result} Kg<p/>`
        } else {
            return
        }
    }

    calcLarge = () => {
        let result = 0
        if (radioTwo.checked) {
            result = ((size - 100) + (age / 10) * 0.9 * 1.1).toFixed(2)
            document.getElementById("textResult").innerHTML = `<p>Dein Idealgewicht is ${result} Kg<p/>`
        } else {
            return
        }
    }

    error = () => {
        if (size == 0 || age == 0) {
            document.getElementById("textResult").innerHTML = `<p>Error<p/>`
        }
    }

    calcSmall()
    calcLarge()
    error()
}

