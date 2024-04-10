const button = document.querySelector('.container__button');
const boxContainer = document.querySelector('.container__boxContainer');

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function randomCircle(element) {
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');
    circleDiv.style.backgroundColor = randomColor();
    circleDiv.style.left = `${Math.floor(Math.random() * (800 - 50))}px`;
    circleDiv.style.top = `${Math.floor(Math.random() * (400 - 50))}px`;

    element.appendChild(circleDiv);
}

button.addEventListener('click', (e) => {
    randomCircle(boxContainer);
});
