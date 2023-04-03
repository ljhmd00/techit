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

let isLoading = false;

async function onClickSearch() {
    const searchInput = document.querySelector(".searchInput");
    const searchResult = document.querySelector(".searchResult");

    if (!searchInput.value) return;
    if (isLoading) return;

    isLoading = true;

    const question = searchInput.value;
    searchInput.value = "검색 중 입니다... 잠시만 기다려 주세요.";

    //frontend -> backend //await - async
    const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
            question,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer BLOCKCHAINSCHOOL3", //인증
            },
        }
    );

    if (response.status == 200) {
        searchResult.style.display = "inline";
        searchResult.innerText = response.data.choices[0].message.content;
    }
    searchInput.value = "";
    isLoading = false;
}

function onClickToggle(value) {
    const nft = document.querySelector(".nft");
    const nftView = document.querySelector(".nftView");

    if (value) {
        nft.style.display = "inline-block";
        nftView.style.display = "none";
    } else {
        nft.style.display = "none";
        nftView.style.display = "inline-block";
    }
}
