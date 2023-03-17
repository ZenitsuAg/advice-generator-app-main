// Making the body element equal to the viewport height.

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // Same script as before but each time the page is resized, the page ajusts itself :)
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


const adviceID = document.querySelector('.advice-ID')
const adviceText = document.querySelector('.advice-text')

const dice = document.querySelector('.icon-container')
const url = `https://api.adviceslip.com/advice`
// Using the Fetch API to get the advice
dice.addEventListener('click', () => {

    adviceID.textContent = `Advice #`;
    adviceText.textContent = '';
    fetch(url, { method: 'GET', mode: 'cors', cache: 'no-cache' }) 

    .then((response) => {

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })

    .then((obj) => {
        adviceID.textContent += obj.slip.id;
        adviceText.textContent += `"${obj.slip.advice}"`;
    })
})