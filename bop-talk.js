// let messeae = "This is so weird";
// let bopMessage = message;
// const letters = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
// let new = 0;
// for (let i = 0; i < letters.length; i++) {
//     // let location = messege.search(letters[i]);
//     if (messege.includes(letters[i])) {
//         new = messege.replace(letters[i],letters[i]+"op");
//     }
// }

// console.log(messege);

let inputMessage = "hello";

let bopMessage = inputMessage;


let letterB = "b";

if (inputMessage.includes(letterB)) {
    let newB = bopMessage.replace("b","bop");
    bopMessage = newB;
}

let letterC = "c";

if (inputMessage.includes(letterC)) {
    let newC = bopMessage.replace("c","cop");
    bopMessage = newC;
} 

let letterD = "d";

if (inputMessage.includes(letterD)) {
    let newD = bopMessage.replace("d","dop");
    bopMessage = newD;
} 

let letterF = "F";

if (inputMessage.includes(letterF)) {
    let newF = bopMessage.replace("f","fop");
    bopMessage = newF;
} 

let letterG = "g";

if (inputMessage.includes(letterG)) {
    let newG = bopMessage.replace(/g/g,"gop");
    bopMessage = newG;
} 

let letterH = "h";

if (inputMessage.includes(letterH)) {
    let newH = bopMessage.replace(/h/g,"hop");
    bopMessage = newH;
} 

let letterJ = "j";

if (inputMessage.includes(letterJ)) {
    let newJ = bopMessage.replace(/j/g,"jop");
    bopMessage = newJ;
} 

let letterK = "k";

if (inputMessage.includes(letterK)) {
    let newK = bopMessage.replace(/k/g,"kop");
    bopMessage = newK;
} 

let letterL = "l";

if (inputMessage.includes(letterL)) {
    let newL = bopMessage.replace(/l/g,"lop");
    bopMessage = newL;
} 

let letterT = "t";

if (inputMessage.includes(letterT)) {
    let newT = bopMessage.replace("t","top");
    bopMessage = newT;
} 

let letterS = "s";

if (inputMessage.includes(letterS)) {
    let newS = bopMessage.replace(/s/g,"sop");
    bopMessage = newS;
} 

let letterW = "w";

if (inputMessage.includes(letterW)) {
    let newW = bopMessage.replace("w","wop");
    bopMessage = newW;
}

let letterR = "r";

if (inputMessage.includes(letterR)) {
    let newR = bopMessage.replace("r","rop");
    bopMessage = newR;
} 

console.log(bopMessage);

