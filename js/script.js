$("#navToggle").click(function(){
    $("#navList").slideToggle();
});

$("#buttonOff").click(function(){
    $("#buttonOff").removeClass("displayBlock").addClass("displayNone");
    $("#buttonOn").removeClass("displayNone").addClass("displayBlock");
});

$("#buttonOn").click(function(){
    $("#buttonOn").removeClass("displayBlock").addClass("displayNone");
    $("#buttonOff").removeClass("displayNone").addClass("displayBlock");
});


$("#notificationToggle").click(function(){
    $("#notificationPanel").slideToggle();
});



// Set up devices
$("#deviceToggle").click(function(){
    $("#modalPopup").removeClass("displayNone");
    $("#modalPopup").addClass("flex");
});

$("#pbCamera").click(function(){
    $("#pb2").removeClass("displayNone");
    $("#deviceTick").removeClass("displayNone");

    $("#pb2").addClass("displayBlock");
    $("#deviceTick").addClass("displayBlock");
});

$("#doneButton").click(function(){
    $("#modalPopup").removeClass("flex");
    $("#modalPopup").addClass("displayNone");
});






var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
