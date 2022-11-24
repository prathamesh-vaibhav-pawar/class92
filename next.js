player1 = localStorage.getItem("player1")
player2 = localStorage.getItem("player2")

player1_Score = 0;
player2_Score = 0;

document.getElementById("player1_name").innerHTML =  player1 + "-" + player1_Score
document.getElementById("player2_name").innerHTML =  player2 + "-"+ player2_Score

document.getElementById("Question_p").innerHTML= "The Qustion is going to ask by " + player1
document.getElementById("Answer_p").innerHTML = "the Answer is going to ask by " + player2

function send_q(){
    number1 = document.getElementById("in1").value 
    number2 = document.getElementById("in2").value
    actual_Question = parseInt(number1) * parseInt(number2)
    Question = "<h4 id = 'Question'>"+number1 +'X'+number2+"</h4>"
    head = "<h4 id='t1'>Answer:</h4>"
    mid = "<input id = 'in1' placeholder = 'Answer'> <br><br>"
    foot = "<button class = 'btn btn-primary' onclick = 'Check()'>Submit</button>"
    document.getElementById("div2").innerHTML = Question+head+mid+foot

}
player_Answer = "player2"
player_Question = "player1"

function Check(){
    get_ans = document.getElementById("in1").value 
    if(get_ans == actual_Question){
        if(player_Answer == "player1"){
            newScore = player1_Score + 1
            document.getElementById("player1_name").innerHTML = player1 + newScore 
        }
        else{
            newscore = player2_Score + 1
            document.getElementById("player2_name").innerHTML = player2 + newscore 
        }
}
        if(player_Answer == "player1"){
            player_Answer = "player2"
            player_Question= "player1"
            document.getElementById("Answer_p").innerHTML = "the Answer is going to ask by " + player1
            document.getElementById("Question_p").innerHTML = "The Qustion is going to ask by " + player2
        }
        else{
            player_Question = "player1"
            player_Answer = "player2"
            document.getElementById("Question_p").innerHTML = "The Qustion is going to ask by " + player1 
            document.getElementById("Answer_p").innerHTML = "the Answer is going to ask by " + player2
        }
    document.getElementById("div2").innerHTML = " "
    document.getElementById("in1").innerHTML = " "
    document.getElementById("in2").innerHTML = " "
}
    