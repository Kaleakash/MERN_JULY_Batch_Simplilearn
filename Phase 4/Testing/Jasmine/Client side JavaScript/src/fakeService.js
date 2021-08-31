// function loadFakeData() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// loading the data using fetch or axios without depeding upon then and catch.
async function loadFakeData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await response.json();
    return data;
}

/*
axios.get("url").then().catch()
*/