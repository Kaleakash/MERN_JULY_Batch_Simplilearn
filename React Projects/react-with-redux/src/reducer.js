const initialState = {
    id:100,
    name:"Raj",
    salary:12000,
    /*toDoList:[
        {tid:1,todo:"Fininsh break fast"},
        {tid:2,todo:"Creating Application"},
    ]*/
}
/*
    switch 1: Add 
    switch 2 : delete 
*/
export default function reducer(state=initialState,action){
    //change the state base upon the action 
    //console.log(action);
    let newState = {...state};      // using spred operator create the copy of state variable 
                                    // in redux state is immutable 
    switch(action.type){
        case "INCREMENT":newState.salary= newState.salary + eval(action.payload);
                    break;
        case "DECREMENT":newState.salary= newState.salary - eval(action.payload);
                    break;
    }
    return newState;
}