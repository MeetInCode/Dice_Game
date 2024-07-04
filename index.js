var randomNumber1 = Math.floor(Math.random()*6+1)
var randomNumber2= "./images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",randomNumber2);

var randomNumber3 = Math.floor(Math.random()*6+1)
var randomNumber4= "./images/dice"+randomNumber3+".png"
document.querySelector(".img2").setAttribute("src",randomNumber4);

if(randomNumber1>randomNumber3){
    document.querySelector(".container h1").innerText="Player 1 wins";
}
else if(randomNumber1===randomNumber3){
    document.querySelector(".container h1").innerText="its a tie";
}
else{
    document.querySelector(".container h1").innerText="player 2 wins";   
}