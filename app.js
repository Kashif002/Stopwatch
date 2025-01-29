var isStop= true; //it will tell us if the clock is stopped or not. This will help us to create start stop function.

var ms=0;
var s=0;
var min=0;
var hr=0;

function start(){
    if(isStop==true)
    {
        isStop= false;
        startTimer();
    }
}

function startTimer(){
    if(isStop==false)
    {
        ms++;
        if (ms==100)
        {
            ms=0;
            s++;
        }
        if (s==60)
        {
            s=0;
            min++;
        }
        if (min==60)
        {
            min=0;
            hr++;
        }
        let formattedHr = hr < 10 ? "0" + hr : hr;
        let formattedMin = min < 10 ? "0" + min : min;
        let formattedS = s < 10 ? "0" + s : s;
        let formattedMs = ms < 10 ? "0" + ms : ms;
        
        
        stopwatch.innerHTML= formattedHr + " : " + formattedMin + " : " + formattedS + " : " + formattedMs;
        setTimeout('startTimer()',10); //to call startTimer recursively every 10ms.
    }
};

function stop(){
    isStop=true; //stop the timer(startTimer function will stop working).
}

function reset(){
    isStop=true;
    ms=0;
    s=0;
    min=0;
    hr=0;
    stopwatch.innerHTML= "00 : 00 : 00 : 00";
}