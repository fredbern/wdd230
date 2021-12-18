const btn = document.getElementById('button');

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

const rainbow = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];


const div = 50;

const id = [];
for (let i = 1; i <= div; i++) {
    id.push(i);
}
console.log(id);

const idlength = id.length;



const maindiv = document.createElement('div');
maindiv.setAttribute('class','container');
document.getElementById('main').appendChild(maindiv);

for (let start = 0; start < idlength; start++) {
    let light = document.createElement('div');
    light.setAttribute('class','children');
    light.setAttribute('id', id[start]);
    maindiv.appendChild(light);
}
    

 function changebutton() {
    const numid = id[Math.floor(id.length * Math.random())];
    const choose = rainbow[Math.floor(7 * Math.random())];
    const chooseshadow = `0 0 ${one} ${choose}, 0 0 ${two} ${choose},0 0 ${three} ${choose}`;

    document.getElementById('button').style.boxShadow = chooseshadow;
    document.getElementById('button').style.textShadow = chooseshadow;

}
function change() {
    const numid = id[Math.floor(id.length * Math.random())];
    const choose = rainbow[Math.floor(7 * Math.random())];
    const chooseshadow = `0 0 ${one} ${choose}, 0 0 ${two} ${choose},0 0 ${three} ${choose}, 0 0 ${four} ${choose}
    , 0 0 ${five} ${choose}, 0 0 ${six} ${choose}, 0 0 ${seven} ${choose}
    , 0 0 ${eight} ${choose}, 0 0 ${nine} ${choose}, 0 0 ${ten} ${choose}`;

    document.getElementById(`${numid}`).style.boxShadow = chooseshadow;

    document.getElementById(`${numid}`).style.backgroundColor = rainbow[Math.floor(7 * Math.random())];

}

function gofunction() {


    for (let i = 0; i < 10000; i++) {
        task(i);     
    }

    function task(i) {
        setTimeout(function () {
            console.log(i);
            change()
        }, 100 * i);
    }

    for (let h = 0; h < 10; h++) {
        task2(h);     
    }

    function task2(h) {
        setTimeout(function () {
            console.log(h);
            changebutton()
        }, 1000 * h);
    }

    
};



