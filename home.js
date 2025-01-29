document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const MoneyAmmount = document.getElementById('add-input').value;
    const getPin = document.getElementById('add-pin').value;
    const Balance = document.getElementById('main-balance').innerText;
    const Balancen = parseInt(Balance);
    const newone = Balancen + 54;
    
    console.log(newone);

    console.log(MoneyAmmount, getPin);
})