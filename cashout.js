document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const updateBalance = document.getElementById('main-balance').innerText;
    const balance = parseFloat(updateBalance);
    const pinNumber = document.getElementById('cashout-pin').value;
    const cashoutAmmount = document.getElementById('cashout-ammount').value;
    const outAmmount = parseFloat(cashoutAmmount);

    if(pinNumber === '1234'){
        const realBalance = balance - outAmmount;
        document.getElementById('main-balance').innerText = realBalance;
    }
    else{
        alert ('Wrong! identify yourself');
    }
})