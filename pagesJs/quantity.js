
let count = 1
let indexCount = 1
function addpr() {
    let productCart = JSON.parse(localStorage.getItem('productCart'))
    let i = document.getElementsByClassName('quantityI')[0]
    if (i.value < 10)
        i.value = ++indexCount}
function lasspr() {
    // let productCart = JSON.parse(localStorage.getItem('productCart'))
    let i = document.getElementsByClassName('quantityI')[0]
    if (i.value >= 1)
        i.value = --indexCount
   }
