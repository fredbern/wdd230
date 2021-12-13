function toggleMenu() {
    //console.log(document.getElementById("primaryNav").classList("open"));
    console.log('It Worked!');
    const m = document.getElementsByClassName("close");
    document.getElementById("primaryNav").classList.toggle("open");
  }
  const open = document.getElementById('menuBtn');
  const close = document.getElementById('menuBtn1');

  open.onclick = toggleMenu;
  close.onclick = toggleMenu;
