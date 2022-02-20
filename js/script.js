function message(){
    var name = document.getElementById('username');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(name.value === '' || email.value === '' || subject.value === 
    '' || msg.value === ''){

        danger.style.display = 'block';
    }
    else{
        setTimeout( () => {
            name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
        }, 2000);
        success.style.display = 'block';
        sendMail();
    }
    setTimeout( () => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}

function sendMail(params) {
    var tempParams = {
        subject: document.getElementById('subject').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('msg').value
    };

    emailjs.send('service_nxxclge', 'template_1ifm5co', tempParams);

};