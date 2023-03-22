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
