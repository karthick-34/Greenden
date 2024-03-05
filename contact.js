var menuicon=document.getElementById("menuicon")
var sidemenubar=document.getElementById("sidemenubar")
var closemenu=document.getElementById("closemenu")
menuicon.addEventListener('click',function(){
    sidemenubar.style.right=0
})

closemenu.addEventListener('click',function(){
    sidemenubar.style.right="-50%"
})