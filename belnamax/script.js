const telegramForm = document.querySelector(".telegram-form");

telegramForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formEl = e.target;
    const name = formEl.querySelector('input[name="name"]').value;
    const phone = formEl.querySelector('input[name="phone"]').value;
    const order = formEl.querySelector('textarea[name="order"]').value;
    const TOKEN = "6045081182:AAGobOjF_vJ2uoPPR-1GzEyzkMyXjfF3QXE";
    const CHAT_ID = "-928664433";
    const href = "http://belnamax.online/"
    

    let message = '*REQUEST*\n\n\n' + 'Name: ' + name + '\nPhone: ' + phone + '\nOrder: ' + order;

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            parse_mode: 'HTML',
            text: message
        })
    })
        .then(response => {
            if (response.ok) {
                window.location.href = href;
            } else {
                throw new Error('Пожалуйста, заполните все поля формы');
            }
        })
        .catch(error => {
            alert(error.message);
        });
});