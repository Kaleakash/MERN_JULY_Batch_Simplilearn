function add(a,b){
    var sum = a+b;
    return sum;
}
function sub(a,b){
    var sub1 = a-b;
    return sub1;
}
function mul(a,b){
    var mul1 = a*b;
    return mul1;
}
function div(a,b){
    var div1 = a/b;
    return div1;
}

function calSalary(id,name,salary,desg){
    if(desg=="Manager"){
        return salary+5000;
    }else if(desg=="Programmer"){
        return salary+3000;
    }else {
        return salary;
    }
}

