const tempNumber = parseFloat(document.querySelector('#temp').textContent);
const speedNumber = parseFloat(document.querySelector('#speed').textContent);
const windChill = Math.round(35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) +
    (0.4275 * tempNumber * Math.pow(speedNumber, 0.16)));
if (speedNumber > 3 && tempNumber <= 50) {
    x = document.getElementById('chill').textContent = 'Wind Chill is ' + windChill + '\xB0F';
} else {
    x = document.getElementById('chill').textContent = "No Wind Chill Today";
    }