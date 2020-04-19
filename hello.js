var yourName = prompt("what is your name?")
console.log("hello, " + yourName)



var adjective = prompt("give me an adjective")
var noun1 = prompt("give me a noun")
var liquid = prompt("give me a liquid")
var bodyPart = prompt("give me a body part")
var verb = prompt("give me a verb")
var noun2 = prompt("give me another noun")
var place = prompt("give me a place")

alert("Piranhas are more " + adjective + " during the day, so make sure you cross the " + noun1 + 
" at night. Piranhas are attracted to fresh " + liquid + " and will most likely take a bite out of your "
+ bodyPart + " if you " + verb + " Whatever you do, if you have an open " + noun2 + " try and find another way to get back to. " + place + "Good luck!");




var name = prompt("What is your name?")
var ask = prompt("Do you know how to code")

var answer = () =>{
    if(ask === "yes" ){
        alert("you are a code master")
    } else{
        alert("whatever")
    }
}


var ask = prompt("ask a question")
var randomNum = Math.floor(Math.random() * 5)

var randomAnswer = () => {
    if( randomNum === 1){
        alert("better not tell you now")
    } else if( randomNum === 2){
        alert("it is decidedly so")
    } else if( randomNum === 3){
        alert("dont count on it")
    } else if( randomNum === 4){
        alert("signs poin to yes")
    } else {
        alert("outlook not so good")
    }
}
    
    randomAnswer()