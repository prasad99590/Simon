var colors=["green","red","yellow","blue"];
var gamePattern=[];
var level=0;
var index=0;
var start=false;
function nextSequence()
{
    index=0;
    document.querySelector("h1").innerHTML="Level "+level;
    var number=Math.floor(Math.random()*4);
    gamePattern.push(colors[number]);
    $("#"+colors[number]).fadeIn(100).fadeOut(100).fadeIn(100);
    new Audio("sounds/"+colors[number]+".mp3").play();
    console.log(number+" "+colors[number]);
    level++;
}
$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    playSound(userChosenColor);
    if(gamePattern[index++]!==userChosenColor) endGame();
    else if(index==gamePattern.length)
    {
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
});
function endGame()
{
    gamePattern=[];
    level=0;
    index=0;
    start=false;
    new Audio("sounds/wrong.mp3").play();
    document.querySelector("h1").innerHTML="Game Over! Press a Key to Start again";
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
    },200);
}
function playSound(name)
{
    $("#"+name).fadeIn(100).fadeOut(100).fadeIn(100);
    new Audio("sounds/"+name+".mp3").play();
    console.log(name);
}
document.addEventListener("keypress",function(event){
    if(!start)
    {
        start=true;
        nextSequence();
    }
});