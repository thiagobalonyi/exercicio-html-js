const form = document.getElementById('form-campos');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const sucessMessage = 'CORRETO';
const errorMessage = 'ERRADO';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    certoErrado();
})

function certoErrado() {
    if (campoB.value >= campoA.value) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = sucessMessage;
        containerMensagemSucesso.style.display = 'block';

        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = errorMessage;
        containerMensagemErro.style.display = 'none';

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = errorMessage;
        containerMensagemErro.style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = sucessMessage;
        containerMensagemSucesso.style.display = 'none';
    }
}

console.log(form);