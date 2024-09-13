let Result = document.getElementById('result');

// on click the value show on screen
function insertNum(value){
    Result.value += value;
}

// for delete the number
function deleteNum(){
    Result.value = Result.value.slice(0, -1);
}

// for calculate the number =
function calculate(){
    try{
        Result.value = eval(Result.value);
    }

    catch(error)
    {
       Result.value = "error";
    }
}

// for reset screen
function allReset(){
    Result.value = '';
}