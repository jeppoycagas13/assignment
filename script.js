const container = document.querySelector('.container');
let opacity = 0;

function createFemaleDiv() {
    let div = document.createElement('div');
    div.classList.add('female');
    div.setAttribute('id', 'female');
    container.appendChild(div);

    //call fade in animation function with duration of 1 second
    fadeIn(div, 500);
}

function createHeadline1Div() {
    let div = document.createElement('div');
    div.classList.add('headline1');
    div.setAttribute('id', 'headline1');
    container.appendChild(div);

    //call slide to left animation function with duration of .15 second
    slideToLeft(div, 150)
}

function createHeadline2Div() {
    let div = document.createElement('div');
    div.classList.add('headline2');
    div.setAttribute('id', 'headline2');
    container.appendChild(div);

    slideToRight(div, 200);
}

function createSubHeadlineDiv() {
    let div = document.createElement('div');
    div.classList.add('subHeadline');
    div.setAttribute('id', 'subHeadline');
    container.appendChild(div);

    //call fade in animation function with duration of 1 second
    fadeIn(div, 500);
}

function createLearnMoreDiv() {
    let div = document.createElement('div');
    div.classList.add('learn-more');
    div.setAttribute('id', 'learnMore');
    container.appendChild(div);

    //call fade in animation function with duration of 1 second
    fadeIn(div, 500);
}

function createLogoDiv() {
    let div = document.createElement('div');
    div.classList.add('logo');
    div.setAttribute('id', 'logo');
    container.appendChild(div);

    //call slide to left animation function with duration of .15 second
    slideToLeft(div, 150)
}

function createReplayBtn() {
    let div = document.createElement('div');
    div.classList.add('replay');
    div.setAttribute('id', 'replay');
    container.appendChild(div);

    //call fade in animation function with duration of 1 second
    fadeIn(div, 500);
}

//function fade in effect
function fadeIn(element, duration) {
    let opacity = 0;
    const interval = setInterval(function () {
        opacity += 0.05; //increase opacity by 0.05 in each iteration
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(interval); //stop the interval when opacity reaches 1
        }
    }, duration / 20); //calculate interval based on total duration
}

//function to fade out effect
function fadeOut(element, duration) {
    let opacity = 1;
    const interval = setInterval(function () {
        opacity -= 0.05; //decrease opacity by 0.05 in each iteration
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(interval); //stop the interval when opacity reaches 0
        }
    }, duration / 20);
}

//function slide to left effect
function slideToLeft(element, duration) {
    let opacity = 0;
    let translateX = -100;
    const interval = setInterval(function () {
        opacity += 0.05; //increase opacity by 0.05 in each iteration
        translateX += 5; //increase its left position by 5 in each iteration
        element.style.opacity = opacity;
        element.style.transform = `translateX(${translateX}px)`;

        if (opacity >= 1) {
            clearInterval(interval); //stop the interval when opacity reaches 1
        }
    }, duration / 10); //calculate interval based on total duration
}

//function slide to right effect
function slideToRight(element, duration) {
    let opacity = 0;
    let translateX = 100;
    const interval = setInterval(function () {
        opacity += 0.05; //increase opacity by 0.05 in each iteration
        translateX -= 5; //decreases its left position by 5 in each iteration
        element.style.opacity = opacity;
        element.style.transform = `translateX(${translateX}px)`;

        if (opacity >= 1) {
            clearInterval(interval); //stop the interval when opacity reaches 1
        }
    }, duration / 10); //calculate interval based on total duration
}

// function to zoom-out effect
function zoomOut(element, duration) {
    let scale = 1;
    const interval = setInterval(function () {
        scale -= 0.05; //decrease scale by 0.05 in each iteration
        element.style.transform = `scale(${scale})`;

        if (scale <= 0) {
            clearInterval(interval); //stop the interval when opacity reaches 0
        }
    }, duration / 20);
}

//display and remove all divs by set timeout intervals with animation
function display() {
    //first element
    setTimeout(() => {
        createFemaleDiv();
    }, 2000);

    //second element
    setTimeout(() => {
        createHeadline1Div();
    }, 3000);

    //first element-woman is removed
    setTimeout(() => {
        const femaleDiv = document.getElementById('female');
        fadeOut(femaleDiv, 500)
    }, 4000);

    //final elements
    setTimeout(() => {
        // remove the div.woman from the container
        const femaleDiv = document.getElementById('female');
        if (femaleDiv && femaleDiv.parentNode) {
            femaleDiv.parentNode.removeChild(femaleDiv);
        }
        
        //add headline2
        createHeadline2Div();

        //zoom out second element-headline1
        setTimeout(() => {
            const headline1Div = document.getElementById('headline1');
            zoomOut(headline1Div, 400)
        }, 1000);

        setTimeout(() => {
            // remove the div.headline1 from the container 
            const headline1Div = document.getElementById('headline1');
            if (headline1Div && headline1Div.parentNode) {
                headline1Div.parentNode.removeChild(headline1Div);
            }

            //add sub headline
            createSubHeadlineDiv();

            //add learn more
            setTimeout(() => {
                createLearnMoreDiv(); 
            }, 1500);

            //add logo
            setTimeout(() => {
                createLogoDiv();
            }, 2000);

            //add replay button
            setTimeout(() => {
                createReplayBtn();
            }, 3000);

        }, 1500);
    }, 5000);

    //click event for the replay button using container parent element
    container.addEventListener('click', (event) => {
        if (event.target.id === 'replay') {
          resetAnimation();
        }
    });
}

//reset animation 
function resetAnimation() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // replay
    display();
}

display();