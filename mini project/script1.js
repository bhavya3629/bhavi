var j = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var score = 0;
var count = 0;
const start_btn = document.querySelector(".start button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const quiz_box1 = document.querySelector(".quiz_box1");
const quiz_box2 = document.querySelector(".quiz_box2");
const resultbox = document.querySelector(".result_box");
const restart_button = document.querySelector(".buttons .restart1");
const quit_button = document.querySelector(".buttons .quit1");
const option_1 = document.querySelector(".option_list0  .option01");
const option_2 = document.querySelector(".option_list0  .option02");
const option_3 = document.querySelector(".option_list0  .option03");
const option_11 = document.querySelector(".option_list1  .option11");
const option_12 = document.querySelector(".option_list1  .option12");
const option_13 = document.querySelector(".option_list1  .option13");
const option_21 = document.querySelector(".option_list2  .option21");
const option_22 = document.querySelector(".option_list2  .option22");
const option_23 = document.querySelector(".option_list2  .option23");
const option_24 = document.querySelector(".option_list2  .option24");
const timeCount = quiz_box.querySelector(".timer         .timer_sec");
const timeCount1 = quiz_box1.querySelector(".timer         .timer_sec");
const timeCount2 = quiz_box2.querySelector(".timer         .timer_sec");
const timeLine2 = quiz_box2.querySelector("header      .time_line");
const timeLine1 = quiz_box1.querySelector("header        .time_line");
const timeLine = quiz_box.querySelector("header      .time_line");
const r = document.querySelector(".result_box .s .result");
r.onclick = () => {

    location.href = "score.html";
}
let counter, counter1, counter2;
let timeValue = 15;
let widthValue = 0;
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}
function startTimer1(time) {
    counter1 = setInterval(timer, 1000);
    function timer() {
        timeCount1.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount1.textContent;
            timeCount1.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter1);
            timeCount1.textContent = "00";
        }
    }
}
function startTimer2(time) {
    counter2 = setInterval(timer, 1000);
    function timer() {
        timeCount2.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount2.textContent;
            timeCount2.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter2);
            timeCount2.textContent = "00";
        }
    }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}
function startTimerLine1(time) {
    counterLine1 = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine1.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine1);
        }
    }
}
function startTimerLine2(time) {
    counterLine2 = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine2.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine2);
        }
    }
}
function removediv() {
    document.querySelector(".start button").style.display = 'none';
}
start_btn.onclick = () => {
    document.body.style.backgroundColor = '#F08080';
    info_box.classList.add("activeInfo");
}
exit_btn.onclick = () => {
    document.body.style.backgroundColor = '#98Fb98';
    info_box.classList.remove("activeInfo");
    if (count == 1) {
        location.href = "index.html";
    }
}
continue_btn.onclick = () => {
    removediv();
    info_box.classList.remove("activeInfo");
    document.body.style.backgroundColor = '#F0E68C';
    quiz_box.classList.add("activeQuiz");
    startTimer(timeValue);
    startTimerLine(0);
}
restart_button.onclick = () => {
    resultbox.classList.remove("activeresult");
    document.body.style.backgroundColor = '#61892F';
    info_box.classList.add("activeInfo");
    startTimer(timeValue);
    startTimerLine(0);
    count = 1;
}
quit_button.onclick = () => {
    location.href = "index.html";
}

function cross() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
}
function change() {
    cross();
    document.body.style.backgroundColor = '#66CDAA';
    quiz_box1.classList.add("activeQuiz1");
    score = score + 20;
    startTimer1(timeValue);
    startTimerLine1(0);
    // clearInterval(counter1);
}
function change1() {
    cross();
    quiz_box1.classList.remove("activeQuiz1");
    document.body.style.backgroundColor = '#BC8F8F';
    quiz_box2.classList.add("activeQuiz2");
    score = score + 25;
    startTimer2(timeValue);
    startTimerLine2(0);
    option_21.onclick = () => {
        score = score + 30;
        change2();
    }
    option_22.onclick = () => {
        score = score + 20;
        change3();
    }
    option_23.onclick = () => {
        score = score + 20;
        change4();
    }
    option_24.onclick = () => {
        score = score + 20;
        change5();
    }
}
function change5() {
    document.body.style.backgroundColor = '#007bff';
    cross();
    quiz_box1.classList.remove("activeQuiz1");
    changeque3(j3);
}
function change4() {
    document.body.style.backgroundColor = '#007bff';
    cross();
    quiz_box1.classList.remove("activeQuiz1");
    changeque2(j2);
}
function change3() {

    document.body.style.backgroundColor = '#7370DB';
    cross();
    quiz_box1.classList.remove("activeQuiz1");
    changeque1(j1);
}
function change2() {

    document.body.style.backgroundColor = '#C38D9E';
    cross();
    quiz_box1.classList.remove("activeQuiz1");
    changeque(j);
}
function showresult() {
    quiz_box2.classList.remove("activeQuiz2");
    document.body.style.backgroundColor = '#D8C3A5';
    const elem = document.getElementsByClassName("score_text")[0];
    elem.getElementsByClassName("wer")[0].innerHTML = Math.ceil(score / 7);
    resultbox.classList.add("activeresult");
}

