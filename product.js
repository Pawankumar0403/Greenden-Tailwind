// selecting side navbar,menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

// close navbar

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// selecting products

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (c = 0; c < productlist.length; c++) {

        var productname = productlist[c].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[c].style.display = "none"
        }
        else {
            productlist[c].style.display = "block"
        }
    }
})