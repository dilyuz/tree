`use strict`
// setTimeout(() =>{
//     console.log('hello');
// }, 3000)

// biz setTimeout methodimizni bir ozgaruvchiga saqlab olishimiz kerak,sababi malum bir vaqtdan keyin uni toxtatishimiz kk bolad

const btn = document.querySelector('#move_btn');
let timerDD
btn.addEventListener('click', (e) => {
    timerDD = setTimeout(logger, 500)
})

function logger(){
    console.log('hello')
}

//clearInterval va clearTimeout


let timeoutID;
function setOutput(outputContent){
    document.querySelector("#output").textContent = outputContent;
}

function delayedMessage(){
    setOutput("")
    timeoutID = setTimeout(setOutput, 2*1000, 'that was really slow!');
}

function clearMessage(){
    clearTimeout(timeoutID);
}

function myAnimation(){
    const car = document.querySelector('.car');
    let pos = 0;

    const timerId = setInterval(frame, 10);

    function frame() {
        if (pos === 700) {
            clearInterval(timerId);
        }else {
            console.log(pos)
            pos++;
            car.style.top = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

