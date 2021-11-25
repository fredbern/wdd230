const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
        console.log(response);
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        const preston = towns[6];
        console.table(preston);
        const events = preston['events']
        let div = document.querySelector('.townMessage');
        let hr = document.createElement('hr');
        div.appendChild(hr);

        
        events.forEach((events) => {
            console.log(events);
            let eventP = document.createElement('p');
            eventP.textContent = `${events}`;
            div.appendChild(eventP);
        })

    });
