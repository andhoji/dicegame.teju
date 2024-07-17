
// 
var randomNumber= new Array();
var randomnumber2= new Array();


//random imaged for dice number 1
randomNumber[0]="./images/perspective-dice-six-faces-one.png";
randomNumber[1]="./images/perspective-dice-six-faces-two.png";
randomNumber[2]="./images/perspective-dice-six-faces-three.png";
randomNumber[3]="./images/perspective-dice-six-faces-four.png";
randomNumber[4]="./images/perspective-dice-six-faces-five.png";
randomNumber[5]="./images/perspective-dice-six-faces-six.png";

//generating random images for dice number 2
randomnumber2[0]="./images/perspective-dice-six-faces-one.png";
randomnumber2[1]="./images/perspective-dice-six-faces-two.png";
randomnumber2[2]="./images/perspective-dice-six-faces-three.png";
randomnumber2[3]="./images/perspective-dice-six-faces-four.png";
randomnumber2[4]="./images/perspective-dice-six-faces-five.png";
randomnumber2[5]="./images/perspective-dice-six-faces-six.png";

randomNumber.length;

//dice number 1 random image 
var number=Math.round(Math.random()*randomNumber.length);

//dice number 2 random image
var number2=Math.round(Math.random()*randomnumber2.length);

var dicerandom1=randomNumber[number];

var dicerandom2=randomnumber2[number2];

document.querySelector("img").attributes;
document;
var player1=document.querySelector("img").setAttribute("src", dicerandom1);
var player2=document.querySelector(".gameimage2").setAttribute("src", dicerandom2);


//player1 var and player 2 var name changed to firstname and second name

if(number>number2)
{
    document.querySelector("h1").innerHTML="Player 1 wins🎉";
}

else if (number2>number)
{
    document.querySelector("h1").innerHTML="Player 2  wins🎉";
}

else if(number==number2)
{
        document.querySelector("h1").innerHTML="Draw 🙂";

}




