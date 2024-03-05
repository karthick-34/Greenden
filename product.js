var menuicon = document.getElementById("menuicon")
var sidemenubar = document.getElementById("sidemenubar")
var closemenu = document.getElementById("closemenu")

menuicon.addEventListener('click', function () {
    sidemenubar.style.right = 0
})

closemenu.addEventListener('click', function () {
    sidemenubar.style.right = "-50%"
})

var product_container = document.getElementById("product-container")
var search_input = document.getElementById("search-input")
var product_list = document.querySelectorAll("#product-container > div")

console.log(product_list)

search_input.addEventListener('keyup', function (event) { 
    var enteredvalue = event.target.value.toLowerCase();

    for (var i = 0; i < product_list.length; i++) {
        var product_name = product_list[i].querySelector("h1").textContent.toLowerCase(); 

        if (product_name.includes(enteredvalue)) { 
            product_list[i].style.display = "block";
        } else {
            product_list[i].style.display = "none";
        }
    }
});
