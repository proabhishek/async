
let clockArea = document.querySelector('#clock');


function CurrentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day =  date.getDay(); // 0-6
    let month = date.getMonth(); // 0-11
    let year = date.getFullYear();
    let dayOfMonth = date.getDate(); // 1-31


    let time = hours + ':' + minutes + ':' + seconds ;
    clockArea.innerHTML = time;

}

// CurrentTime()

setInterval(CurrentTime, 1000)