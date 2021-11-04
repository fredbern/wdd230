let date = Date.now();
localStorage.setItem("lastDate", date);
let lastDate = localStorage.getItem("lastDate");
let lastVisit = ((Date.now() - lastDate)/86400).toFixed(0);
console.log(lastVisit);
console.log(Date.now());
if (lastVisit < 1 ) {
    document.getElementById('date').innerHTML = `Today is your first visit to this website.`;
} else {
    if (lastVisit == 1){
        document.getElementById('date').innerHTML = `Thank you for visiting us again. Yesterday was you last visit.`;
    } else {
        document.getElementById('date').innerHTML = `Thank you for visiting us again. Your last visit was ${lastVisit} days ago.`;
    }
}
