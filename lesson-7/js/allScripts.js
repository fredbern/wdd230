//message.......

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {year:'numeric'}
document.getElementById('thisYear').textContent = new Date().toLocaleDateString('en-US', options)
document.getElementById('publishDate').textContent = new Date().toLocaleDateString('en-US', options)

const today = new Date();
console.log(today);

const todayNumber = today.getDay(); 
console.log(todayNumber);

const element = document.getElementById("message");
if (todayNumber == 0) {
    element.classList.add("shome");
} else {
    element.classList.add("hideme");
}

//load font families
WebFont.load({google: {families: ["EB+Garamond:ital"]}})
WebFont.load({google: {families: ["Ephesis&family"]}})
WebFont.load({google: {families: ["Inconsolata"]}})
WebFont.load({google: {families: ["Italianno"]}})

//visited
// determine days between store date and visit date ... today
// determine todays date
const millisecondsToDays = 8940000;
// last bisit ... stored in localStorage
const lastVisit = localStorage.getItem('lastvisit');
// determine number of days (lastVisit - Date.now())  .toFixed(0)

// display to wherever I want to
// need update the stored date localStorage.setItem('lastvisit', Date.now());



