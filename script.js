let weather = {
    "apiKey":  "2fa3632a18c4c238430a10c3e2e134b7", //api Key
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
            "&units=metric&lang=ro&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const {speed } = data.wind;
        document.querySelector("#initoras").innerText = "Vremea in " + name;
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector("#grd").innerText = temp.toFixed(0) + "°C"; 
        document.querySelector("#description").innerText = description;
        document.querySelector("#humidity").innerText = "Umiditate: " + humidity + "%";
        document.querySelector("#wind").innerText = "Vant: " + speed + "km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector("#input").value);
    }
};

document.querySelector("#btn").addEventListener("click", function () {
    weather.search();
})


document.querySelector("#input").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

const timeEl = document.querySelector('#time');
const dateEl = document.querySelector('#date');
const days = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
const months = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval( () => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hours12format = hour >= 13? hour %12: hour;
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM';
    
    timeEl.innerHTML = hours12format + ':' + minutes + '' + `<span id="am-pm">${ampm}</span>`;
    dateEl.innerHTML = days[day] + ', ' +date+' '+months[month];

}, 1000);
