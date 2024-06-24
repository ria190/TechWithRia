console.log("RIA")

// ----------- skills section tabs------------
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");


function opentab(tabname)
{
    var activetab=document.getElementById(tabname);
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    activetab.classList.add("active-tab");
}

// -------------side menu---------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0px ";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// ---------------introduction-------------
var typed = new Typed(".multiple-text",{
    strings:["Web Developer","Programmer","UI/UX Designer"],
    typeSpeed:110,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

// ---------------projects animation----------
let animation= document.querySelectorAll(".animation");

function showScroll(){
    let scrollTop= document.documentElement.scrollTop;
    for(let i=0;i<animation.length;i++)
        {
let heightAnimaiton= animation[i].offsetHeight;
if(heightAnimaiton- -450 < scrollTop)
    {
        animation[i].style.opacity=1;
        animation[i].classList.add("showUp");
    }
        }
}

window.addEventListener("scroll", showScroll);

//----------timeline animation--------------
function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs(".time-line-description", true);
const timeline2 = qs(".timeline2");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`; // Correct initial position of the line
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline2.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();

    const dist = targetY - timelineRect.top;

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline2.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
    }

    sections.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add("show-me");
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);
