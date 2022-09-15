var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > 0 && current > 0 && quantity > 0) {
    if (initial > current) {
      var loss = (initial - current) * quantity;
      var lossPercentage = (loss / initial) * 100;
      showOutput(
        `The loss is of ${loss} and the percentage is ${lossPercentage}%`
      );
    } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercentage = (profit / initial) * 100;
      showOutput(
        `The profit is of ${profit} and the percentage is ${profitPercentage}%`
      );
    } else {
      showOutput("No pain no gain and no gain no pain");
    }
  } else {
    showOutput("Please Enter sensible value of initial & current price");
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, curr);
}

submitBtn.addEventListener("click", submitHandler);
