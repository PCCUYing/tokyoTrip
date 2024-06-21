function displayDestination() {
    var e = document.getElementById("dropdown");
    var strUser = e.options[e.selectedIndex].value;
    document.getElementById("result").innerHTML = strUser;
}
