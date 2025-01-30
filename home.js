document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const MoneyAmmount = document.getElementById("add-input").value;
  const getPin = document.getElementById("add-pin").value;
  const Balance = document.getElementById("main-balance").innerText;
  if (getPin === "1234") {
    const newBalance = parseInt(Balance);
    console.log(3333333);
  }

  
});
