const form = document.getElementById('form-campos');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const sucessMessage = 'CORRETO';
    const errorMessage = 'ERRADO';

    if (campoB.value >= campoA.value) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = sucessMessage;
        containerMensagemSucesso.style.display = 'block';
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = errorMessage;
        containerMensagemErro.style.display = 'block';
    }
})

console.log(form);