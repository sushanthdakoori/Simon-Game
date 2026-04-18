
var bc = ["red","blue","green","yellow"]
var gc = [];
var uc = [];
var started = false;
var level = 0;

$(document).keypress(function () { 
    if(!started){
        $("#level-title").text("level"+level);
        nese();
        started=true;
    }
});

$(".btn").click(function(){
    var ucc = $(this).attr("id");
    
    uc.push(ucc);
    console.log(uc);
    play(ucc);

    animatepress(ucc);
    checkanswer(uc.length-1);
})
 

function nese(){
        uc = [];
     level++;
     $("#level-title").text("level"+level);
     var n = Math.floor(Math.random(n)*4);
    var rcc = bc[n];
    gc.push(rcc);
    play(rcc)

    $("#"+rcc).fadeIn(100).fadeOut(100).fadeIn(100);
}

 



function play(name){
     
            var audio = new Audio(name+".mp3");
            audio.play();

            
    }


function animatepress(cc){
    
    $("#"+cc).addClass("pressed");

    setTimeout(function(){
        $("#"+cc).removeClass("pressed");
    },100);

}

function checkanswer(cule){
    if(gc[cule] == uc[cule]){
        console.log("success");
    

    if(uc.length == gc.length){
        setTimeout(function(){
            nese();
        },1000);
    }
}
else{
    console.log("Wrong");
    
    play("wrong");

    $("body").addClass("game-over");
    
    $("#level-title").text("game over ,press any key to start again");
    setTimeout(function(){
        $("body").removeClass("game-over")
    },100);
    startover();
}
}
 
function startover() { 
    gc = [];

    started = false;
    level = 0;
    
 }
