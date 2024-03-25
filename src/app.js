/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuseWho = who[Math.floor(Math.random() * who.length)];
  let excuseAction = action[Math.floor(Math.random() * action.length)];
  let excuseWhat = what[Math.floor(Math.random() * what.length)];
  let excuseWhen = when[Math.floor(Math.random() * when.length)];

  let generateExcuse = excuseWho + ' ' + excuseAction + ' ' + excuseWhat + ' ' + excuseWhen;
  document.querySelector("#excuse").innerHTML = generateExcuse;
};
