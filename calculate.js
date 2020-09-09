function calc(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    var opr = document.getElementById("opr").value

    if(opr === "+"){
        document.getElementById("result").innerHTML = (n1+n2).toFixed(9)
    }else if(opr === "-"){
        document.getElementById("result").innerHTML = (n1-n2).toFixed(9)
    }else if(opr === "*"){
        document.getElementById("result").innerHTML = (n1*n2).toFixed(9)
    }else if(opr === "/"){
        document.getElementById("result").innerHTML = (n1/n2).toFixed(9)
    }else{
        alert("Please select valid Operation")
    }
}


