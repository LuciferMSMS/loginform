const USERS = [{ id: 'nader76' , pass: '12345678' , fNAme: 'NAder'}]

const user = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('submit');
const errorField = document.getElementById('login');

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    if(user.value === USERS[0].id && password.value === USERS[0].pass){
        console.log('user' , user.value); console.log('pass' , password.value)
        btn.innerHTML = `<div class="spinner-border" role= "status">
        <span class="visually-hidden">Loading . . . </span>
        </div>`
        setTimeout(() => {
            btn.innerHTML = 'submit';
            window.location.replace('./panel.html');
        },2000)

    } else{
        const smallText =document.createElement('small');
        smallText.innerHTML = '';
        smallText.classList.add('text-danger')
        const mb = document.getElementById('mb-4');
        mb.innerHTML = 'Wrong username or password, try again!';
        errorField.appendChild(smallText);
    }
})