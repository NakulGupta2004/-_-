const display=document.getElementById("display");

function appendToDispay(input){
    display.value+=input;
}
function clearFisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
