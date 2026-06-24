const screen = document.getElementById("screen");

function append(value){
    screen.value += value;
}

function clearScreen(){
    screen.value = "";
}

function deleteLast(){
    screen.value = screen.value.slice(0,-1);
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }catch{
        screen.value = "Error";
    }
}

