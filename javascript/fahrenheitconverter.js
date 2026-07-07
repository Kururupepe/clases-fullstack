function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function formatTemperature(value, unit) {
    return `${value} ${unit}`;
}

let fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
let celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
let freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
let freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));