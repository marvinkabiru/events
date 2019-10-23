$(document).ready (function(){
    $("#abc").html();
    var name = $("#abc").html();
    console.log(name);
    //click
    $("#gih").click(function(){
        var abc = $("#abc").html();
        $("#abc").css("color", "green");
        $("#def").html(abc);
    });
    //mouse over
    $("#abc").mouseover(function(){
        var abc = $("#abc").html();
        $("#def").html(abc);
    });
    //mouse out
    $("#abc").mouseout(function(){
        var def = "Yoh Crew";
        $("#def").css("color", "red");
        $("#def").html(def);
    });
    //focus
    $("#abc").focus(function(){
        var def = "Yoh Crew";
        $("#def").html(def);
    });
    //blur
    $("#abc").blur(function(){
        var pap = $("#pap").html();
        var pap = "Code's getting easy";
        $("#pap").html(pap);
    });
    //keydown
    $("#abc").keydown(function(){
        var abc = $("#abc").html();
        $("#def").html(abc);
    });
    //keyup
    $("#def").keydown(function(){
        var def = $("#def").html();
        $("#def").html(abc);
    });


    


    

  

   
});