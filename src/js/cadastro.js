function cadastrar() {
        var nome = document.getElementById('txtNome').value;
        var cpf = document.getElementById('txtCPF').value;
        var email = document.getElementById('txtEmail').value;

        if (nome && cpf && email) {
            var usuario = {
                nome: nome,
                cpf: cpf,
                email: email
            };

            if (typeof(Storage) !== 'undefined') {
                var registros = JSON.parse(localStorage.getItem('registros')) || [];

                registros.push(usuario);

                localStorage.setItem('registros', JSON.stringify(registros));

                alert('Usuário cadastrado com sucesso!');

                document.getElementById('txtNome').value = '';
                document.getElementById('txtCPF').value = '';
                document.getElementById('txtEmail').value = '';

                ler();
            } else {
                alert('Desculpe, o armazenamento local não é suportado pelo seu navegador.');
            }
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
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
