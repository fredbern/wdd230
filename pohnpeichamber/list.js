
function toggleMenu() {
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

y.onclick = toggleMenu;
y.onclick = listMenu;



