let value = document.querySelector("#windchill");

let tempC = document.querySelector("#temp");
let tempCTxt = tempC.textContent;
let tempCNum = parseFloat(tempCTxt); 

let wSpeed = document.querySelector("#wind");
let wSpeedTxt = wSpeed.textContent;
let wSpeedNum = parseFloat(wSpeedTxt);



let wChill = calculateWindChill(tempCNum,wSpeedNum);

function calculateWindChill(temperatureC, windSpeedKmh) {

    let windChill = 13.12 + (0.6215 * temperatureC) - (11.37 * Math.pow(windSpeedKmh, 0.16)) + (0.3965 * temperatureC * Math.pow(windSpeedKmh, 0.16));

    
    return Math.round(windChill * 10) / 10; 
    
}

if (tempCNum >= 10 || wSpeedNum < 4.8) {
    value.textContent = `N/A`
}

else value.textContent = `${wChill}°C`; 

 

