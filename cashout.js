document.getElementById('cashout-btn').addEventListener('click', function(){
    const updateBalance = document.getElementById('main-balance').innerText;
    const balance = parseFloat(updateBalance);
    const pinNumber = document.getElementById('cashout-pin').value;
    const cashoutAmmount = document.getElementById('cashout-ammount').value;
    const pinReal = parseFloat(pinNumber);
    const outAmmount = parseFloat(cashoutAmmount);

    if(pinNumber === '1234'){
        console.log('hey there!');
    }
    else{
        alert ('Wrong! identify yourself');
    }
})