
const myForm = document.getElementById('emailForm');

function checkMail(emailadd) {
    let msg;
    if (emailadd === '') {
        msg = 'the email address is empty';


    } else if (emailadd.indexOf('@') === -1) {
        msg = 'Your email must contain the character @';

    } else if (emailadd.indexOf('.') === -1) {
        msg = 'Your email must contain a dot(.)';

    } else {
        msg = 'The email is a valid one'
    }
    return msg;

}

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const urMail = document.getElementById('userMail');
    let errorMsg = checkMail(urMail.value);
    alert(errorMsg);
})

