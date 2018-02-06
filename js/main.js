
window.onload=function(){

  // Get the modal
let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
///let modal4 = document.getElementById('myModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img01 = document.getElementById("img01");
let img02 = document.getElementById("img02");
let img03 = document.getElementById("img03");
///let img04 = document.getElementById("img04");


img01.onclick = function(){
    modal1.style.display = "block";
}

img02.onclick = function(){
    modal2.style.display = "block";
}

img03.onclick = function(){
    modal3.style.display = "block";
}
/*
img04.onclick = function(){
    modal3.style.display = "block";
}
*/
// Get the <span> element that closes the modal
///var span = document.getElementsByClassName("close")[1];

let span1 = document.getElementById("close1");
let span2 = document.getElementById("close2");
let span3 = document.getElementById("close3");
///let span4 = document.getElementById("close4");


// When the user clicks on <span> (x), close the modal

span1.onclick = function(){
  document.getElementById('myModal1').style.display = "none";
}

span2.onclick = function(){
  document.getElementById('myModal2').style.display = "none";
}

span3.onclick = function(){
  document.getElementById('myModal3').style.display = "none";
}

/*span4.onclick = function(){
  document.getElementById('myModal4').style.display = "none";
}*/

};
