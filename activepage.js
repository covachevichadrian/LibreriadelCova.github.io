

/* let activePage;
let containers = document.querySelector(".sidenavnative > a");
/* containers.addEventListener("click", e=> {
    console.log(e)
    setTimeout(function(){
        activePage=window.location.hash;
        containers = document.querySelectorAll(".sidenavnative").forEach(link => {
            if(link.baseURI.includes(`${activePage}`)){
              link.classList.add('active');
              console.log(activePage);
            }
          })
    }, 50);
}) */ 

let btns = document.querySelectorAll(".sidenavnative > a");
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        let target = e.currentTarget;
        let active = document.querySelector(".sidenavnative .active");
        if(active)
            active.classList.remove("active");
        target.querySelector("span").classList.add("active")
    })
})