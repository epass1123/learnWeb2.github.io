const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector(".js-title");
  
function getTime(){
    const date = new Date();
    let hour = date.getHours();
    if(hour > 12){
        hour = hour - 12;
        hour = `PM ${hour}`;
    }
    else{
        
        if(hour == 0){
            hour = `AM 12`;
        }
        else{
            hour = `AM ${hour}`;
        }
    }
    let min = date.getMinutes();
    let sec = date.getSeconds();
    clockTitle.innerText = 
    `${hour<10 ? `0${hour}` : hour}:${min<10 ? `0${min}` : min}:${sec<10 ? `0${sec}` : sec}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();