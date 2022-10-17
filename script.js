let pratoa = false;
let bebidaa = false;
let sobremesaa = false;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let pedidoPrato
let pedidoBebida
let pedidoSobremesa
soma = 0;
function prato(variavel){
    const check = document.querySelector(".pedido-prato .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        pratoa = false;
        valorPrato = 0;
        testaPedido();
    }
    else{
        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        pratoa = true;
        valorPrato = document.querySelector(".pedido-prato .bordaVerde #valor").innerHTML;
        valorPrato = valorPrato.replace(",", ".")
        pedidoPrato = document.querySelector(".pedido-prato .bordaVerde #pedido").innerHTML;
        testaPedido();               
    }
}
function bebida(variavel){
    const check = document.querySelector(".pedido-bebida .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        bebidaa = false;
        valorBebida = 0;
        testaPedido();
    }
    else{
        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        bebidaa = true;
        valorBebida = document.querySelector(".pedido-bebida .bordaVerde #valor").innerHTML;
        valorBebida = valorBebida.replace(",", ".")
        pedidoBebida = document.querySelector(".pedido-bebida .bordaVerde #pedido").innerHTML;
        testaPedido();
    }
}
function sobremesa(variavel){
    const check = document.querySelector(".pedido-sobremesa .bordaVerde ")
    if(variavel.classList.contains("bordaVerde") == true){
        variavel.classList.remove("bordaVerde")
        sobremesaa = false;
        valorSobremesa = 0;
        testaPedido();
    }
    else{
        if(check !== null){
            check.classList.remove("bordaVerde");
        }
        variavel.classList.add("bordaVerde");
        sobremesaa = true;
        valorSobremesa = document.querySelector(".pedido-sobremesa .bordaVerde #valor").innerHTML;
        valorSobremesa = valorSobremesa.replace(",", ".")
        pedidoSobremesa = document.querySelector(".pedido-sobremesa .bordaVerde #pedido").innerHTML;
        testaPedido(); 
    }
}
function testaPedido(){
    if(pratoa && bebidaa && sobremesaa){
        soma = ((+valorBebida)+(+valorPrato)+(+valorSobremesa)).toFixed(2);
        document.getElementById("botao-3").style.display = "none";
        document.getElementById("botao3").style.display = "flex";
    }else{
        soma = ((+valorBebida)+(+valorPrato)+(+valorSobremesa)).toFixed(2);
        document.getElementById("botao-3").style.display = "flex";
        document.getElementById("botao3").style.display = "none";
    }
}
function pedido(){
    const pedidoo = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${pedidoPrato}
- Bebida: ${pedidoBebida}
- Sobremesa: ${pedidoSobremesa}
Total: R$ ${soma}`)
    const link = "https://wa.me/5541997892984?text="
    window.open(link + pedidoo)
}