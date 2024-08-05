let timerInterval;
let startTime = localStorage.getItem('startTime');

// الصور المختلفة
const Bronze1 = 'images/Bronze1.png';
const Bronze2 = 'images/Bronze2.png';
const Bronze3 = 'images/Bronze3.png';

const silver1 = 'images/silver1.png';
const silver2 = 'images/silver2.png';
const silver3 = 'images/silver3.png';

const gold1 = 'images/gold1.png';
const gold2 = 'images/gold2.png';
const gold3 = 'images/gold3.png';
const gold4 = 'images/gold4.png';

const plat1 = 'images/plat1.png';
const plat2 = 'images/plat2.png';
const plat3 = 'images/plat3.png';
const plat4 = 'images/plat4.png';

const diamand1 = 'images/diamand1.png';
const diamand2 = 'images/diamand2.png';
const diamand3 = 'images/diamand3.png';
const diamand4 = 'images/diamand4.png';

const heroic = 'images/heroic.png';
const master = 'images/master.png';

const Haker = 'images/Haker.jpg';
const supr = 'images/superman.png';
const giga = 'images/giga tchad.avif';

function startTimer() {
    if (!startTime) {
        startTime = new Date().getTime();
        localStorage.setItem('startTime', startTime);
    }
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date().getTime();
    const elapsed = now - startTime;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // تغيير الصورة بناءً على عدد الأيام
    const imageElement = document.querySelector('.countup-image');
    let body = document.getElementById('body')
    if (days == 0) {
        imageElement.src = Bronze1;
        body.style.background = '#4b1b0c'
    }
    else if (days == 1) {
        imageElement.src = Bronze2;
        body.style.background = '#4b1b0c'
    }
    else if (days == 2) {
        imageElement.src = Bronze3;
        body.style.background = '#4b1b0c'
    }
    else if (days == 3) {
        imageElement.src = silver1;
        body.style.background = 'rgb(185, 233, 226)'
    }
    else if (days == 4) {
        imageElement.src = silver2;
        body.style.background = 'rgb(185, 233, 226)'
    }
    else if(days == 5){
        imageElement.src = silver3;
        body.style.background = 'rgb(185, 233, 226)'
    }
    else if (days >= 6 && days < 9) {
        imageElement.src = gold1;
        body.style.background = 'rgb(241, 185, 0)'
    }
    else if (days >= 9 && days < 12) {
        imageElement.src = gold2;
        body.style.background = 'rgb(241, 185, 0)'
    }
    else if (days >= 12 && days < 15) {
        imageElement.src = gold3;
        body.style.background = 'rgb(241, 185, 0)'
    }
    else if (days >= 15 && days < 18) {
        imageElement.src = gold4;
        body.style.background = 'rgb(241, 185, 0)'
    }
    else if (days >= 18 && days < 21) {
        imageElement.src = plat1;
        body.style.background = 'rgb(17, 16, 59)'
    }
    else if (days >= 21 && days < 24) {
        imageElement.src = plat2;
        body.style.background = 'rgb(17, 16, 59)'
    }
    else if (days >= 24 && days < 27) {
        imageElement.src = plat3;
        body.style.background = 'rgb(17, 16, 59)'
    }
    else if (days >= 27 && days < 30) {
        imageElement.src = plat4;
        body.style.background = 'rgb(17, 16, 59)'
    }
    else if (days >= 30 && days < 33) {
        imageElement.src = diamand1;
        body.style.background = ' rgb(163, 0, 163)'
    }
    else if (days >= 33 && days < 36) {
        imageElement.src = diamand2;
        body.style.background = ' rgb(163, 0, 163)'
    }
    else if (days >= 36 && days < 39) {
        imageElement.src = diamand3;
        body.style.background = ' rgb(163, 0, 163)'
    }
    else if (days >= 39 && days < 42) {
        imageElement.src = diamand4;
        body.style.background = ' rgb(163, 0, 163)'
    }
    else if (days >= 42 && days < 50) {
        imageElement.src = heroic;
        body.style.background = ' rgb(150, 0, 0)'
    }

    else if (days >= 50 && days < 60) {
        imageElement.src = master;
        body.style.background = 'rgb(237, 255, 132)'
    }
    else if (days >= 60 && days < 75) {
        imageElement.src = Haker;
        body.style.backgroundImage = 'url("background/hak.avif")';
    }
    else if (days >= 75 && days < 100) {
        imageElement.src = supr;
        body.style.background = '#ffbb00'
    }
    else if (days >= 100 && days < 200) {
        imageElement.src = giga;
        body.style.backgroundImage = 'url("background/roke.jpg")';
    }
}

function editTimer() {
    const days = parseInt(document.getElementById("daysInput").value) || 0;
    const hours = parseInt(document.getElementById("hoursInput").value) || 0;
    const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    const seconds = parseInt(document.getElementById("secondsInput").value) || 0;

    const totalMilliseconds = ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds) * 1000;

    startTime = new Date().getTime() - totalMilliseconds;
    localStorage.setItem('startTime', startTime);

    if (!timerInterval) {
        startTimer();
    }
}

document.getElementById("startButton").addEventListener("click", () => {
    if (!timerInterval) {
        startTimer();
    }
});

document.getElementById("editButton").addEventListener("click", editTimer);

if (startTime) {
    startTimer();
}
