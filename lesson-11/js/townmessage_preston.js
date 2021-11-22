const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        towns.forEach((towns, index, array) => {
            const messageHeading = "Upcoming Events";
            const motto = `${array[index].motto}`;

            console.log(townName);

            if (townName != "Preston") {
                let card = document.createElement('div');
                card.setAttribute('class', 'event');
                

                let h2 = document.createElement('h2');
                h2.setAttribute('class', 'event-h2');
                h2.innerText = messageHeading;

                let hr = document.createElement('hr');
                
                towns.forEach((towns, index, array)=> {
                    const eventDate = document.createElement('p');
                    eventDate.setAttribute('class', 'event-p');
                    eventDate.
                })

                div.appendChild(h2);
                document.querySelector('div.event').appendChild(card);

            };
        });

    });
