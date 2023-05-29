

// // select HTML element in the document
const TemperatureSpan = document.querySelector(".temperature")
const windSpeedSpan = document.querySelector(".WindSpeed")
const windChillSpan = document.querySelector(".windChill")


function WindChill(temperature, windSpeed) {

  if (temperature <= 50 && windSpeed > 3) {
    let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    document.querySelector("#windchill-F").innerHTML = "&#xb0;F"
    return windChill.toFixed(2) // then put this in as with TextContent
  } else {
    return "N/A" // then put this in as with TextContent
  }
}