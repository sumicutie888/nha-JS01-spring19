//Start off by hiding the story
$("p").hide();

//We must declare our variables
let word1;
let word2;
let word3;
let word4;
let word5;
let word6;
let word7;
let word8;
let word9;
let word10;
let word11;
let word12;
let word13;
let word14;
let word15;
let word16;
let word17;
let word18;
let word19;
let word20;

//All the action starts once the user clicks on the Submit button
$("button").on("click", () => {
  //Save all of the user's words into their own variables
  let word1 = $("#blank1").val();
  let word2 = $("#blank2").val();
  let word3 = $("#blank3").val();
  let word4 = $("#blank4").val();
  let word5 = $("#blank5").val();
  let word6 = $("#blank6").val();
  let word7 = $("#blank7").val();
  let word8 = $("#blank8").val();
  let word9 = $("#blank9").val();
  let word10 = $("#blank10").val();
  let word11 = $("#blank11").val();
  let word12 = $("#blank12").val();
  let word13 = $("#blank13").val();
  let word14 = $("#blank14").val();
  let word15 = $("#blank15").val();
  let word16 = $("#blank16").val();
  let word17 = $("#blank17").val();
  let word18 = $("#blank18").val();
  let word19 = $("#blank19").val();
  let word20 = $("#blank20").val();
  //Add those saved words to the story
  $("#word1").append(word1);
  $("#word2").append(word2);
  $("#word3").append(word3);
  $("#word4").append(word4);
  $("#word5").append(word5);
  $("#word6").append(word6);
  $("#word7").append(word7);
  $("#word8").append(word8);
  $("#word9").append(word9);
  $("#word10").append(word10);
  $("#word11").append(word11);
  $("#word12").append(word12);
  $("#word13").append(word13);
  $("#word14").append(word14);
  $("#word15").append(word15);
  $("#word16").append(word16);
  $("#word17").append(word17);
  $("#word18").append(word18);
  $("#word19").append(word19);
  $("#word20").append(word20);
  //Make the paragraph appear
  $("p").show();
});
