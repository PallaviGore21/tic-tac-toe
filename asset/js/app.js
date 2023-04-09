
gsap.from(".box", {
    opacity: 0,
    rotation: 360,
    duration: 2,
    stagger: {
        each: 0.4,
        grid: "auto",
        from: "center"
    }
});
var x = true;
var redWinCount = 0;
var blueWinCount = 0;
var totalCount = 0;
var drawCount = 0;
function game(arg) {
    var box = document.querySelector(arg).classList;
    // var redAheKa = box.contains("bg-red");
    // var blueAheKa = box.contains("bg-blue");
    if (!(box.contains("bg-red") || box.contains("bg-blue"))
    ) {
        x ? box.add("bg-red") : box.add("bg-blue");
        x = !x
        gsap.to(arg, { scale: 0.8, duration: 0.5 });
    }


    checkWinner()
    if (checkFill()) {
        drawCount++
        resetGame()
    }

}



function checkWinner() {
    isWinner("#div1", "#div2", "#div3", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div4", "#div5", "#div6", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div7", "#div8", "#div9", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div1", "#div4", "#div7", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div2", "#div5", "#div8", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div3", "#div6", "#div9", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div1", "#div5", "#div9", "bg-blue") && resetGame() && alert("blue Win")
    isWinner("#div3", "#div5", "#div7", "bg-blue") && resetGame() && alert("blue Win")

    isWinner("#div1", "#div2", "#div3", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div4", "#div5", "#div6", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div7", "#div8", "#div9", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div1", "#div4", "#div7", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div2", "#div5", "#div8", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div3", "#div6", "#div9", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div1", "#div5", "#div9", "bg-red") && resetGame() && alert("red Win")
    isWinner("#div3", "#div5", "#div7", "bg-red") && resetGame() && alert("red Win")


}

function isWinner(id1, id2, id3, color) {
    var box1 = document.querySelector(id1).classList.contains(color)
    var box2 = document.querySelector(id2).classList.contains(color)
    var box3 = document.querySelector(id3).classList.contains(color)
    if (box1 && box2 && box3) {
        color === "bg-blue" ? blueWinCount++ : redWinCount++
        return true

    }
    return false
}
function resetGame() {
    for (var i = 1; i <= 9; i++) {
        document.querySelector(`#div${i}`).classList.remove
            ("bg-red", "bg-blue")
    }
    gsap.to(".box", { scale: 1, duration: 0.5 });
    totalCount++
    display()
    return true
}
function checkFill() {
    return isFill("#div1")
        && isFill("#div2")
        && isFill("#div3")
        && isFill("#div4")
        && isFill("#div5")
        && isFill("#div6")
        && isFill("#div7")
        && isFill("#div8")
        && isFill("#div9")

}

function isFill(arg) {
    return document.querySelector(arg).classList.contains("bg-red") || document.querySelector(arg).classList.contains("bg-blue")
}
function display() {
    document.querySelector("#redWin").innerHTML = redWinCount
    document.querySelector("#blueWin").innerHTML = blueWinCount
    document.querySelector("#totalCount").innerHTML = totalCount
    document.querySelector("#drawCount").innerHTML = drawCount

}

