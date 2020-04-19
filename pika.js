var count = 8
var pikaLocation = Math.floor(Math.random() * 17)
var bombLocation = Math.floor(Math.random() * 17)
 

var changeChar = (loc) => {
    document.getElementById(loc).innerHTML = "no"
    document.getElementById("counter").innerHTML = count -=1
    foundPikachu(loc)
    }


var foundPikachu = (loc) => {
    if( loc === pikaLocation ) {
        document.getElementById(loc).innerHTML = "pika"
        setTimeout(function() {
            alert("You Win");},250
        )
       
    } 
    
    else if (loc === bombLocation) {
        document.getElementById(loc).innerHTML = "&#x2620";
        setTimeout(function() {
            alert("You Lose");},250)
        
    
    }
    
    else if (pikaLocation === bombLocation) {
        reloadPage()
    
    }
    else if (count === -1) { 
        alert("try again!")
        reloadPage()
    }
    else {
    
    }
}

var reloadPage = () => {
    location.reload();
}




    