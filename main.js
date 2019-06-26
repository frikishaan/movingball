const digit = document.getElementById('digit');
const circle = document.getElementById('circle');
const label = document.getElementById('label');
const help = document.getElementById('help');

function moveRight() {
    let r = getCssProperty(circle, 'right');
    console.log(r);

    circle.style.left = '85%';
    setTimeout(() => {
        circle.style.left = '50%';
    }, 1000);

}

function moveLeft() {
    let l = getCssProperty(circle, 'left');
    console.log(l);

    circle.style.left = '15%';
    setTimeout(() => {
        circle.style.left = '50%';
    }, 1000);

}

function moveTop() {
    let t = getCssProperty(circle, 'top');
    console.log(t);

    circle.style.top = '10%';
    setTimeout(() => {
        circle.style.top = '50%';
    }, 1000);

}

function moveBottom() {
    let b = getCssProperty(circle, 'top');
    console.log(b);

    circle.style.top = '90%';
    setTimeout(() => {
        circle.style.top = '50%';
    }, 1000);

}

function transformCircle(i) {
    digit.innerHTML = i;
    circle.style.transform = 'scale(' + i + ')';
    setTimeout(() => {
        circle.style.transform = 'scale(1)';
    }, 1500);
}

function getCssProperty(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

const options = { probabilityThreshold: 0.95 };
const classifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);

function modelReady() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('#main').style.display = 'block';
    console.log('Model ready..!!');
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        M.toast({ html: 'Some Error has occurred..!!', classes: 'red darken-2' });
        console.log(error);
        return;
    }
    moveCircle(results[0].label);
    console.log(results[0].label);
}

function moveCircle(pos) {

    label.innerHTML = pos;

    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if (pos === 'up') {
        moveTop();
    }
    else if (pos === 'down') {
        moveBottom();
    }
    else if (pos === 'right') {
        moveRight();
    }
    else if (pos === 'left') {
        moveLeft();
    }
    else if (numbers.includes(pos)) {
        transformCircle(numbers.indexOf(pos));
    }

    return;
}

// M.toast({ html: 'Some Error has occurred..!!', classes: 'red darken-2' })
document.addEventListener('DOMContentLoaded', function () {

    var Modalelem = document.querySelector('#modal1');
    var instance = M.Modal.init(Modalelem);
    instance.open();

    var elems = document.querySelector('#about_modal');
    var instances = M.Modal.init(elems, options);

    help.addEventListener('click', function () {
        instance.open();
    });
});