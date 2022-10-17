let pratoa = false;
let bebidaa = false;
let sobremesaa = false;

function prato(variavel){
    const check = document.querySelector(".pedido-prato .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        pratoa = false;
        testaPedido();
    }
    else{

        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        pratoa = true;
        testaPedido();
    }
}
function bebida(variavel){
    const check = document.querySelector(".pedido-bebida .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        bebidaa = false;
        testaPedido();
    }
    else{

        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        bebidaa = true;
        testaPedido();
    }
}
function sobremesa(variavel){
    const check = document.querySelector(".pedido-sobremesa .bordaVerde ")
    
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        sobremesaa = false;
        testaPedido();
    }
    else{

        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        
        sobremesaa = true;
        testaPedido();
    }
}
function testaPedido(){
    if(pratoa && bebidaa && sobremesaa){

        document.getElementById("botao-3").style.display = "none";
        document.getElementById("botao3").style.display = "flex";
    }else{
        document.getElementById("botao-3").style.display = "flex";
        document.getElementById("botao3").style.display = "none";
    }

    
}