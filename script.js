// JavaScript Document

//on click event
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});

//on load event

$(document).ready(function (){
	$('#popup').dialog({
		title: "Welcome!",
		width: 450,
		height: 200,
		modal: true,
		button: {
			close: function() {
				$(this).dialog('close')
			}
		}
	});
});



//mouse over eventes

$(document).ready(function(){
  $("#img1").mouseover(function(){
    $("#img1").css("background-color", "darkseagreen");
  });
  $("#img1").mouseout(function(){
    $("#img1").css("background-color", "white");
  });
});

$(document).ready(function(){
  $("#img2").mouseover(function(){
    $("#img2").css("background-color", "darkseagreen");
  });
  $("#img2").mouseout(function(){
    $("#img2").css("background-color", "white");
  });
});

$(document).ready(function(){
  $("#img3").mouseover(function(){
    $("#img3").css("background-color", "darkseagreen");
  });
  $("#img3").mouseout(function(){
    $("#img3").css("background-color", "white");
  });
});

$(document).ready(function(){
  $("#img4").mouseover(function(){
    $("#img4").css("background-color", "darkseagreen");
  });
  $("#img4").mouseout(function(){
    $("#img4").css("background-color", "white");
  });
});