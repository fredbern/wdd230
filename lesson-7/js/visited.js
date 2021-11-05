let todayDate = Date.now();
localStorage.setItem("lastDate", todayDate);
let lastDate = localStorage.getItem("lastDate");
let lastVisit = ((todayDate - Date.now())/8640000).toFixed(10);
console.log(todayDate);
console.log(lastVisit);
if (lastVisit < 1 ) {
    document.getElementById('date').innerHTML = `Today is your first visit to this website.`;
} else {
    if (lastVisit == 1){
        document.getElementById('date').innerHTML = `Thank you for visiting us again. Yesterday was you last visit.`;
    } else {
        document.getElementById('date').innerHTML = `Thank you for visiting us again. Your last visit was ${lastVisit} days ago.`;
    }
}