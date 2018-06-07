$(document).ready(function(){
    var randomNumb = makeRandom();
    var totalScore = 0;
    var wins =0;
    var losses =0;
    var puple= 2;
    var blue = 6;
    var black = 8;
    var white = 10;
    var num =10;
    
    $("#1").on("click", function(){
       totalScore = totalScore + puple;
       console.log(totalScore);
       checkWin();
    });
    $("#2").on("click", function(){
        totalScore = totalScore + blue;
        console.log(totalScore);
        checkWin();
        
    });
    $("#3").on("click", function(){
        totalScore = totalScore + black;
        console.log(totalScore);
        checkWin();
    });
    $("#4").on("click", function(){
        totalScore = totalScore + white;
        console.log(totalScore);
        checkWin();
    });
    function makeRandom(){
       return Math.floor(Math.random()*121)+19;
    }
    function brandnewScore(){
         $("#lag-greenpart").text(totalScore);
            $("#losses").text(losses);
        console.log(losses);
        $("#wins").text(wins);
        console.log(wins); 
        $("#scores").text(randomNumb);
    }
   brandnewScore();
   function checkWin(){
    if (totalScore === randomNumb){
        wins += 1;
        randomNumb = makeRandom();
        totalScore = 0;
        num = 10;
        brandnewScore();
    }
    else if(num===0 || totalScore > randomNumb){
        losses +=1;
        randomNumb = makeRandom();
        totalScore = 0;
        num =10;
        brandnewScore();
    }
    else{
        num --;
        brandnewScore();
    }
   }
});
 