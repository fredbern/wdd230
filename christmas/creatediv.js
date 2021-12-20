const btn = document.getElementById('button');
//box shadow starts here
const boxshadow = ['10px','20px','30px','40px','50px','60px','70px','80px','90px','100px'];
const one = boxshadow[0];
const two = boxshadow[1];
const three = boxshadow[2];
const four = boxshadow[3];
const five = boxshadow[4];
const six = boxshadow[5];
const seven = boxshadow[6];
const eight = boxshadow[7];
const nine = boxshadow[8];
const ten = boxshadow[9];
//box shadow ends here

//color list
const rainbow = ['black', 'white', 'red', 'black', 'orange', 'black', 'yellow', 'black', 'green', 'black', 'blue', 'rebeccapurple', 'violet'];
const abc = ['A','B','C','D','E','F','G','H','I','J','G','K','L','M','N','O','P','Q','R']

const div = 18; //input number of divs that will be used in the 'for (let start = 0; start < idlength; start++)'....
const id = []; //blank id list
//for loop to create id list
for (let i = 1; i <= div; i++) {
    id.push(i);
}
console.log(`list: ${id}`); // this will display the list in the devtool
console.log(`lengt: ${id.length}`) // this will display the list in the devtool
const idlength = id.length; //find the lenght of the list


const maindiv = document.createElement('div'); //create container div that contains small divs
maindiv.setAttribute('class','container');     //assign container div with a class call 'container'
maindiv.setAttribute('id','container');       //assign container div with a id call 'container'
document.getElementById('main').appendChild(maindiv); //call div id of 'main' in the html, add the container div to it


// this for loop taking the length of the id list and create small divs
for (let start = 0; start < idlength; start++) { 
    let light = document.createElement('div'); // create divs
    light.setAttribute('class','children'); // assign each div with the same class of childres
    light.setAttribute('id', id[start]); // assign each div with different ids
    let letter = document.createElement('h1');
    letter.setAttribute('class','abc');
    letter.setAttribute('id',abc[start]);
    light.appendChild(letter);
    maindiv.appendChild(light); 
}
    
// 'change()' is to change the small divs backgrounds and shadows
function change() {
    const abcId = abc[Math.floor(abc.length * Math.random())];
    const numid = id[Math.floor(id.length * Math.random())];
    const choose = rainbow[Math.floor(7 * Math.random())];
    const chooseshadow = `0 0 ${one} ${choose}, 0 0 ${two} ${choose},0 0 ${three} ${choose}, 0 0 ${four} ${choose}
    , 0 0 ${five} ${choose}, 0 0 ${six} ${choose}, 0 0 ${seven} ${choose}
    , 0 0 ${eight} ${choose}, 0 0 ${nine} ${choose}, 0 0 ${ten} ${choose}`;

    document.getElementById(`${numid}`).style.boxShadow = chooseshadow;

    document.getElementById(`${numid}`).style.backgroundColor = rainbow[Math.floor(7 * Math.random())];

    document.getElementById(`${abcId}`).innerHTML = abc[Math.floor(abc.length * Math.random())];

}

function letter() {
    const abcId = abc[Math.floor(abc.length * Math.random())];
    const numid = id[Math.floor(id.length * Math.random())];
    const choose = rainbow[Math.floor(7 * Math.random())];
    const chooseshadow = `0 0 ${one} ${choose}, 0 0 ${two} ${choose},0 0 ${three} ${choose}, 0 0 ${four} ${choose}
    , 0 0 ${five} ${choose}, 0 0 ${six} ${choose}, 0 0 ${seven} ${choose}
    , 0 0 ${eight} ${choose}, 0 0 ${nine} ${choose}, 0 0 ${ten} ${choose}`;

    document.getElementById(`${abcId}`).innerHTML = abc[Math.floor(abc.length * Math.random())];

}

// 'changebutton()' is to change the border of the button and the container div.
function changebutton() {
    const container = document.getElementById('container'); 
    const numid = id[Math.floor(id.length * Math.random())]; 
    const choose = rainbow[Math.floor(7 * Math.random())]; 
    const chooseshadow = `0 0 ${one} ${choose}, 0 0 ${two} ${choose},0 0 ${three} ${choose}`;

    document.getElementById('button').style.boxShadow = chooseshadow; //apply shadows to button
    document.getElementById('button').style.textShadow = chooseshadow; //apply tex-shadows to button
    document.getElementById('container').style.boxShadow = chooseshadow; //apply shadows to container div

}
// once the button, this function is activated
function gofunction() {

    // loop for calling the 'change()' function multiple times
    for (let i = 0; i < 1000; i++) {
        task(i);     
    }
    function task(i) {
        setTimeout(function () {
            console.log(i);
            change() // calling the 'change()'
        }, 100 * i);
    }

    // loop for calling the 'changebutton()' function multiple times
    for (let h = 0; h < 10; h++) {
        task2(h);     
    }

    function task2(h) {
        setTimeout(function () {
            console.log(h);
            changebutton() // call 'changebutton()' function
        }, 1000 * h);
    }



    
};



