startAnimation();
function startAnimation() {
  let timeoutId = setInterval(addClass, 5000);
  let flag = true;
  function addClass() {
    let block = document.getElementById("block");
    if (flag) {
      block.classList.remove("pusle-txt-block");
      block.classList.add("row-bg-amimations");
    } else {
      block.classList.remove("row-bg-amimations");
      block.classList.add("pusle-txt-block");
    }
    flag = !flag;
  }
  let flagClose = true;
  document.getElementById("widget").addEventListener("click", close);

  function close() {
    if (flagClose) {
      document.getElementById("pulse").style.display = "none";
      document.getElementById("close").style.display = "block";
      document.getElementById("list").style.display = "block";
    } else {
      document.getElementById("list").style.display = "none";
      document.getElementById("pulse").style.display = "block";
      document.getElementById("close").style.display = "none";
    }
    flagClose = !flagClose;
  }
}
