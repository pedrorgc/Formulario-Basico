function validarEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!regex.test(email)) {
        throw new Error('Email inválido');
    }
}

function validarCPF(cpf) {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!regexCPF.test(cpf)) {
        throw new Error("CPF inválido. Formato correto: xxx.xxx.xxx-xx");
    }

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
        throw new Error("CPF inválido. Deve conter 11 dígitos.");
    }

    if (/^(\d)\1+$/.test(cpf)) {
        throw new Error("CPF inválido. Todos os dígitos são iguais.");
    }

}

function validarCelular(celular) {
    const regexCelular = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!regexCelular.test(celular)) {
        throw new Error("Número de celular inválido. Formato correto: (xx) xxxxx-xxxx");
    }
}

document.getElementById('cadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const celular = document.getElementById('tel').value;

    try {
        validarEmail(email);
        validarCPF(cpf);
        validarCelular(celular);

        alert('Usuário Cadastrado!');
        location.href = 'index3.html';
    } catch (error) {
        alert(error.message);
    }
});
