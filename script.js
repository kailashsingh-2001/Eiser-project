document.querySelector("#opennav").addEventListener("click", function () {
    let a = document.querySelector(".opencontainer");
    let b = document.querySelector("#closenav");
    let c=document.querySelector("#opennav");
    b.style.display = "block";
    a.style.display = "block";
    c.style.display= "none";
  });
  document.querySelector("#closenav").addEventListener("click", function () {
    let a = document.querySelector(".opencontainer");
    let b = document.querySelector("#closenav");
    let c=document.querySelector("#opennav");
    b.style.display = "none";
    a.style.display = "none";
    c.style.display= "block";
  });