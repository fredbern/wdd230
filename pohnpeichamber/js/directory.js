const requestURL = "js/directory.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
        business.forEach((business, index, array) => { //forEach is replacing the for loop
            debugger;

        //for (let i = 0; i < prophets.length; i++) {
            let olItem = document.createElement('li');
            olItem.setAttribute('class','li');
            let card = document.createElement('div');
            card.setAttribute('class','card-list');
            let name = document.createElement('h3');
            name.setAttribute('class','h3');
            let telephone = document.createElement('p');
            telephone.setAttribute('class','directory-p');
            let location = document.createElement('p');
            location.setAttribute('class','directory-p');

            name.textContent = array[index].name;
            telephone.textContent = `Phone: ${array[index].Phone}`;
            location.textContent = `Location: ${array[index].location}`;


            olItem.appendChild(card);
            card.appendChild(name);
            card.appendChild(telephone);
            card.appendChild(location);
            document.querySelector('#mylist').appendChild(olItem);
        //} //end of the for loop
        }); //end of the forEach

});


function toggle() {
    //console.log(document.getElementById("primaryNav").classList("open"));
    console.log('It Worked!');
    document.getElementById("mylist").classList.toggle("flex");
    document.getElementById("list").classList.toggle("change");
    document.getElementById("grid").classList.toggle("change");
  }

function listMenu() {
    //console.log(document.getElementById("primaryNav").classList("open"));
    console.log('It Worked!');
    document.getElementById("mylist").classList.toggle("flex");
    document.getElementById("list").classList.toggle("change");
    document.getElementById("grid").classList.toggle("change");
  }
const y = document.getElementById('grid');

y.onclick = toggle;
y.onclick = listMenu;




 