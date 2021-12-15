const requestURL = "js/board.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const business = jsonObject['board'];
        business.forEach((board, index, array) => { //forEach is replacing the for loop

        //for (let i = 0; i < prophets.length; i++) {
            let boardList = document.createElement('li');
            boardList.setAttribute('class','board-li-item');
            let card = document.createElement('div');
            card.setAttribute('class','board-li-div');
            let name = document.createElement('h4');
            name.setAttribute('class','board-li-h2');
            let title = document.createElement('p');
            title.setAttribute('class','board-p');

            name.textContent = array[index].name;
            title.textContent = array[index].title;

            boardList.appendChild(card);
            card.appendChild(name);
            card.appendChild(title);
            document.querySelector('#board-chart').appendChild(boardList);
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




 