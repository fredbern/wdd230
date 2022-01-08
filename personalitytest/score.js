function test() {
const e = document.getElementById("0");
const f = document.getElementById("1");
const ev = parseFloat(e.value);
const fv = parseFloat(f.value);
if (e.value!="" && f.value!=""){
console.log(ev+fv);
const sum = ev+fv;
document.getElementById('score').innerText = sum;
}
}
