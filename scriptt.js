
var you;

var opponent;

let opponetScore = 0;
    let yourScore= 0;


var choices = ["rock","paper","scissors"];

window.onload = function() {
    for ( let i = 0; i < 3; i++){
        //<img id="rock">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i]+".png";
        
        choice.addEventListener('click',selectChoice);
        document.getElementById("choices").append(choice);
        

     
    }

    
}

function selectChoice(){
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";
        
    //oponent choices
    opponent = choices[Math.floor(Math.random()*3)];
    document.getElementById("opponent-choice").src= opponent +".png";

    
    
    // revisar ganador.
    
    

    
        

    

    
        if(you === opponent){

        yourScore++,
        opponetScore++;
        document.getElementById("Message").innerText = 'Draw';
        }

        else if( you === "rock" && opponent ==="paper"){
            document.getElementById('Message').innerText = you + " loose " + opponent;
            opponetScore++;
            

        }
        
        else if( you === "rock" && opponent ==="scissors"){
            document.getElementById('Message').innerText = you + " beats " + opponent;
            yourScore++;
            
        }
            
        else if(you === "paper"&& opponent ==="scissors"){
            document.getElementById('Message').innerText = you + " loose " + opponent;
            opponetScore++;
            
        }
        else if( you === "paper"&& opponent =="rock"){
            document.getElementById('Message').innerText = you + " beats " + opponent;
            yourScore++;
        }

        else if( you === "scissors"&& opponent ==="rock"){
            document.getElementById('Message').innerText = you + " loose " + opponent;
            opponetScore++;
            
        }
        else if(you === "scissors"&& opponent ==="paper"){
            document.getElementById('Message').innerText = you + " beats " + opponent;
            yourScore++;
            
        }else{console.log("juegale")}
    
    



    
    document.getElementById('your-score').innerText = yourScore;
    document.getElementById('opponent-score').innerText = opponetScore;



    
}


    



    
