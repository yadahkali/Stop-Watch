// variables for buttons

var startStop = document.querySelector(".startStop");
var reset = document.querySelector(".reset");

// variables for time
var displayTimer = document.querySelector(".numbers");

var seconds = 0;
var minutes = 0;
var hours = 0;

// variables to leading time

var leadingseconds = 0;
var leadingminutes = 0;
var leadinghours = 0;

// variable for button functionality
var timerStatus = "stopped" 
var timerInterval;

// valiable of arlam
var arlam = prompt("enter your wake time like \"00 : 00 : 04\""); 




// music to plat 
let sounds = new Audio("Legends Never Die.mp3")

// funciton to orange  seconds into minutes 
// and minuts into second

function stopWatch() {
  
    seconds++
    if(seconds/60 === 1 ){

        seconds = 0;
        minutes++
        if (minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }



// adding zero front when numbers are less than zero

    if(seconds<10){
        leadingseconds ="0"+seconds.toString();
    }else{
        leadingseconds = seconds;
    }



    if(minutes<10){
        leadingminutes ="0"+minutes.toString();
    }else{
        leadingminutes = minutes;
    }


    if(hours<10){
        leadinghours ="0"+hours.toString();
    }else{
        leadinghours = hours;
    }



// displaing time on the screen

    displayTimer.innerText = leadinghours+ " : "+leadingminutes+" : "+leadingseconds;



 //arlam functionality (playing Legend Never Die in 1min 20sec)

 
if(displayTimer.innerText == arlam){
        sounds.play();
    setTimeout(function(){
        sounds.pause();
    },80000);
    
} 
} 



/*------------------------------------\ 
|       buttons funcitionality         |
 \------------------------------------*/

//  start and stopping watch count
startStop.addEventListener("click",function(){
    if (timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch,1000);
        startStop.innerText = "stop";
        timerStatus = "started";
    }
    
    else{
        window.clearInterval(timerInterval);
        startStop.innerText ="resume";
        timerStatus = "stopped";
        sounds.pause();  
    }
})

// reset button

reset.addEventListener("click",function(){
    window.clearInterval(timerInterval);
    displayTimer.innerText = "00 : 00 : 00";
    timerStatus = "stopped"
    startStop.innerText = "start"
    seconds = 0;
    minutes = 0;
    hours = 0;
    sounds.pause();
})




















