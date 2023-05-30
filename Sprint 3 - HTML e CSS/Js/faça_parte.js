function registrarUsuario() {
  // Obter os valores dos campos
  const nomeSocial = document.getElementById('nomeSocial').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const nomeCompleto = document.getElementById("nomeCompleto").value
  const cpf = document.getElementById('cpf').value;
  const logado = document.getElementById('logado')
  const img = document.getElementById('image-frente')
  const section2 = document.getElementById("parte-2")
  var mensagemBoasVindas = document.getElementById('mensagemBoasVindas');
  const apareça1 = document.getElementById("apareça1")
  const login_container = document.getElementById("login-container")

  // Validação dos campos (pode adicionar validações adicionais)
  if (!cpf || !email || !senha || !nomeCompleto) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validar o formato do e-mail
  if (email.indexOf('@') === -1 || !email.endsWith('.com')) {
    alert('Por favor, insira um endereço de e-mail válido!');
    return;
  }

  // Simulação do registro - Aqui você pode enviar os dados para um servidor ou armazená-los localmente

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
  // Obter os valores dos campos
  const loginEmail = document.getElementById('loginEmail').value;
  const loginSenha = document.getElementById('loginSenha').value;

  // Validação dos campos (pode adicionar validações adicionais)
  if (!loginEmail || !loginSenha) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validar o formato do e-mail
  if (email.indexOf('@') === -1 || !email.endsWith('.com')) {
    alert('Por favor, insira um endereço de e-mail válido!');
    return;
  }

  // Simulação do login - Aqui você pode verificar as credenciais em um servidor ou localmente

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
const loginForm = document.getElementById("login-container");
const idform = document.getElementById("idform")
var image = document.querySelector(".image");

botaologin.addEventListener('click', () => {
  loginForm.classList.remove('d-none');
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
  loginForm.classList.add('d-none');
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


