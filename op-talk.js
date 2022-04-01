let messege = "This is so weird";
const letters = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
for (let i = 0; i < letters.length; i++) {
    console.log("bye");
    // let location = messege.search(letters[i]);
    if (messege.includes(letters[i])) {
        console.log("hi")
        messege.replace("i",letters[i]+"op");
    }
}

console.log(messege);