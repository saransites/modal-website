const tabLinks=document.getElementsByClassName("tablink")
const tabContents=document.getElementsByClassName("tabcontent")

function openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("activelink")
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("activeContent")
    }
    document.getElementById(tabName).classList.add("activeContent")
    event.target.classList.add("activelink")
}

const xmark=document.querySelector(".xmark")
const hamburger=document.querySelector(".hamburger")
const sidebar=document.getElementById("sidebar")
hamburger.addEventListener("click",()=>{
    sidebar.style.right="0"
})
xmark.addEventListener("click",()=>{
    sidebar.style.right="-60%"
})
