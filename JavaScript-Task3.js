

function number(num) {
    var myArray = [];
    var myReplacement = [];


    for (var index = 1; index <= num; index++) {
        myArray.push(index);
        
    }
    for (var index = 0; index < myArray.length; index++){
        if (myArray[index] % 2 == 0 && myArray[index] % 3 == 0 && myArray[index] % 5 == 0) {
            myReplacement.push("yu-gi-oh");
        }
        else if (myArray[index] % 2 == 0 && myArray[index] % 3 == 0){
            myReplacement.push("yu-gi");
        } else if (myArray[index] % 2 == 0 && myArray[index] % 5 == 0){
            myReplacement.push("yu-oh");
        }else if (myArray[index] % 3 == 0 && myArray[index] % 5 == 0){
            myReplacement.push("gi-oh");
        }else if (myArray[index] % 2 === 0){
            myReplacement.push("yu");
        }else if (myArray[index] % 3 === 0){
            myReplacement.push("gi");
        }else if (myArray[index] % 5 === 0){
            myReplacement.push("oh");
        }else {
            myReplacement.push(index + 1);
        }
    }
    return myReplacement;
};
console.log(number(100));
console.log(number(20));
