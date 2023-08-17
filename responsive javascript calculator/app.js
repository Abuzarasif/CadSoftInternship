function getinput(num = "") {
    var Cinput = document.getElementById("Cinput");
    Cinput.value += num;

}

function getclear() {
    var Cinput = document.getElementById("Cinput");
    Cinput.value = "";
}

function getresult() {
    var Cinput = document.getElementById("Cinput");
    Cinput.value = eval(Cinput.value);
}