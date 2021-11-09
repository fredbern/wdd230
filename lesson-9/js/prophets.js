

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach((prophets, index, array) => { //forEach is replacing the for loop
            debugger;

        //for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let span = document.createElement('span');
            let dateOfBirth = document.createElement('p');
            let placeOfBirth = document.createElement('p');
            let image = document.createElement('img');
            image.setAttribute('data-src', array[index].imageurl);
            image.setAttribute('src', 'images/placeholder.jpg');
            image.setAttribute('alt', array[index].name + ' ' + array[index].lastname);
        

            //set my classes for my css
            card.setAttribute('class', "section");
            h2.setAttribute('class', 'section-h2');
            span.setAttribute('class', 'title');
            dateOfBirth.setAttribute('class', 'section-dateOfBirth');
            placeOfBirth.setAttribute('class', 'section-placeOfBirth');
            image.setAttribute('class', 'section-image');
            



            h2.textContent = array[index].name + ' ' + array[index].lastname;
            dateOfBirth.textContent = 'Date of Birth: ' + array[index].birthdate;
            placeOfBirth.textContent = 'Place of Birth: ' + array[index].birthplace;


            card.appendChild(h2);
            card.appendChild(dateOfBirth);
            card.appendChild(placeOfBirth);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        //} //end of the for loor
        }); //end of the forEach



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
    imagesToLoad.forEach( (img) => {
        loadImages(img);
    });
}

});
 