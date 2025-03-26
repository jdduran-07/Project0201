/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Joe Duran
      Date:   3/26/2025

      Filename: project02-01.js
 */

function FahrenheitToCelsius (degree)
{
      return (degree-32)/1.8;

}

function CelsiusToFahrenheit (degree)
{
      return degree *1.8 + 32;
}

document.getElementById("cvalue").onchange = function ()
{
let cDegree = document.getElementById("cvalue").value;
document.getElementById("fValue").value=CelsiusToFahrenhei (cDegree);
}

document.getElementById("fvalue").onchange = function ()
{
let fDegree = document.getElementById("fvalue").value;
document.getElementById("cValue").value=FahrenheitToCelsius (fDegree);
}