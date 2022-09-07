function convertInc(value) {
    document.getElementById("answer-space1").innerHTML = value * 2.54
}
function convertFoot(value) {
    document.getElementById("answer-space2").innerHTML = (value / 3.281).toFixed(4);
    
}