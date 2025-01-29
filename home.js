document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const MoneyAmmount = document.getElementById('add-input').value;
    const getPin = document.getElementById('add-pin').value;
    console.log(MoneyAmmount, getPin);
})