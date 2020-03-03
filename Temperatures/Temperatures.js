function pressEnter(event) {
    if (event.keyCode === 13) {
        convertTemperature();
    }
}

function convertTemperature() {
    var input = document.getElementById("input_temperature");

    if (input.value.trim() === "") {
        clearInputOutputField(input);
        return 0;
    }

    var temperatureC = Number(input.value.replace(",", "."));

    if (isNaN(temperatureC)) {
        clearInputOutputField(input);
        return 0;
    }

    setTemperature(document.getElementById("temperatureF"), toFahrenheit(temperatureC));
    setTemperature(document.getElementById("temperatureK"), toKelvin(temperatureC));
}

function setTemperature(outPutField, outTemperature) {
    outPutField.innerHTML = outTemperature.toFixed(3);
    outPutField.style.visibility = "visible";
}

function toFahrenheit(temperatureC) {
    return temperatureC * 1.8 + 32;
}

function toKelvin(temperatureC) {
    const coefficientKelvin = 273.15;
    return temperatureC + coefficientKelvin;
}

function clearInputOutputField(input) {
    alert("Введите число");
    input.value = "";
    document.getElementById("temperatureF").style.visibility = "hidden";
    document.getElementById("temperatureK").style.visibility = "hidden";
}