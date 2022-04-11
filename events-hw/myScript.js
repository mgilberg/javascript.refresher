
function change() {
    let name = document.getElementById("name").value;
    let animal = document.getElementById("animal").value;
    message.innerHTML = "Hello " + name + ". Don't you wish you were a "+animal+"?";
}
function changeColor() {
    document.getElementById("name").style.backgroundColor = 'red';
}