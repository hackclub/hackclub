function changeGlasses(color) {
    var x = document.getElementsByClassName("glasses");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.fill = color;
    }
}