let start= document.querySelector("#startTour")
let homeEnter= document.querySelector("#homeEnter")
let home= document.querySelector("#home")
let contact= document.querySelector("#contactLink")


start.addEventListener("click", function(){
    loadPage(homeEnter, start.getAttribute("pagetoload"), 500)

})

contact.addEventListener("click", function(){
    loadPage(home, contact.getAttribute("pagetoload"), 500)

})



contact

function loadPage(hide, show, timing){
    document.querySelector("#transition").classList.add('open')
    setTimeout(() => {
        document.querySelector("#transition").style="bottom:100%"  
        hide.style="display:none"
        document.querySelector("#"+show).style="display:flex;"


    }, timing);
    setTimeout(() => {
        document.querySelector("#transition").style="bottom:0%"  
        document.querySelector("#transition").classList.remove('open')

    }, timing+500);
}

