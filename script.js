document.getElementById('login-btn').addEventListener('click', function(event){
    const numberMail = document.getElementById('input-value').value;
    const passPin = document.getElementById('pass-value').value;
    event.preventDefault();
    if(numberMail === '313' && passPin === '1234'){
        window.location.href = '/home.html'
    }
    else{
        const division = document.getElementById('popUp');
        const p = document.createElement('p');
        p.innerText = 'Wrong! Try again..';
        p.classList.add = 'text-[1px]';
        division.appendChild(p);
    }
})