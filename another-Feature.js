document.getElementById('addMoney-btn').addEventListener('click', function(){
    document.getElementById('addMoney-container').classList.remove('hidden');
    document.getElementById('cashOut-container').classList.add('hidden');
})

document.getElementById('cashOut-btn').addEventListener('click', function(){
    document.getElementById('cashOut-container').classList.remove('hidden');
    document.getElementById('addMoney-container').classList.add('hidden');
})