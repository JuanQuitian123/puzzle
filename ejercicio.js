var caja1 = document.getElementById("caja1");
var caja2 = document.getElementById("caja2");




function b1() {
    var aux = caja1.innerText;
    if (aux == "1,2,3,4,5,6") {
        caja2.innerHTML="A";
    } else {
        
    }
    if (aux == '') {
        caja1.innerHTML="1";
    }


}

function b2() {
    var aux = caja1.innerText;
    var aux2 = caja2.innerText;
    if (aux2 == "A") {
        caja2.innerText="A,B";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6") {
            alert("Falta una letra");
        }
    }
    if (aux == "1") {
        caja1.innerHTML="1,2";
    } else {
        if (aux == "") {
            alert("Falta un numero");   
        } 
      
    }
    
}

function b3() {
    var aux = caja1.innerText;
    var aux2 = caja2.innerText;
    if (aux2 == "A,B") {
        caja2.innerText="A,B,C";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6") {
            alert("Falta una letra");
        }
    }
    if (aux == "1,2") {
        caja1.innerHTML="1,2,3";
    } else {
        if (aux == "") {
            alert("Faltan  numeros");   
        } 
      
    }
    
}

function b4() {
    var aux = caja1.innerText;
    var aux2 = caja2.innerText;
    if (aux2 == "A,B,C") {
        caja2.innerText="A,B,C,D";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6") {
            alert("Falta una letra");
        }
    }
    if (aux == "1,2,3") {
        caja1.innerHTML="1,2,3,4";
    } else {
        if (aux == "") {
            alert("Faltan  numeros");   
        } 
      
    }
    
}
function b5() {
    var aux = caja1.innerText;    
    var aux2 = caja2.innerText;
    if (aux2 == "A,B,C,D") {
        caja2.innerText="A,B,C,D,E";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6") {
            alert("Falta una letra");
        }
    }
    if (aux == "1,2,3,4") {
        caja1.innerHTML="1,2,3,4,5";
    } else {
        if (aux == "") {
            alert("Faltan  numeros");   
        } 
      
    }
    
}
function b6() {
    var aux = caja1.innerText;
    var aux2 = caja2.innerText;
    if (aux2 == "A,B,C,D,E") {
        caja2.innerText="A,B,C,D,E,F";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6") {
            alert("Falta una letra");
        }
    }
    if (aux == "1,2,3,4,5") {
        caja1.innerHTML="1,2,3,4,5,6";
    } else {
        if (aux == "") {
            alert("Faltan  numeros");   
        } 
      
    }
    
}




//Letras digitadas con botones 
