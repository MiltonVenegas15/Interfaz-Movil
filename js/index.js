/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
/*CALCULADORA*/
var num1;
var num2;
var operacion;

function definir(){
    //Es una forma horrible de definir las variables seguro que con un ciclo for es mas facil pero mejor no arriesgar
    var resultado = document.getElementById('resultado');
    var igual = document.getElementById('igual');
    var reset = document.getElementById('reset');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var division = document.getElementById('division');
    var multiplicacion = document.getElementById('multiplicacion');

    uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  reset.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      num1 = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      num1 = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      num1 = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      num1 = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      num2 = resultado.textContent;
      resolver();
  }
  function limpiar(){
    resultado.textContent="";
  }
  function resetear(){
  resultado.textContent = "";
  num1 = 0;
  num2 = 0;
  operacion = "";
    }
    function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
    case "*":
      res = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      res = parseFloat(num1) / parseFloat(num2);
      break;
    default:
        document.innerHTML("Ya estamos teniendo errores");
        break;
  }
  resetear();
  resultado.textContent = res;
}
}

//Giroscopio
function girar(){

if (!window.DeviceOrientationEvent){
        alert("Tu navegador no tiene acceso a giroscopio");
    }
window.addEventListener("deviceorientation", handleOrientation, true);
var beta = event.beta; //X
var gamma = event.gamma;//Y
var alpha = event.alpha; //Z

var img = document.querySelector('img');
    
var alphaTag = document.getElementById('alpha');
var betaTag = document.getElementById('beta');
var gammaTag = document.getElementById('gamma');
    
var alfa = document.getElementById('alfa');
var bet = document.getElementById('bet');
var gam = document.getElementById('gam');
    if (!bet.checked) {
            img.style.webkitTransform = "rotateX(" + beta + "deg)";
            betaTag.innerHTML = beta;
        }
        if (!gam.checked) {
            img.style.webkitTransform = "rotateZ(" + gamma + "deg)";
            gammaTag.innerHTML = gamma;
        }
        if (!alfa.checked) {
            img.style.webkitTransform = "rotateY(" + alpha + "deg)";
            alphaTag.innerHTML = alpha;
        }
    }
//Sensor de proximidad
/*Realmente no existe mucha informacion acerca de sensores a los que se puedan acceder por medio de APIs de consumo (orientadas a desa-
rollo web, sin embargo, existen formas de poder calcular la distancia que existe entre dos puntos en un mapa, que es lo mas cercano o
la equivalencia de medir proximidad entre dos puntos con javascript*/
function medir(){
    var mapa, PuntoA, PuntoB;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 6.066385702972249, 
            lng: -74.07493328924413
        }
    });

    markerA = new google.maps.Marker({
        position: {
            lat: 7.099473939079819, 
            lng: -73.10677064354888
        },
        map: map,
        icon: {
            url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
        },
        title: "Marcador"
    });

    // 3. Poner segundo marcador en Bogotá
    markerB = new google.maps.Marker({
        position: {
            lat: 4.710993389138328, 
            lng: -74.07209873199463
        },
        map: map,
        icon: {
            url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
        },
        title: "Marker B"
    });
}   
}
widnows.onload
    function hablar(){
        var mensaje  = new SpeechSynthesisUtterance();
        mensaje.text = 'Bienvenido de nuevo';
        speechSynthesis.speak(mensaje);
        console.log(mensaje);
    }

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
