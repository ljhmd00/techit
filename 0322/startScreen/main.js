function getTime() {
    const time = document.querySelector(".time");
    const newDate = new Date();
    const hour = String(newDate.getHours()).padStart(2, 0);
    const minutes = String(newDate.getMinutes()).padStart(2, 0);
    const seconds = String(newDate.getSeconds()).padStart(2, 0); //padStart -> 두 글 자가 아니면 0을 붙여라

    // if (seconds.toString().length === 1) {
    //     seconds = "0" + seconds;
    // }

    // time.innerText = hour + ":" + minutes + ":" + seconds;
    time.innerText = `${hour}:${minutes}:${seconds}`;
}

// setInterval(() => {
//     getTime();
// }, 1000);

setInterval(getTime, 1000);

const QUOTES = "quotes";

function getQuotes() {
    let savedQuotes = localStorage.getItem(QUOTES);
    const quotesMsg = document.querySelector(".quotesMsg");

    if (!savedQuotes) {
        localStorage.setItem(QUOTES, JSON.stringify(["블", "체", "스"]));

        savedQuotes = localStorage.getItem(QUOTES);
    }
    let quotesArray = JSON.parse(savedQuotes);
    quotesMsg.innerText = quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
    const newQuotes = document.querySelector(".newQuotes");

    newQuotes.style.display = "inline-block";
}

function onClickRegist() {
    const newQuotes = document.querySelector(".newQuotes");
    const newQuotesInput = document.querySelector(".newQuotesInput");
    const quotesMsg = document.querySelector(".quotesMsg");

    if (!newQuotesInput.value) {
        alert("내용을 입력해주세요");
        return;
    }

    let savedQuotes = localStorage.getItem(QUOTES);
    let quotesArray = JSON.parse(savedQuotes);

    quotesArray.push(newQuotesInput.value);
    localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

    quotesMsg.innerText = newQuotesInput.value;
    newQuotes.style.display = "none";
}
