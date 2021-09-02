function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function sumOfEven(num){
    var result = 0;
    for(let i=0;i<num.length;i++){
        if(num[i]%2 == 0){
            result = result +num[i]
        }
    }
    return result;
}

module.exports={add,sub,sumOfEven}
