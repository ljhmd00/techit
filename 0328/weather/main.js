const API_KEY = "fc957d48ece79985167c85dd31966207";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //&units=metric =>섭씨로 온도 받아옴

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                weatherTemp.innerText = data.name + ", " + parseInt(data.main.temp) + "℃";
                weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            });
        console.log(url);
    },
    () => alert("Not allowed!")
);
