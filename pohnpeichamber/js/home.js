const requestURL = 'js/events.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
    console.log(response);
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const events = jsonObject['events'];
    console.table(events);
    let div = document.querySelector('.left-events');


    events.forEach((events) => {
      let event = document.createElement('h4');
      let date = document.createElement('p');
      let location = document.createElement('p');
      event.textContent = `${events.event}`;
      date.textContent = `Date: ${events.date}`;
      location.textContent = `Location: ${events.location}`;
      div.appendChild(event);
      div.appendChild(date);
      div.appendChild(location);
    })

  });
const weatherday = new Date();

const todayDayNumber = weatherday.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wedmesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


const apiURL1 = "//api.openweathermap.org/data/2.5/forecast?lat=6.963148&&lon=158.208125&appid=2575ea045602d11c8df33df377028fad";

const apiURL0 = "//api.openweathermap.org/data/2.5/weather?lat=6.963148&lon=158.208125&appid=2575ea045602d11c8df33df377028fad";
fetch(apiURL0)
  .then((response) => response.json())
  .then((onedayInfo) => {
    console.log(onedayInfo);
    console.log(onedayInfo.main.temp);
    console.log(onedayInfo.weather[0].description);
    console.log(onedayInfo.wind.humidity);
    

    let code = onedayInfo.weather[0].icon;
    let path = "//openweathermap.org/img/w/" + code + ".png";
    let icon = document.createElement("img");
    icon.setAttribute('class','weather-oneday-img');
    icon.src = path;
    icon.innerHTML = `${icon.setAttribute('alt', onedayInfo.weather[0].description)}`;

    let image = document.getElementById
    //let temp = document.getElementById('temp').textContent = onedayInfo.main.temp;
    //let speed = document.getElementById('speed').textContent = onedayInfo.wind.speed;
    let oneday = document.createElement('div');
    oneday.setAttribute('class','weather-oneday-info');
    let temp = document.createElement('p');
    let condition = document.createElement('p');
    let humidity = document.createElement('p');

    temp.innerText = `Temperature: ${onedayInfo.main.temp}\xB0`;
    condition.innerText = `Condition: ${onedayInfo.weather[0].description}`;
    humidity.innerText = `Humidity: ${onedayInfo.main.humidity}\xB0`;

    oneday.appendChild(temp);
    oneday.appendChild(condition);
    oneday.appendChild(humidity);
    document.getElementById("weather-info-oneday").appendChild(icon);
    document.getElementById("weather-info-oneday").appendChild(oneday);
    

  });

fetch(apiURL1)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
      let time = mylist[i].dt_txt;

      if (time.includes("18:00:00")) {

        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0
        }

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");

        theIcon.src = iconPath;
        theIcon.innerHTML = `${theIcon.setAttribute('alt', weatherInfo.list[i].weather[0].description)}`;

        let theDayName = document.createElement("h3");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = +weatherInfo.list[i].main.temp + "\xB0";

        let div = document.createElement("div");
        div.setAttribute('class','three-days-child');
        div.appendChild(theDayName);
        div.appendChild(theTemp);
        div.appendChild(theIcon);


      document.getElementById("three-days-weather").appendChild(div);

      }

    }
  });