function playerb(){
    var player1 = document.getElementById("i1").value
    localStorage.setItem("player1",player1);
    var player2 = document.getElementById("i2").value
    localStorage.setItem("player2",player2)
    window.location = "next.html"
}