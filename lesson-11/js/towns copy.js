const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        towns.forEach((towns, index, array) => {

            const townName = `${array[index].name}`;
            const motto = `${array[index].motto}`;
            const yFound = `Year Found: ${array[index].yearFounded} `;
            const population = `Population: ${array[index].currentPopulation} `;
            const annualRainFall = `AnnualRainFall: ${array[index].averageRainfall} `;

            console.log(townName);

            if (townName == "Soda Springs" || townName == "Fish Haven" || townName == "Preston") {
                let card = document.createElement('section');
                card.setAttribute('class', 'section-town');
                let div = document.createElement('div');
                div.setAttribute('class','section-div');
                let h2 = document.createElement('h2');
                h2.setAttribute('class', 'section-h2');
                h2.innerText = townName;
                let p1 = document.createElement('p');
                p1.setAttribute('class', 'section-first-line');
                p1.innerText = motto;
                let yearFound = document.createElement('p');
                yearFound.setAttribute('class', 'section-other-lines');
                yearFound.innerText = yFound;
                let Ppopulation = document.createElement('p');
                Ppopulation.setAttribute('class', 'section-other-lines');
                Ppopulation.innerText = population;
                let PannualRainFall = document.createElement('p');
                PannualRainFall.setAttribute('class', 'section-other-lines');
                PannualRainFall.innerText = annualRainFall;
                let image = document.createElement('img');
                image.setAttribute('data-src', `images/${array[index].photo}`);
                image.setAttribute('src', 'images/town_place_holder.jpg');
                image.setAttribute('alt', array[index].name);
                image.setAttribute('class','section-img');

                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(yearFound);
                div.appendChild(Ppopulation);
                div.appendChild(PannualRainFall);
                card.appendChild(div);
                card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);

            };
        });

        const imagesToLoad = document.querySelectorAll('img[data-src]');

        const loadImages = (image) => {
            image.setAttribute('src', image.getAttribute('data-src'));
            image.onload = () => {
                image.removeAttribute('data-src');
            };
        };

        const imgOptions = {
            threshold: 1
        };
        //if this is true
        if ('IntersectionObserver' in window) {
            // is supported so let's go!!!
            const imgObserver = new IntersectionObserver((items) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        loadImages(item.target);
                        imgObserver.unobserve(item.target);
                    }
                });
            }, imgOptions);

            // load image if necessary
            imagesToLoad.forEach((img) => {
                imgObserver.observe(img);
            });
        } else { //just load all images if not supported
            imagesToLoad.forEach((img) => {
                loadImages(img);
            });
        }
    });
