// 1) Call Dominos and order a pizza =>  8 secs
// 2) Pizza is getting prepared =>  5 secs
// 3) Pizza is getting delivered =>  3 secs


setTimeout(callDominos, 8000)





function callDominos(){
    console.log("Call Dominos and order a pizza")
    setTimeout(preparePizza, 5000)
}
function preparePizza(){
    console.log("Pizza is getting prepared")
    setTimeout(deliverPizza, 3000)
}
function deliverPizza(){
    console.log("Pizza is getting delivered")
}






