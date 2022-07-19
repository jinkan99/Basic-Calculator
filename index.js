const data = document.getElementById("input-data");
const clearBtn = document.getElementById("clear-btn");
const btns = document.querySelectorAll(".buttons button[type='button']");

let res = "";

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      res = Function("return " + res)();
      data.value = res;
    } else {
      res += e.target.innerHTML;
      data.value = res;
    }
  });
});

clearBtn.addEventListener("click", () => {
  res = "";
  data.value = "";
});
