import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TheOne from './theOneAPI.js';

// function outputChar(response) {
//   let htmlString = "";
//   for (let i =  0; i < response.length; i++) {
//     htmlString = htmlString.concat(`<p id='name${i}'>${response[i].join(" ")}</p>'`);
//   }
//   $("#lotrCharacter").html(htmlString);
// }

function getCharacter(response) {
  if (response.docs[0]) {
    //outputChar(response);
    $('#lotrCharacter').text(`What's up ${response.docs[0].name}, of the ${response.docs[0].race} race. ${response.docs[0].birth} ${response.docs[0].realm} ${response.docs[0].hair} ${response.docs[0].height}`);
  //  $('#lotrCharacter').text(`What's up ${response.docs[0].race}`);
  } else {
    $('.showErrors').text(`We could not find who you seek. Ask again.`);
  }
}

$(document).ready(function() {
  $('#lotr-form').submit(function(event) {
    event.preventDefault();
    let name = $('#nameInput').val();
    console.log(name);
    TheOne.character(name)
      .then(function(response) {
        getCharacter(response);
        console.log("Woot!!");
      }); console.log("Ayyyy!!");
  }); console.log("Yay!!");
});