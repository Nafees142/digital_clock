const clock = document.getElementsByClassName('clock')[0];

setInterval ( function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.textContent = date.toLocaleTimeString();
} , 1000);