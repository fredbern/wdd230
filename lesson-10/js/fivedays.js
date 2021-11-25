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


const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=79c66cddcbc0ca13f6645125edf877d6&units=imperial";
const apiURL0 = "//api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2575ea045602d11c8df33df377028fad&units=imperial";

  fetch(apiURL0)
    .then((response)=>response.json())
    .then((onedayInfo)=>{
        console.log(onedayInfo);
        console.log(onedayInfo.main.temp);
        console.log(onedayInfo.wind.speed);

        let temp = document.getElementById('temp').textContent = onedayInfo.main.temp;
        let speed = document.getElementById('speed').textContent = onedayInfo.wind.speed;

    
    });

  fetch(apiURL)
    .then((response)=>response.json())
    .then((weatherInfo)=>{
      console.log(weatherInfo);
  
      let mylist=weatherInfo.list;
  
          let forecastDayNumber = todayDayNumber;
  
          for (i=0;i<mylist.length;i++) {
                let time = mylist[i].dt_txt;
  
                if(time.includes("18:00:00")){

                  forecastDayNumber += 1;
                  if(forecastDayNumber===7){forecastDayNumber=0}
  
                  let iconcode = weatherInfo.list[i].weather[0].icon;
                  let iconPath = "//openweathermap.org/img/w/" +iconcode+ ".png";
                  let theIcon = document.createElement("img");
                  theIcon.setAttribute('class','forecast-img');
                  theIcon.src = iconPath;
                  theIcon.innerHTML= `${theIcon.setAttribute('alt', weatherInfo.list[i].weather[0].description)}`;
  
                  let theDayName = document.createElement("h5");
                  theDayName.textContent = weekday[forecastDayNumber];
  
                  let theTemp = document.createElement("p");
                  theTemp.textContent = +weatherInfo.list[i].main.temp+"\xB0";
  
                  let div = document.createElement("div");
                  div.appendChild(theDayName);
                  div.appendChild(theIcon);
                  div.appendChild(theTemp);
                  
  
                  document.getElementById("forecast").appendChild(div);
  
                }
                
          }
    });

  
  
