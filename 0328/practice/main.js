const root = document.querySelector("#root");

const mainElFirst = `<div class= "main">`;
const mainElLast = `</div>`;

const titleElFirst = `<div class="title">`;
const titleElLast = `</div>`;

const ulElFirst = `<ul>`;
const ulElLast = `</ul>`;

const liElFirst = `<li>`;
const liElLast = `</li>`;

const titleContent = `리액트를 잘하려면?`;
const howToMasterReact = [`자바스크립트를 잘해야 한다`, `CSS를 잘해야 한다`, `HTML을 잘해야 한다.`];

const liArray = howToMasterReact.map((v, i) => {
    return `${liElFirst}${i + 1}. ${v}${liElLast}`;
});

console.log(...liArray); //스프레드: 배열이 하나의 텍스트로 출력

root.innerHTML = mainElFirst + titleElFirst + titleContent + titleElLast + ulElFirst + liArray;
ulElLast + mainElLast;
