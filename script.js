document.getElementById('login-btn').addEventListener('click', function(event){
    const numberMail = document.getElementById('input-value').value;
    const passPin = document.getElementById('pass-value').value;
    event.preventDefault();
    console.log(numberMail, passPin);
})