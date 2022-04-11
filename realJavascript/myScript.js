console.log("I exist");
// window.alert("hi");

let pElement = document.getElementById("myPTag");

console.log(pElement);



function change() {
    // pElement.innerHTML = "Nope!";
    let firstName = document.getElementById("nameInput").value;
    pElement.innerHTML = "Hello " + firstName;
}