$(document).ready(function(){
    melonClicked = false;
    pearClicked = false;
    peachClicked = false;
    orangeClicked = false;
    bananaClicked = false;
    appleClicked = false;
    $('#apple-result').click(function(){
        appleClicked = true;
    });

    $('#apple').click(function(){
    if(appleClicked){
        $("#apple").css("background-color", "green");
        $("#apple p").css("background-color", "green");
    }else {
        $("#apple").css("background-color", "red");
        $("#apple p").css("background-color", "red");
    }   
     });

     $('#banana-result').click(function(){
        bananaClicked = true;
    });

    $('#banana').click(function(){
        if(bananaClicked){
            $("#banana").css("background-color",'green');
            $("#banana p").css("background-color",'green');
        }else{
            $("#banana").css("background-color",'red');
            $("#banana p").css("background-color",'red');
        }
    });

    $('#orange-result').click(function(){
        orangeClicked = true;
    });

    $('#orange').click(function(){
        if(orangeClicked){
            $("#orange").css("background-color",'green');
            $("#orange p").css("background-color",'green');
        }else{
            $("#orange").css("background-color",'red');
            $("#orange p").css("background-color",'red');
        }
    });

    $('#peach-result').click(function(){
        peachClicked = true;
    });

    $('#peach').click(function(){
        if(peachClicked){
            $("#peach").css("background-color",'green');
            $("#peach p").css("background-color",'green');
        }else{
            $("#peach").css("background-color",'red');
            $("#peach p").css("background-color",'red');
        }
    });

    $('#pear-result').click(function(){
        pearClicked = true;
    });

    $('#pear').click(function(){
        if(pearClicked){
            $("#pear").css("background-color",'green');
            $("#pear p").css("background-color",'green');
        }else{
            $("#pear").css("background-color",'red');
            $("#pear p").css("background-color",'red');
        }
    });

    $('#melon-result').click(function(){
        melonClicked = true;
    });

    $('#melon').click(function(){
        if(melonClicked){
            $("#melon").css("background-color",'green');
            $("#melon p").css("background-color",'green');
        }else{
            $("#melon").css("background-color",'red');
            $("#melon p").css("background-color",'red');
        }
    });
    
});




