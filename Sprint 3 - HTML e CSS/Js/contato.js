function registrarUsuario() {
    // Obter os valores dos campos
    const nomeSocial = document.getElementById('nomeSocial').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Validação dos campos (pode adicionar validações adicionais)
    if (!nomeSocial || !email || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Validar o formato do e-mail
    if (email.indexOf('@') === -1) {
      alert('Por favor, insira um endereço de e-mail válido!');
      return;
    }
  
    // Simulação do registro - Aqui você pode enviar os dados para um servidor ou armazená-los localmente
  
    // Exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login
    document.getElementById('registro-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('conteudo-usuario').style.display = 'block';
    document.getElementById('nomeUsuario').textContent = nomeSocial;
  }
  
  function fazerLogin() {
    // Obter os valores dos campos
    const loginEmail = document.getElementById('loginEmail').value;
  
  
    // Validação dos campos (pode adicionar validações adicionais)
    if (!loginEmail) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Validar o formato do e-mail
    if (loginEmail.indexOf('@') === -1) {
      alert('Por favor, insira um endereço de e-mail válido!');
      return;
    }
  
    // Simulação do login - Aqui você pode verificar as credenciais em um servidor ou localmente
  
    // Exibir o conteúdo para o usuário logado e ocultar os formulários de registro e login
    document.getElementById('registro-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('conteudo-usuario').style.display = 'block';
    document.getElementById('nomeUsuario').textContent = 'Usuário Logado';
  }