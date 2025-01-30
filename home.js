document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const MoneyAmmount = document.getElementById("add-input").value;
  const getPin = document.getElementById("add-pin").value;
  const Balance = document.getElementById("main-balance").innerText;
  if (getPin === "1234") {
    const newBalance = parseInt(Balance);
    const setInput = newBalance + MoneyAmmount;
    Balance.innerText = setInput;
    console.log(newBalance);
  }

  console.log(MoneyAmmount, getPin);
});
