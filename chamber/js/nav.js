function toggleMenu() {
    //console.log(document.getElementById("primaryNav").classList("open"));
    console.log('It Worked!');
    const m = document.getElementsByClassName("close");
    document.getElementById("primaryNav").classList.toggle("open");
  }
  const open = document.getElementById('menuBtn');
  open.onclick = toggleMenu;