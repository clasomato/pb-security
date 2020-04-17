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
