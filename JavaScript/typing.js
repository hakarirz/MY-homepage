let target = document.querySelector("#dynamic");
let stringArr = ["no time to explain","eater of bones","Whisper of the Worm","perfect riot","capricious storm"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");
function randomString(){
    let stringArr = ["no time to explain","eater of bones","Whisper of the Worm","perfect riot","capricious storm"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

function dynamic(randomArr){
    if(randomArr.length >0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString())

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);