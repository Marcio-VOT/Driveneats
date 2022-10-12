function prato1(){
    if(document.getElementById("prato1").style.borderColor == "green"){
        document.getElementById("prato1").style.borderColor = "transparent"
        document.getElementById("prat").style.color = "black"
        testaPedido();
    }else{

        document.getElementById("prato1").style.borderColor = "green"
        document.getElementById("prato2").style.borderColor = "transparent"
        document.getElementById("prato3").style.borderColor = "transparent"
        document.getElementById("prat").style.color = "white"
        testaPedido();
    }
}
function prato2(){
    if(document.getElementById("prato2").style.borderColor == "green"){
        document.getElementById("prato2").style.borderColor = "transparent"
        document.getElementById("prat").style.color = "black"
        testaPedido();
    }else{

        document.getElementById("prato2").style.borderColor = "green"
        document.getElementById("prato3").style.borderColor = "transparent"
        document.getElementById("prato1").style.borderColor = "transparent"
        document.getElementById("prat").style.color = "white"
        testaPedido();
    }
}
function prato3(){
    if(document.getElementById("prato3").style.borderColor == "green"){
        document.getElementById("prato3").style.borderColor = "transparent"
        document.getElementById("prat").style.color = "black"
        testaPedido();
    }else{

        document.getElementById("prato3").style.borderColor = "green"
        document.getElementById("prato2").style.borderColor = "transparent"
        document.getElementById("prato1").style.borderColor = "transparent"
        document.getElementById("prat").style.color = "white"
        testaPedido();
    }
}
//------------------------------------------------------------------------------
function bebida1(){
    if(document.getElementById("bebida1").style.borderColor == "green"){
        document.getElementById("bebida1").style.borderColor = "transparent"
        document.getElementById("refr").style.color = "black"
        testaPedido();
    }else{

        document.getElementById("bebida1").style.borderColor = "green"
        document.getElementById("bebida2").style.borderColor = "transparent"
        document.getElementById("bebida3").style.borderColor = "transparent"
        document.getElementById("refr").style.color = "white"
        testaPedido();
    }
}
function bebida2(){
    if(document.getElementById("bebida2").style.borderColor == "green"){
        document.getElementById("bebida2").style.borderColor = "transparent"
        document.getElementById("refr").style.color = "black"
        testaPedido();
    }else{

        document.getElementById("bebida2").style.borderColor = "green"
        document.getElementById("bebida1").style.borderColor = "transparent"
        document.getElementById("bebida3").style.borderColor = "transparent"
        document.getElementById("refr").style.color = "white"
        testaPedido();
    }
}
function bebida3(){
    if(document.getElementById("bebida3").style.borderColor == "green"){
        document.getElementById("bebida3").style.borderColor = "transparent"
        document.getElementById("refr").style.color = "black"
        testaPedido();
    }else{

        document.getElementById("bebida3").style.borderColor = "green"
        document.getElementById("bebida2").style.borderColor = "transparent"
        document.getElementById("bebida1").style.borderColor = "transparent"
        document.getElementById("refr").style.color = "white"
        testaPedido();
    }
}
//--------------------------------------------------------------------------------
function sobremesa1(){
    if(document.getElementById("sobremesa1").style.borderColor == "green"){
        document.getElementById("sobremesa1").style.borderColor = "transparent"
        document.getElementById("sobre").style.color = "black"
        testaPedido();
    }
    else{

        document.getElementById("sobremesa1").style.borderColor = "green"
        document.getElementById("sobremesa2").style.borderColor = "transparent"
        document.getElementById("sobremesa3").style.borderColor = "transparent"
        document.getElementById("sobre").style.color = "white"
        testaPedido();
    }
}
function sobremesa2(){
    if(document.getElementById("sobremesa2").style.borderColor == "green"){
        document.getElementById("sobremesa2").style.borderColor = "transparent"
        document.getElementById("sobre").style.color = "black"
        testaPedido();
    }
    else{
    document.getElementById("sobremesa2").style.borderColor = "green"
    document.getElementById("sobremesa1").style.borderColor = "transparent"
    document.getElementById("sobremesa3").style.borderColor = "transparent"
    document.getElementById("sobre").style.color = "white"
    testaPedido();
}}
function sobremesa3(){
    
    if(document.getElementById("sobremesa3").style.borderColor == "green"){
        document.getElementById("sobremesa3").style.borderColor = "transparent"
        document.getElementById("sobre").style.color = "black"
        testaPedido();
    }
    else{
    document.getElementById("sobremesa3").style.borderColor = "green"
    document.getElementById("sobremesa2").style.borderColor = "transparent"
    document.getElementById("sobremesa1").style.borderColor = "transparent"
    document.getElementById("sobre").style.color = "white"
    testaPedido();
    
}
}
//-----------------------------------------------------------------------------------
function testaPRATO(){
    if(document.getElementById("prat").style.color == "white")
        return 1;
    else
        return 0;
}
function testaBEBIDA(){
    if(document.getElementById("refr").style.color == "white")
        return 1;
    else
        return 0;
}
function testaSOBREMESA(){
    if(document.getElementById("sobre").style.color == "white")
        return 1;
    else
        return 0;
}
function testaPedido(){
    if((testaPRATO() == 1)&&(testaBEBIDA()==1)&&(testaSOBREMESA()==1)){

        document.getElementById("botao-3").style.display = "none";
        document.getElementById("botao3").style.display = "flex";
    }else{
        document.getElementById("botao-3").style.display = "flex";
        document.getElementById("botao3").style.display = "none";
    }

    
}