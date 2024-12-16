var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  }
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 30 && blockLeft > 0 && characterTop >= 210) {
    character.style.animation = "none";
    character.style.display = "none";
    alert("u lost");
  }
}, 10);
