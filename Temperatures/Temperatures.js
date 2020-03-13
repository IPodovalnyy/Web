document.addEventListener("DOMContentLoaded", function () {
    var inputTemperature = document.getElementById("input_temperature");
    inputTemperature.addEventListener("keypress", pressEnter);

    var buttonConvert = document.querySelector(".get_temperature button");
    buttonConvert.addEventListener("click", convertTemperature);
});

function convertTemperature() {
    var input = document.getElementById("input_temperature");

    if (input.value.trim() === "") {
        clearInputOutputField(input);
        return;
    }

    var temperatureC = Number(input.value.replace(",", "."));

    if (isNaN(temperatureC)) {
        clearInputOutputField(input);
        return;
    }

    setTemperature(document.getElementById("temperatureF"), convertToFahrenheit(temperatureC));
    setTemperature(document.getElementById("temperatureK"), convertToKelvin(temperatureC));
}

function setTemperature(outPutField, outTemperature) {
    outPutField.innerHTML = outTemperature.toFixed(3);
    outPutField.classList.remove("set_hidden_text");
    outPutField.classList.add("set_visible_text");
}

function convertToFahrenheit(temperatureC) {
    return temperatureC * 1.8 + 32;
}

function convertToKelvin(temperatureC) {
    var coefficientKelvin = 273.15;
    return temperatureC + coefficientKelvin;
}

function clearInputOutputField(input) {
    alert("Введите число");
    input.value = "";

    document.getElementById("temperatureF").classList.remove("set_visible_text");
    document.getElementById("temperatureF").classList.add("set_hidden_text");
    document.getElementById("temperatureK").classList.remove("set_visible_text");
    document.getElementById("temperatureK").classList.add("set_hidden_text");
}

function pressEnter(event) {
    if (event.key === 13) {
        convertTemperature();
    }
}