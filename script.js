function prato1(){
    if(document.getElementById("prato1").style.borderColor == "green"){
        document.getElementById("prato1").style.borderColor = "transparent"
    }else{

        document.getElementById("prato1").style.borderColor = "green"
        document.getElementById("prato2").style.borderColor = "transparent"
        document.getElementById("prato3").style.borderColor = "transparent"
    }
}
function prato2(){
    if(document.getElementById("prato2").style.borderColor == "green"){
        document.getElementById("prato2").style.borderColor = "transparent"
    }else{

        document.getElementById("prato2").style.borderColor = "green"
        document.getElementById("prato3").style.borderColor = "transparent"
        document.getElementById("prato1").style.borderColor = "transparent"
    }
}
function prato3(){
    if(document.getElementById("prato3").style.borderColor == "green"){
        document.getElementById("prato3").style.borderColor = "transparent"
    }else{

        document.getElementById("prato3").style.borderColor = "green"
        document.getElementById("prato2").style.borderColor = "transparent"
        document.getElementById("prato1").style.borderColor = "transparent"
    }
}
function bebida1(){
    if(document.getElementById("bebida1").style.borderColor == "green"){
        document.getElementById("bebida1").style.borderColor = "transparent"
    }else{

        document.getElementById("bebida1").style.borderColor = "green"
        document.getElementById("bebida2").style.borderColor = "transparent"
        document.getElementById("bebida3").style.borderColor = "transparent"
    }
}
function bebida2(){
    if(document.getElementById("bebida2").style.borderColor == "green"){
        document.getElementById("bebida2").style.borderColor = "transparent"
    }else{

        document.getElementById("bebida2").style.borderColor = "green"
        document.getElementById("bebida1").style.borderColor = "transparent"
        document.getElementById("bebida3").style.borderColor = "transparent"
    }
}
function bebida3(){
    if(document.getElementById("bebida3").style.borderColor == "green"){
        document.getElementById("bebida3").style.borderColor = "transparent"
    }else{

        document.getElementById("bebida3").style.borderColor = "green"
        document.getElementById("bebida2").style.borderColor = "transparent"
        document.getElementById("bebida1").style.borderColor = "transparent"
    }
}
function sobremesa1(){
    if(document.getElementById("sobremesa1").style.borderColor == "green"){
        document.getElementById("sobremesa1").style.borderColor = "transparent"
    }
    else{

        document.getElementById("sobremesa1").style.borderColor = "green"
        document.getElementById("sobremesa2").style.borderColor = "transparent"
        document.getElementById("sobremesa3").style.borderColor = "transparent"
    }
}
function sobremesa2(){
    if(document.getElementById("sobremesa2").style.borderColor == "green"){
        document.getElementById("sobremesa2").style.borderColor = "transparent"
    }
    else{
    document.getElementById("sobremesa2").style.borderColor = "green"
    document.getElementById("sobremesa1").style.borderColor = "transparent"
    document.getElementById("sobremesa3").style.borderColor = "transparent"
}}
function sobremesa3(){
    if(document.getElementById("sobremesa3").style.borderColor == "green"){
        document.getElementById("sobremesa3").style.borderColor = "transparent"
    }
    else{
    document.getElementById("sobremesa3").style.borderColor = "green"
    document.getElementById("sobremesa2").style.borderColor = "transparent"
    document.getElementById("sobremesa1").style.borderColor = "transparent"
}
}