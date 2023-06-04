// chamando valores gerais
const apareça1 = document.getElementById("apareça1")
const login_container = document.getElementById("login-container")
const section2 = document.getElementById("parte-2")
const img = document.getElementById('image-frente')
var mensagemBoasVindas = document.getElementById('mensagemBoasVindas');
const logado = document.getElementById('logado')

function registrarUsuario() {
  // Obter os valores especificos registro
  const nomeSocial = document.getElementById('nomeSocial').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const nomeCompleto = document.getElementById("nomeCompleto").value
  const cpf = document.getElementById('cpf').value.trim().replace(/[.-]/g, '');
  
  // Validação dos campos -------------------------------
  if (!cpf || !email || !senha || !nomeCompleto) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validar o formato do e-mail -------------------------
  if (email.indexOf('@') === -1 || !email.endsWith('.com')) {
    alert('Por favor, insira um endereço de e-mail válido!');
    return;
  }

  // Validar o formato do CPF ----------------------------
  if (cpf.length !== 11) {
    alert('Por favor, insira um CPF válido!');
    return;
  }


  // Exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login

  logado.classList.add('d-none');
  img.classList.add('d-none');
  login_container.classList.add("d-none")
  section2.classList.remove("d-none");
  apareça1.classList.remove("d-none");
  mensagemBoasVindas.textContent = 'Bem-vindo, ' + nomeSocial + '!';
  mensagemBoasVindas.classList.remove = 'd-none';
}

function fazerLogin() {
  // Obter os valores especificos
  const loginEmail = document.getElementById('loginEmail').value;
  const loginSenha = document.getElementById('loginSenha').value;

  // Validação dos campos
  if (!loginEmail || !loginSenha) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validar o formato do e-mail
  if (email.indexOf('@') === -1 || !email.endsWith('.com')) {
    alert('Por favor, insira um endereço de e-mail válido!');
    return;
  }



  // Exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login
  logado.classList.add('d-none');
  img.classList.add('d-none');
  login_container.classList.add("d-none")
  section2.classList.remove("d-none");
  apareça1.classList.remove("d-none");
  mensagemBoasVindas.textContent = 'Bem-vindo, ' + '!';
  mensagemBoasVindas.classList.remove = 'd-none';

}

// Botão ir para login e ir para registro com animação.
const botaologin = document.getElementById('botaologin');
const botaoregistro = document.getElementById("botaoregistro");
const idform = document.getElementById("idform")
var image = document.querySelector(".image");

botaologin.addEventListener('click', () => {
  login_container.classList.remove('d-none');
  idform.classList.add('d-none');
  if (image.classList.contains("image-left")) {
    // Mover a imagem para a metade direita
    image.classList.remove("image-left");
    image.classList.add("image-right");
  } else {
    // Mover a imagem para a metade esquerda
    image.classList.remove("image-right");
    image.classList.add("image-left");
  }
});
botaoregistro.addEventListener('click', () => {
  login_container.classList.add('d-none');
  idform.classList.remove('d-none');
  if (image.classList.contains("image-left")) {
    // Mover a imagem para a metade direita
    image.classList.remove("image-left");
    image.classList.add("image-right");
  } else {
    // Mover a imagem para a metade esquerda
    image.classList.remove("image-right");
    image.classList.add("image-left");
  }
});

// colorações de certo e errado --------------------------

const testenome = document.getElementById("nomeCompleto");
testenome.addEventListener("input", function () {
  const valor = testenome.value.trim();
  if (valor.length < 5) {
    testenome.classList.add("error");
  } else {
    testenome.classList.add("valid");
    testenome.classList.remove("error");
  }
});

// email --------------------------
const emailcor = document.getElementById("email");
emailcor.addEventListener("input", function () {
  const valore = emailcor.value.trim();
  if (!valore.includes('@') || !valore.endsWith('.com')) {
    emailcor.classList.add("error");
    emailcor.classList.remove("valid");
  } else {
    emailcor.classList.remove("error");
    emailcor.classList.add("valid");
  }
});

// cpf --------------------------
const cpfcor = document.getElementById("cpf");
cpfcor.addEventListener("input", function () {
  let valorcpf = cpfcor.value.trim();
  valorcpf = valorcpf.replace(/[.-]/g, ''); // Remove os símbolos "." e "-"
  if (valorcpf.length !== 11) {
    cpfcor.classList.add("error");
    cpfcor.classList.remove("valid");
  } else {
    cpfcor.classList.remove("error");
    cpfcor.classList.add("valid");
  }
});
