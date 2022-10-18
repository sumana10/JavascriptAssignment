function CelsiusToFahrenheit(C){

  let F = ((C*9)/5)+32;
  console.log(`${C}℃ is ${F}℉`);
}
CelsiusToFahrenheit(14);

function FahrenheitToCelsius(F){

  let C = ((F-32)*5)/9;
  console.log(`${F}℉ is ${C}℃ `);
}
FahrenheitToCelsius(57.2);