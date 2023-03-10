let turn = "x";
let title = document.querySelector(".title");
let squares = [];
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML === "") {
    element.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && element.innerHTML === "") {
    element.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
}
function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById(`item${num1}`).style.backgroundColor = "#9b22ffcc";
  document.getElementById(`item${num2}`).style.backgroundColor = "#9b22ffcc";
  document.getElementById(`item${num3}`).style.backgroundColor = "#9b22ffcc";
  setInterval(function () {
    title.innerHTML += `.`;
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[2] != ""
  ) {
    end(1, 2, 3);
    document.querySelector(".success").play();
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[5] != ""
  ) {
    end(4, 5, 6);
    document.querySelector(".success").play();
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[8] != ""
  ) {
    end(7, 8, 9);
    document.querySelector(".success").play();
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[4] != ""
  ) {
    end(1, 4, 7);
    document.querySelector(".success").play();
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[5] != ""
  ) {
    end(2, 5, 8);
    document.querySelector(".success").play();
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[6] != ""
  ) {
    end(3, 6, 9);
    document.querySelector(".success").play();
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[5] != ""
  ) {
    end(1, 5, 9);
    document.querySelector(".success").play();
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[5] != ""
  ) {
    end(3, 5, 7);
    document.querySelector(".success").play();
  } else if (
    squares[1] !== "" &&
    squares[2] !== "" &&
    squares[3] !== "" &&
    squares[4] !== "" &&
    squares[5] !== "" &&
    squares[6] !== "" &&
    squares[7] !== "" &&
    squares[8] !== "" &&
    squares[9] !== ""
  ) {
    //let promp = prompt("No Winner");
    let popup = document.createElement("div");
    let Text = document.createTextNode("No Winner");
    popup.appendChild(Text);
    popup.classList = "popup";
    document.body.appendChild(popup);
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Again ?");
    btn.appendChild(btnText);
    btn.className = "btn-again";
    popup.appendChild(btn);
    document.querySelector(".fail").play();
  }
}
document.addEventListener("click", function (event) {
  if (event.target.className === "btn-again") {
    location.reload();
  }
});
