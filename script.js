console.log("js connected");

let i = 0;
let textDiv = document.getElementById("presentation");
let text =
    "Hi, my name is Luca. I write codes and play synthesizers... This is my Portfolio, feel free to have a look around !";
let speed = 80;

let projectsContainer = document.getElementById("projectsContainer");
let projectsImg = document.getElementById("projectsImg");
let projectsP = document.getElementById("projectsP");
let projectsImg2 = document.getElementById("projectsImg2");
let projectsP2 = document.getElementById("projectsP2");
let projectsImg3 = document.getElementById("projectsImg3");
let projectsP3 = document.getElementById("projectsP3");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const typer = () => {
    if (i < text.length) {
        textDiv.innerHTML += text.charAt(i);
        textDiv.style.color = "#f4ecdf";
        textDiv.style.fontFamily = "Alata";
        textDiv.style.fontSize = "71" + "px";
        textDiv.style.fontWeight = "bold";
        textDiv.style.cursor = "pointer";
        i++;
        setTimeout(typer, speed);
    }
};

typer();

$("#about").click(function () {
    $("html,body").animate(
        {
            scrollTop: $("#second").offset().top,
        },
        "slow"
    );
});

$("#projects").click(function () {
    $("html,body").animate(
        {
            scrollTop: $("#third").offset().top,
        },
        "slow"
    );
});

$("#contact").click(function () {
    $("html,body").animate(
        {
            scrollTop: $("#fourth").offset().top,
        },
        "slow"
    );
});

projectsImg.addEventListener("mouseover", () => {
    projectsImg.classList.add("mouseOverImg");
    projectsP.classList.remove("projectsP");
    projectsP.classList.add("mouseOverP");
});

projectsImg.addEventListener("mouseleave", () => {
    projectsImg.classList.remove("mouseOverImg");
    projectsP.classList.remove("mouseOverP");
    projectsP.classList.add("projectsP");
});

projectsP.addEventListener("mouseover", () => {
    projectsImg.classList.add("mouseOverImg");
    projectsP.classList.remove("projectsP");
    projectsP.classList.add("mouseOverP");
});

projectsP.addEventListener("mouseleave", () => {
    projectsImg.classList.remove("mouseOverImg");
    projectsP.classList.remove("mouseOverP");
    projectsP.classList.add("projectsP");
});

//2

projectsImg2.addEventListener("mouseover", () => {
    projectsImg2.classList.add("mouseOverImg");
    projectsP2.classList.remove("projectsP");
    projectsP2.classList.add("mouseOverP");
});

projectsImg2.addEventListener("mouseleave", () => {
    projectsImg2.classList.remove("mouseOverImg");
    projectsP2.classList.remove("mouseOverP");
    projectsP2.classList.add("projectsP");
});

projectsP2.addEventListener("mouseover", () => {
    projectsImg2.classList.add("mouseOverImg");
    projectsP2.classList.remove("projectsP");
    projectsP2.classList.add("mouseOverP");
});

projectsP2.addEventListener("mouseleave", () => {
    projectsImg2.classList.remove("mouseOverImg");
    projectsP2.classList.remove("mouseOverP");
    projectsP2.classList.add("projectsP");
});

//3

projectsImg3.addEventListener("mouseover", () => {
    projectsImg3.classList.add("mouseOverImg");
    projectsP3.classList.remove("projectsP");
    projectsP3.classList.add("mouseOverP");
});

projectsImg3.addEventListener("mouseleave", () => {
    projectsImg3.classList.remove("mouseOverImg");
    projectsP3.classList.remove("mouseOverP");
    projectsP3.classList.add("projectsP");
});

projectsP3.addEventListener("mouseover", () => {
    projectsImg3.classList.add("mouseOverImg");
    projectsP3.classList.remove("projectsP");
    projectsP3.classList.add("mouseOverP");
});

projectsP3.addEventListener("mouseleave", () => {
    projectsImg3.classList.remove("mouseOverImg");
    projectsP3.classList.remove("mouseOverP");
    projectsP3.classList.add("projectsP");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("closedModal");
});
