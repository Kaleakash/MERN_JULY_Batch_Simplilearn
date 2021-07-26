function info() {

   // alert("Welcome to JS Program")
   //var name = document.getElementsByName("user")[0].value;
   //alert("Welcome user "+name);
   
   //var name = document.getElementById("fname").value;
    //alert("Name is "+name);
   
    // var name = document.getElementById("fname").value;
    // document.getElementById("abc").innerHTML="Welcome user "+name;

    var name = document.getElementById("fname").value;
    var myPTag = document.createElement("p");
    var myPTagContent = document.createTextNode("Welcome "+name);
    myPTag.appendChild(myPTagContent);     // content added to p tag 

    document.getElementById("abc").appendChild(myPTag); // p tag add inside div tag
}