function cadastrar() {
        var nome = document.getElementById('txtNome').value;
        var cpf = document.getElementById('txtCPF').value;
        var email = document.getElementById('txtEmail').value;
        var senha = document.getElementById('txtSenha').value;
    
        if (nome && cpf && email) {
            var usuario = {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha
            };

            if (typeof(Storage) !== 'undefined') {
                var registros = JSON.parse(localStorage.getItem('registros')) || [];

                registros.push(usuario);

                localStorage.setItem('registros', JSON.stringify(registros));
                
                // Armazena o nome do usuário
                localStorage.setItem('nomeUsuario', nome);


                alert('Usuário cadastrado com sucesso!');

                //Direcinando para tela de Login
                setTimeout(()=>{

                    window.location.href = '../src/login.html'
                    
                }, 300)

                document.getElementById('txtNome').value = '';
                document.getElementById('txtCPF').value = '';
                document.getElementById('txtEmail').value = '';
                document.getElementById('txtSenha').value = '';

                ler();
            } else {
                alert('Desculpe, o armazenamento local não é suportado pelo seu navegador.');
            }
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    }
    
    //Função para exibir Nome do Usuário.
    
    function exibirNomeUsuario() {
        var nomeUsuario = localStorage.getItem('nomeUsuario');
        if (nomeUsuario) {
            var nomeUsuarioLink = document.getElementById("nomeUsuarioLink");
            var mensagem = "Olá, " + nomeUsuario + " !";
            nomeUsuarioLink.textContent = mensagem;
        }
    }
    window.onload = function() {
        exibirNomeUsuario();
    };


    
    function validarLogin() {
        var email = document.getElementById("txtEmail").value;
        var senha = document.getElementById("txtSenha").value;
        
        if (email === "" || senha === "") {
          alert("Por favor, preencha todos os campos de login.");
        } else {
            if(verificarCredenciais(email, senha)){
                window.location.href="./cliente_pedidos.html"
            }else{
                alert("Credenciais inválidas. Verifique seu e-mail e senha.")
            }
          
         
        }
      }

      function verificarCredenciais(email, senha) {

        var registros = JSON.parse(localStorage.getItem('registros')) || [];

        for (var i =0; i < registros.length; i++){
            var usuario = registros[i];
            if (usuario.email === email && usuario.senha === senha) {
                return true;
            }
        }
        return false;
      }

        function criar() {
            var nome = document.getElementById('txtNome').value;
            var cpf = document.getElementById('txtCPF').value;
            var email = document.getElementById('txtEmail').value;

        if (nome !== '' && cpf !== '' && email !== '') {
            if (typeof(Storage) !== 'undefined') {
                var registros = JSON.parse(localStorage.getItem('registros')) || [];

                var novoRegistro = {
                    nome: nome,
                    cpf: cpf,
                    email: email
                };

                registros.push(novoRegistro);
                localStorage.setItem('registros', JSON.stringify(registros));
                limparCampos();

                alert('Registro criado com sucesso!');
            } else {
                alert('Desculpe, o armazenamento local não é suportado pelo seu navegador.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    function ler() {
        if (typeof(Storage) !== 'undefined') {

            var registros = JSON.parse(localStorage.getItem('registros')) || [];

            var tabela = document.getElementById('tabelaRegistros');

            tabela.innerHTML = '';

            var cabecalho = tabela.createTHead().insertRow();
            cabecalho.innerHTML = '<th>Nome</th><th>CPF</th><th>Email</th><th>Ações</th>';

            for (var i = 0; i < registros.length; i++) {
                var registro = registros[i];

                var linha = tabela.insertRow();

                var colunaNome = linha.insertCell();
                colunaNome.textContent = registro.nome;

                var colunaCPF = linha.insertCell();
                colunaCPF.textContent = registro.cpf;

                var colunaEmail = linha.insertCell();
                colunaEmail.textContent = registro.email;

                var colunaAcoes = linha.insertCell();
                colunaAcoes.innerHTML = `
                    <button onclick="deletarRegistro(${i})" class="btn btn-danger btn-sm">Excluir</button>

                `;
            }
        } else {
            alert('Desculpe, o armazenamento local não é suportado pelo seu navegador.');
        }
    }


    function deletarRegistro(index) {
        if (typeof(Storage) !== 'undefined') {
            var registros = JSON.parse(localStorage.getItem('registros')) || [];
            registros.splice(index, 1);

            localStorage.setItem('registros', JSON.stringify(registros));
            ler();
            alert('Registro excluído com sucesso!');
        } else {
            alert('Desculpe, o armazenamento local não é suportado pelo seu navegador.');
        }
    }
