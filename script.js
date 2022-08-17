

function juego(comp){

    let pl1 = prompt("piedra, papel o tijeras");
    let duel= pl1.toLowerCase();




const  asigment = function(hand){
    
    let pl2 = Math.floor(Math.random()*3) + 1;
    console.log(pl2);
    let a = 'piedra';
    let b = 'papel';
    let c = 'tijeras';

    if(pl2 === 1){
        hand = a;
        return hand
       

    }else if( pl2 === 2){
        hand = b;
        return hand
        
    }else { hand = c;
        return hand
        
}
}

let funk = asigment();
    

    if( duel ==="piedra" && funk ==="tijeras"){ 
        comp = "Ganaste :D";
        console.log(comp);
        alert(comp);
        return comp

    }else if(duel ==="piedra" && funk ==="papel"){
        comp = "Pierdes :("
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="papel" && funk ==="piedra"){
        comp = "Ganaste :D";
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="papel" && funk ==="tijeras"){
        comp = "Pierdes :(";
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="tijeras" && funk ==="papel"){
        comp = "Ganaste :D";
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="tijeras" && funk ==="piedra"){
        comp = "Pierdes :(";
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="tijeras" && funk ==="tijeras"){
        comp = "Empate :(";
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="papel" && funk ==="papel"){
        comp = "empate :(";
        console.log(comp);
        alert(comp);
        return comp;
    }else if(duel ==="piedra" && funk ==="piedra"){
        comp = "empate :(";
        console.log(comp);
        alert(comp);
        return comp;
    }else{
        comp = "No es una opcion valida";
        console.log(comp);
        alert(comp);
    }
}

function game(ronda){
    let persona = 0;
    let computadora = 0;
for(let i =0; i<3; i++){
    let real = juego();
   
    switch(true){
        case real === "Ganaste :D":
        persona= persona+1;
        break;

        case real === "Pierdes :(":
        computadora = computadora +1;
        break;

        case  real === "empate :(":
            persona = persona+1;
            computadora = computadora+1;
        alert('Es un empate');
        break;

    }
    
}
if(persona > computadora){
    alert('Ganaste carnal!!');
}else if(computadora> persona){
    alert("Te ha ganado Robotina");
}else{alert('sigue jugando')}
}

game();



 


        
        

