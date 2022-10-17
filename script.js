let pratoa = false;
let bebidaa = false;
let sobremesaa = false;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let pedidoPrato
let pedidoBebida
let pedidoSobremesa


function prato(variavel){
    const check = document.querySelector(".pedido-prato .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        pratoa = false;
        testaPedido();
        valorPrato = 0;
    }
    else{

        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        pratoa = true;
        testaPedido();
        valorPrato = document.querySelector(".pedido-prato .bordaVerde #valor").innerHTML;
        valorPrato = valorPrato.replace(",", ".")
        pedidoPrato = document.querySelector(".pedido-prato .bordaVerde #pedido").innerHTML;
        alert(pedidoPrato)
        
    }
}
function bebida(variavel){
    const check = document.querySelector(".pedido-bebida .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        bebidaa = false;
        testaPedido();
        valorBebida = 0;
    }
    else{

        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        bebidaa = true;
        testaPedido();
        valorBebida = document.querySelector(".pedido-bebida .bordaVerde #valor").innerHTML;
        valorBebida = valorBebida.replace(",", ".")
        pedidoBebida = document.querySelector(".pedido-bebida .bordaVerde #pedido").innerHTML;
        alert(pedidoBebida)
    }
}
function sobremesa(variavel){
    const check = document.querySelector(".pedido-sobremesa .bordaVerde ")
    
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        sobremesaa = false;
        testaPedido();
        valorSobremesa = 0;
    }
    else{

        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        
        sobremesaa = true;
        testaPedido();
        valorSobremesa = document.querySelector(".pedido-sobremesa .bordaVerde #valor").innerHTML;
        valorSobremesa = valorSobremesa.replace(",", ".")
        pedidoSobremesa = document.querySelector(".pedido-sobremesa .bordaVerde #pedido").innerHTML;
        alert(pedidoSobremesa)
        
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