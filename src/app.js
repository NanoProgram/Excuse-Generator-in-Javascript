/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = [" ate", " peed", " crushed", " broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  " before the class",
  " right on time",
  " when I finished",
  " during my lunch",
  " while I was praying"
];

function sujeto() {
  let randomsujeto = Math.floor(Math.random() * 4);
  return randomsujeto;
}

function accion() {
  let randomaccion = Math.floor(Math.random() * 4);
  return randomaccion;
}

function que() {
  let randomque = Math.floor(Math.random() * 3);
  return randomque;
}

function cuando() {
  let randomcuando = Math.floor(Math.random() * 5);
  return randomcuando;
}

/*window.onload = function() {
  console.log(who[sujeto()] + action[accion()] + what[que()] + when[cuando()]);
};*/

document.getElementById("change").innerHTML =
  who[sujeto()] + action[accion()] + what[que()] + when[cuando()];
