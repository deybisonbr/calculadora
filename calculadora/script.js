
function displayNum(num){
    const display = window.document.querySelector("p#displayNumber")
    display.innerHTML += num;


}

function clean(){
     window.document.querySelector("p#displayNumber").innerHTML = "";
}
function del(){
    const displayback = window.document.querySelector("p#displayNumber").innerHTML; 
    window.document.querySelector("p#displayNumber").innerHTML = displayback.substring(0, displayback.length -1)
}
function operacao(){
    const resultado = window.document.querySelector("p#displayNumber").innerHTML.replace('x', '*');
    if(resultado){
        window.document.querySelector("p#displayNumber").innerHTML = eval(resultado)
    }else{
        window.document.querySelector("p#displayNumber").innerHTML = 'Digite o numero!'
    }

}
