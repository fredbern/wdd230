//message.......

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {year:'numeric'}
document.getElementById('thisYear').textContent = new Date().toLocaleDateString('en-US', options)
document.getElementById('publishDate').textContent = new Date().toLocaleDateString('en-US', options)

const today = new Date();
const todayNumber = today.getDay(); 

const element = document.getElementById("message");
if (todayNumber == 0) {
    element.classList.add("shome");
} else {
    element.classList.add("hideme");
};


