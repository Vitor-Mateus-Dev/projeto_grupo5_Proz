// Função para validar o formato de um e-mail
function validateEmail(email) {
  return email.indexOf('@') !== -1 && email.endsWith('.com');
}

// Função para exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login
function showLoggedInContent() {
  logado.classList.add('d-none');
  img.classList.add('d-none');
  login_container.classList.add("d-none");
  section2.classList.remove("d-none");
  apareça1.classList.remove("d-none");
}

// Função para realizar o registro do usuário
function registrarUsuario() {
  // Obter os valores dos campos
  const nomeSocial = getValueById('nomeSocial');
  const email = getValueById('email');
  const senha = getValueById('senha');
  const nomeCompleto = getValueById('nomeCompleto');
  const cpf = getValueById('cpf');

  // Validação dos campos (pode adicionar validações adicionais)
  if (!cpf || !email || !senha || !nomeCompleto) {
    showAlert('Por favor, preencha todos os campos!');
    return;
  }

  // Validar o formato do e-mail
  if (!validateEmail(email)) {
    showAlert('Por favor, insira um endereço de e-mail válido!');
    return;
  }


  // Exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login
  showLoggedInContent();
  console.log(showLoggedInContent)

  mensagemBoasVindas.textContent = 'Bem-vindo, ' + nomeSocial + '!';
  mensagemBoasVindas.classList.remove('d-none');
}

// Função para realizar o login do usuário
function fazerLogin() {
  // Obter os valores dos campos
  const loginEmail = getValueById('loginEmail');
  const loginSenha = getValueById('loginSenha');

  // Validação dos campos (pode adicionar validações adicionais)
  if (!loginEmail || !loginSenha) {
    showAlert('Por favor, preencha todos os campos!');
    return;
  }

  // Validar o formato do e-mail
  if (!validateEmail(loginEmail)) {
    showAlert('Por favor, insira um endereço de e-mail válido!');
    return;
  }

  // Simulação do login - Aqui você pode verificar as credenciais em um servidor ou localmente

  // Exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login
  showLoggedInContent();

  mensagemBoasVindas.textContent = 'Bem-vindo!';
  mensagemBoasVindas.classList.remove('d-none');
}

// Botão ir para login e ir para registro com animação.
const botaologin = document.getElementById('botaologin');
const botaoregistro = document.getElementById('botaoregistro');
const loginForm = document.getElementById('login-container');
const idform = document.getElementById('idform');
var image = document.querySelector('.image');

botaologin.addEventListener('click', () => {
  loginForm.classList.remove('d-none');
  idform.classList.add('d-none');
  image.classList.toggle('image-right');
  image.classList.toggle('image-left');
});

botaoregistro.addEventListener('click', () => {
  loginForm.classList.add('d-none');
  idform.classList.remove('d-none');
  image.classList.toggle('image-right');
  image.classList.toggle('image-left');
});
