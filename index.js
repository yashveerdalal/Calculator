// calculator 

const display = document.getElementById("display");


function appendtodisplay(input){

    display.value += input;

}
function cleardisplay(){
   
    display.value = "";
}
function deleteone(){
    display.value =  display.value.toString().slice(0,-1);
}


function calculate(){

    try{
        display.value = eval(display.value);
    } catch(error){
        display.value ="Invalid Syntax";
    }

}