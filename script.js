$(document).ready(function() {
    var min = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var buttons = [];
    var letter = "";
    var length;
    var answer = "";
    var chain = [];
    var uppercase = "";
    var numToMatch = 0;
    var stringword = "";
    var wrong = 10;
  
    $(".title").empty();
    $(".draw").text("Lets play");
    $("button#btn1").attr("disabled", false);
	
    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    if ($(".keyboard").empty) {
        for (var i = 0; i < min.length; i++) {
            buttons.push('<button>' + min[i] + '</button>');
        }
        $(".keyboard").html(buttons.join(""));
    }

    $("#btn1").click(function() {
        if ($("#word1").val() == "") {
            $("#required").text("Empty");
			$("#wordInput").show();
        } else {
            $("#required").text("");
			$("#wordInput").hide();
            $("button").attr("disabled", false);
            chain.push($("#word1").val().split(""));
            length = $("#word1").val().length;
            answer = $("#word1").val();
            uppercase = answer.toUpperCase();
            var cont = 0;
            while (cont < length) {
                if (answer.charAt(cont) == " ") {
                    $("#word").append(" ");
                } else {
                    $("#word").append("-");
                }
                cont++;
            }
            $("#word1").val("");
        }
    });

    $("#btn2").click(function() {
        $(".title").empty();
        answer = "";
        uppercase = "";
        chain = [];
        $("button").removeClass("good");
        $("button").removeClass("wrong");
        $(".draw").text("Lets play").removeClass("goodJob", "playAgain");
		$("#wordInput").show();
        wrong = 10;
        $("button").attr("disabled", true);
        $("button#btn1").attr("disabled", false);
    });

    $("button").click(function() {
        letter = $(this).text();
        if ((letter == "Set") || (letter == "Clear")) {} 
      else {
            $(this).attr("disabled", true).fadeOut("slow");
            console.log(letter);
            console.log(uppercase);
            if (uppercase.includes(letter)) {
                var indices = [];
                for (var i = 0; i < uppercase.length; i++) {
                    if (uppercase[i] === letter)
                        indices.push(i);
                }
                for (var j = 0; j < indices.length; j++) {
                    numToMatch = indices[j];
                    stringword = $("#word").html();
                    stringword = setCharAt(stringword, numToMatch, letter);
                    $("#word").text(stringword);
                }
                if (stringword.includes("-")) {} 
              else {
                    $(".draw").text("YOU WON!").addClass("goodJob");
                    $("button").attr("disabled", true);
                    $("button#btn1").attr("disabled", false);
                    $("button#btn2").attr("disabled", false);
                }
                $(this).addClass("good");
            } else {
                $(this).addClass("wrong");
                wrong--;
                $(".draw").text("Lives left " + wrong);
                if (wrong <= 0) {
                    wrong = 0;
                    $(".draw").text("YOU LOST, PLAY Again").addClass("playAgain");
                    if(($(".draw").text()) == "YOU LOST"){
                      $("#word").replaceWith("<p class='title'>" + uppercase + "</p>");
                      $("button").attr("disabled", true);
                      $("button#btn1").attr("disabled", false);
                      $("button#btn2").attr("disabled", false);
                    }
                }
            }
        }
    });
});