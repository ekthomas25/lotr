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
    let characterID = response.docs[0]._id;
    //outputChar(response);
    $('#lotrCharacter').text(`Greetings ${response.docs[0].name}, of the ${response.docs[0].race} race. I love your ${response.docs[0].hair} hair!`);
    $('.showErrors').text("");
  } else {
    $('.showErrors').text(`We could not find who you seek. Ask again.`);
  } 
  showImg();
}

// function showImg(response) {
//   if(response.docs[0].name === "Aragorn"){
//     $("#Aragorn").show();
//   }else{
//     $('.showErrors').text("")
//   }
// }
//i was wondering if this would work

function showImg() {
  let userChoice = $("#pickCharacter").val();
  console.log(userChoice);
  // if (response.docs[0].name === userChoice){
  //   $("#Aragorn II Elessar").show();
  // } else { 
  //   return "Hi";
  // }

  if (userChoice === "Aragorn II Elessar") {
    $("#Aragorn").show();
  }
  if (userChoice === "Peregrin Took") {
    $("#Peregrin").show();
  }
  if (userChoice === "Gollum") {
    $("#Gollum").show();
  }
  if (userChoice === "Legolas") {
    $("#Legolas").show();
  }
  if (userChoice === "Gandalf") {
    $("#Gandalf").show();
  }
  if (userChoice === "Faramir") {
    $("#Faramir").show();
  }
  if (userChoice === "Sauron") {
    $("#Sauron").show();
  }
  if (userChoice === "Arwen") {
    $("#Arwen").show();
  }
  if (userChoice === "Galadriel") {
    $("#Galadriel").show();
  }
  $(".start-page").hide();
  $("#").hide();
}

$(document).ready(function() {
  $('#lotr-form').submit(function(event) {
    event.preventDefault();
    let name = $('#pickCharacter').val();
    console.log(name);
    TheOne.character(name)
      .then(function(response) {
        getCharacter(response);
        console.log("Woot!!");
      }); console.log("Ayyyy!!");
  }); console.log("Yay!!");
});