function showresult1() {
    quiz_box2.classList.remove("activeQuiz2");
    document.body.style.backgroundColor = '#D8C3A5';
    const elem = document.getElementsByClassName("score_text")[0];
    elem.getElementsByClassName("wer")[0].innerHTML = Math.ceil(score / 8);
    resultbox.classList.add("activeresult");
}
function changeque3(a3) {
    const elements = document.getElementsByClassName("quiz_box2")[0];
    if (a3 == 0) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What kind of a student are you?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Topper";
        e.getElementsByClassName("option22")[0].innerHTML = "Average student";
        e.getElementsByClassName("option23")[0].innerHTML = "Poor in studies";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '4';
        document.body.style.backgroundColor = '#BC986A';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j3 = j3 + 1;
        option_21.onclick = () => {
            score = score + 20;
            change5();
        }
        option_22.onclick = () => {
            score = score + 30;
            change5();
        }
        option_23.onclick = () => {
            score = score + 50;
            change5();
        }
        option_24.onclick = () => { change5(); }
    }
    else if (a3 == 1) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What is your problem?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Financial Issues";
        e.getElementsByClassName("option22")[0].innerHTML = "Stress about grades and marks";
        e.getElementsByClassName("option23")[0].style.display = 'flex';
        e.getElementsByClassName("option23")[0].innerHTML = "Parents,society pressure";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '5';
        document.body.style.backgroundColor = '#007bff';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j3 = j3 + 1;
        option_21.onclick = () => {
            score = score + 30;
            change5();
        }
        option_22.onclick = () => {
            score = score + 30;
            change5();
        }
        option_23.onclick = () => {
            score = score + 40;
            change5();
        }
        option_24.onclick = () => { change5(); }
    }
    else if (a3 == 2) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Are you emotionally weak now?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Yes";
        e.getElementsByClassName("option22")[0].innerHTML = "No";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '6';
        document.body.style.backgroundColor = '#053868';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j3 = j3 + 1;
        option_21.onclick = () => {
            score = score + 60;
            change5();
        }
        option_22.onclick = () => {
            score = score + 40;
            change5();
        }
        option_23.onclick = () => { change5(); }
        option_24.onclick = () => { change5(); }
    }
    else if (a3 == 3) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What thoughts are currently running in your mind?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Wanna end life";
        e.getElementsByClassName("option22")[0].innerHTML = "Want some motivation";
        e.getElementsByClassName("option23")[0].style.display = 'flex';
        e.getElementsByClassName("option23")[0].innerHTML = "Depressed,sad,anxious";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '7';
        document.body.style.backgroundColor = '#77A6F7';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        option_21.onclick = () => {
            score = score + 60;
            showresult();
        }
        option_22.onclick = () => {
            score = score + 10;
            showresult();
        }
        option_23.onclick = () => {
            score = score + 30;
            showresult();
        }

        option_24.onclick = () => { showresult(); }
    }
}
function changeque2(a2) {
    const elements = document.getElementsByClassName("quiz_box2")[0];
    if (a2 == 0) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What is your problem?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Not able to get a job";
        e.getElementsByClassName("option22")[0].innerHTML = "Work pressure,office politics";
        e.getElementsByClassName("option23")[0].innerHTML = "Pressure from parents";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '4';
        document.body.style.backgroundColor = '#BC986A';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j2 = j2 + 1;
        option_21.onclick = () => {
            score = score + 30;
            change4();
        }
        option_22.onclick = () => {
            score = score + 40;
            change4();
        }
        option_23.onclick = () => {
            score = score + 30;
            change4();
        }
        option_24.onclick = () => { change4(); }
    }
    else if (a2 == 1) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Did you feel like.. It's too much for me to handle?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Yes";
        e.getElementsByClassName("option22")[0].innerHTML = "No";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '5';
        document.body.style.backgroundColor = '#45A29E';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j2 = j2 + 1;
        option_21.onclick = () => {
            score = score + 50;
            change4();
        }
        option_22.onclick = () => {
            score = score + 50;
            change4();
        }
        option_23.onclick = () => { change4(); }
        option_24.onclick = () => { change4(); }
    }
    else if (a2 == 2) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Do you feel a lot of mental stress?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Yes";
        e.getElementsByClassName("option22")[0].innerHTML = "No";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '6';
        document.body.style.backgroundColor = '#053868';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j2 = j2 + 1;
        option_21.onclick = () => {
            score = score + 60;
            change4();
        }
        option_22.onclick = () => {
            score = score + 40;
            change4();
        }
        option_23.onclick = () => { change4(); }
        option_24.onclick = () => { change4(); }
    }
    else if (a2 == 3) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What is your Current emotional status?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Wanna quit job";
        e.getElementsByClassName("option22")[0].innerHTML = "Depressed,anxious and unable to handle myself";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '7';
        document.body.style.backgroundColor = '#77A6F7';
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        quiz_box2.classList.add("activeQuiz2");
        option_21.onclick = () => {
            score = score + 40;
            showresult();
        }
        option_22.onclick = () => {
            score = score + 60;
            showresult();
        }
        option_23.onclick = () => { showresult(); }
        option_24.onclick = () => { showresult(); }
    }
}
function changeque1(a1) {
    const elements = document.getElementsByClassName("quiz_box2")[0];
    if (a1 == 0) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What is the issue with your family?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Financial Problem";
        e.getElementsByClassName("option22")[0].innerHTML = "No one understands me";
        e.getElementsByClassName("option23")[0].innerHTML = "Fights in family";
        e.getElementsByClassName("option24")[0].innerHTML = "Parents Divorce";
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '4';
        document.body.style.backgroundColor = '#BC986A';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j1 = j1 + 1;
        option_21.onclick = () => {
            score = score + 30;
            change3();
        }
        option_22.onclick = () => {
            score = score + 20;
            change3();
        }
        option_23.onclick = () => {
            score = score + 20;
            change3();
        }
        option_24.onclick = () => {
            score = score + 30;
            change3();
        }
    }
    else if (a1 == 1) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Do you think you can sort this?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Yes";
        e.getElementsByClassName("option22")[0].innerHTML = "No";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '5';
        document.body.style.backgroundColor = '#45A29E';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j1 = j1 + 1;
        option_21.onclick = () => {
            score = score + 40;
            change3();
        }
        option_22.onclick = () => {
            score = score + 60;
            change3();
        }
        option_23.onclick = () => { change3(); }
        option_24.onclick = () => { change3(); }
    }
    else if (a1 == 3) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What thoughts are running in your mind currently?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Tired of this";
        e.getElementsByClassName("option22")[0].innerHTML = "Wanna end life,depressed";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '7';
        document.body.style.backgroundColor = '#D4A59A';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        option_21.onclick = () => {
            score = score + 40;
            showresult();
        }
        option_22.onclick = () => {
            score = score + 60;
            showresult();
        }
        option_23.onclick = () => { showresult(); }
        option_24.onclick = () => { showresult(); }
    }
    else if (a1 == 2) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What is your Current emotional status?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Heart Break";
        e.getElementsByClassName("option22")[0].innerHTML = "Crying for no reason,anxious";
        e.getElementsByClassName("option23")[0].style.display = 'flex';
        e.getElementsByClassName("option23")[0].innerHTML = "Trying to move on";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '6';
        document.body.style.backgroundColor = '#053868';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j1 = j1 + 1;
        option_21.onclick = () => {
            score = score + 40;
            change3();
        }
        option_22.onclick = () => {
            score = score + 40;
            change3();
        }
        option_23.onclick = () => {
            score = score + 20;
            change3();
        }
        option_24.onclick = () => { change3(); }
    }
}
function changeque(a) {
    const elements = document.getElementsByClassName("quiz_box2")[0];
    if (a == 0) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Whats the problem with your friend?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Feeling my presence is not valued";
        e.getElementsByClassName("option22")[0].innerHTML = "Back Stabing";
        e.getElementsByClassName("option23")[0].innerHTML = "Trust Issues";
        e.getElementsByClassName("option24")[0].innerHTML = "They are taking me for granted";
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '4';
        e1.getElementsByClassName("pqr")[0].innerHTML = '8';
        document.body.style.backgroundColor = '#BC986A';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j = j + 1;
        option_21.onclick = () => {
            score = score + 30;
            change2();
        }
        option_22.onclick = () => {
            score = score + 20;
            change2();
        }
        option_23.onclick = () => {
            score = score + 20;
            change2();
        }
        option_24.onclick = () => {
            score = score + 30;
            change2();
        }
    }
    else if (a == 1) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Do you want to sort it out?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Yes";
        e.getElementsByClassName("option22")[0].innerHTML = "No";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '5';
        e1.getElementsByClassName("pqr")[0].innerHTML = '8';
        document.body.style.backgroundColor = '#45A29E';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j = j + 1;
        option_21.onclick = () => {
            score = score + 50;
            change2();
        }
        option_22.onclick = () => {
            score = score + 50;
            change2();
        }
        option_23.onclick = () => { change2(); }
        option_24.onclick = () => { change2(); }
    }
    else if (a == 2) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "Is it disturbing and hurting you badly?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Yes";
        e.getElementsByClassName("option22")[0].innerHTML = "No";
        e.getElementsByClassName("option23")[0].style.display = 'none';
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '6';
        e1.getElementsByClassName("pqr")[0].innerHTML = '8';
        document.body.style.backgroundColor = '#053868';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j = j + 1;
        option_21.onclick = () => {
            score = score + 80;
            change2();
        }
        option_22.onclick = () => {
            score = score + 20;
            change2();
        }
        option_23.onclick = () => { change2(); }
        option_24.onclick = () => { change2(); }
    }
    else if (a == 3) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What is your Current emotional status?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Heart Break";
        e.getElementsByClassName("option22")[0].innerHTML = "Crying for no reason,anxious";
        e.getElementsByClassName("option23")[0].style.display = 'flex';
        e.getElementsByClassName("option23")[0].innerHTML = "Trying to move on";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '7';
        e1.getElementsByClassName("pqr")[0].innerHTML = '8';
        document.body.style.backgroundColor = '#D4A59A';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        j = j + 1;
        option_21.onclick = () => {
            score = score + 30;
            change2();
        }
        option_22.onclick = () => {
            score = score + 50;
            change2();
        }
        option_23.onclick = () => {
            score = score + 20;
            change2();
        }
        option_24.onclick = () => { change2(); }
    }
    else if (a == 4) {
        elements.getElementsByClassName("que_text2")[0].innerHTML = "What thoughts are you getting after this?";
        const e = elements.getElementsByClassName("option_list2")[0];
        e.getElementsByClassName("option21")[0].innerHTML = "Wanna break this friendship";
        e.getElementsByClassName("option22")[0].innerHTML = "I can't live without them";
        e.getElementsByClassName("option23")[0].style.display = 'flex';
        e.getElementsByClassName("option23")[0].innerHTML = "I will try again and again";
        e.getElementsByClassName("option24")[0].style.display = 'none';
        const e1 = elements.getElementsByClassName("total_que2")[0];
        e1.getElementsByClassName("abc")[0].innerHTML = '8';
        e1.getElementsByClassName("pqr")[0].innerHTML = '8';
        document.body.style.backgroundColor = '#77A6F7';
        quiz_box2.classList.add("activeQuiz2");
        clearInterval(counter2);
        startTimer2(timeValue);
        clearInterval(counterLine2);
        startTimerLine2(widthValue);
        option_21.onclick = () => {
            score = score + 30;
            showresult1();
        }
        option_22.onclick = () => {
            score = score + 40;
            showresult1();
        }
        option_23.onclick = () => {
            score = score + 30;
            showresult1();
        }
        option_24.onclick = () => { showresult1(); }
    }
};

option_1.onclick = () => {
    score = score + 50;
    change();
}
option_2.onclick = () => {
    score = score + 25;
    change();
}
option_3.onclick = () => {
    score = score + 25;
    change();
}
option_11.onclick = () => {
    score = score + 50;
    change1();
}
option_12.onclick = () => {
    score = score + 35;
    change1();
}
option_13.onclick = () => {
    score = score + 15;
    change1();
}