var randomNum1=Math.floor(Math.random()*6)+1;

var randomNum2=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");


if (randomNum1 > randomNum2)  {
    document.querySelector ("h1").innerHTML="🚩 Fam. Ionescu Wins!"
} else 
         if (randomNum1 < randomNum2) {
            document.querySelector ("h1").innerHTML="Fam. Davidica Wins! 🚩"
         }

         else  
               if (randomNum1 = randomNum2) {
                document.querySelector ("h1").innerHTML="Draw!"
               }