# Programação de Funcionalidades


Nesta seção apresentamos as funcionalidades que foram implementadas, e os requisitos que foram contemplados na forma de suas funcionalidades.
Esses requisitos foram os que nossa equipe priorizou para a entrega da SPRINT 3. As funcionalidades serão apresentadas em forma de estrutura de dados.


## Funcionalidades priorizadas na SPRINT 3

| ID | Descrição | Prioridade | Responsável |
| :---: | --- | :---: | :---: |
| RF-01 | O sistema deve permitir que os usuários façam login em suas contas. | Alta | Tatiana |
| RF-02 | O sistema deve permitir que os usuários cadastrados adicionem informações do cliente, como nome, endereço, e-mail e telefone. | Alta | Pedro |
| RF-03 | O sistema deve permitir que os usuários pesquisem produtos com base em vários critérios, como nome, preço e categoria. | Média | Simon |
| RF-10 | O sistema deve permitir que os usuários visualizem promoções. | Baixa | Felipe |
| RF-11 | O sistema deve permitir que os clientes adicionem produtos a seus carrinhos de compras, atualizem quantidades e removam produtos. | Baixa | Gabriel |

## Login

![Captura de tela 2023-05-14 203251](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time-1-projprecocerto/assets/74187849/1f7dcdc6-065a-4150-bee1-54b40d103ec0)

### Artefatos da funcionalidade

● login.html

● login.js

● estilos.css

## Cadastro

![Captura de tela 2023-05-14 203217](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time-1-projprecocerto/assets/74187849/fd158737-4c97-4ad1-8106-71e83f4dcc50)

### Artefatos da funcionalidade

● cadastro.html

● cadastro.js

● estilos.css


## Carrinho

![Captura de tela 2023-05-18 154102](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time-1-projprecocerto/assets/129537841/e4fd2c64-d5d9-4ec9-ab63-5e61002265fb)

#html
~~~~html
<main class="flex-fill">
        <div class="container">
            <h1>Carrinho de Compras</h1>
            <ul class="list-group mb-3" id="list1">
                <li class="list-group-item py-3">
                    <div class="row g-3">
                        <div class="col-4 col-md-3 col-lg-2">
                            <a href="#">
                                <img src="img/produtos/Macarrão.jpg" class="img-thumbnail">
                            </a>
                        </div>
                        <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                            <h4>
                                <b><a href="#" class="text-decoration-none text-success">Macarrão</a></b>
                            </h4>
                            <h5>
                                Macarrão Vilma 500g
                            </h5>
                        </div>
                        <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                            <div class="input-group">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-up-fill"></i>
                                </button>
                                <input type="text" class="form-control text-center border-dark" value="1">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-down-fill"></i>
                                </button>
                                <button class="btn btn-outline-danger border-dark btn-sm" type="button" onclick="removeList(this)">
                                    <i class="bi-trash"></i>
                                </button>
                            </div>
                            <div class="text-end mt-2">
                                <h6 class="text-dark">
                                    <br>Valor Total: R$ 4,50
                                </h6>
                            </div>
                        </div>
                    </div>
                </li>
                <ul class="list-group mb-3" id="list2"> 
                <li class="list-group-item py-3">
                    <div class="row g-3">
                        <div class="col-4 col-md-3 col-lg-2">
                            <a href="#">
                                <img src="img/produtos/Arroz.jpg" class="img-thumbnail">
                            </a>
                        </div>
                        <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                            <h4>
                                <b><a href="#" class="text-decoration-none text-success">Arroz</a></b>
                            </h4>
                            <h5>
                                Arroz Branco Camil 5Kg
                            </h5>
                        </div>
                        <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                            <div class="input-group">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-up-fill"></i>
                                </button>
                                <input type="text" class="form-control text-center border-dark" value="1">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-down-fill"></i>
                                </button>
                                <button class="btn btn-outline-danger border-dark btn-sm" type="button" onclick="removeList(this)">
                                    <i class="bi-trash"></i>
                                </button>
                            </div>
                            <div class="text-end mt-2">
                                <h6 class="text-dark">
                                    <br>Valor Total: R$ 24,50
                                </h6>
                            </div>
                        </div>
                    </div>
                </li>
                <ul class="list-group mb-3" id="list3">
                <li class="list-group-item py-3">
                    <div class="row g-3">
                        <div class="col-4 col-md-3 col-lg-2">
                            <a href="#">
                                <img src="img/produtos/Feijão.jpg" class="img-thumbnail">
                            </a>
                        </div>
                        <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                            <h4>
                                <b><a href="#" class="text-decoration-none text-success">Feijão</a></b>
                            </h4>
                            <h5>
                                Feijão Carioca Camil 1Kg
                            </h5>
                        </div>
                        <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                            <div class="input-group">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-up-fill"></i>
                                </button>
                                <input type="text" class="form-control text-center border-dark" value="1">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-down-fill"></i>
                                </button>
                                <button class="btn btn-outline-danger border-dark btn-sm" type="button" onclick="removeList(this)">
                                    <i class="bi-trash"></i>
                                </button> 
                            </div>
                            <div class="text-end mt-2">
                                <h6 class="text-dark">
                                    <br>Valor Total: R$ 12,50
                                </h6>
                            </div>
                        </div>
                    </div>
                </li>
                <ul class="list-group mb-3" id="list4">
                <li class="list-group-item py-3">
                    <div class="row g-3">
                        <div class="col-4 col-md-3 col-lg-2">
                            <a href="#">
                                <img src="img/produtos/Papel Hig.jpg" class="img-thumbnail">
                            </a>
                        </div>
                        <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                            <h4>
                                <b><a href="#" class="text-decoration-none text-success">Papel Higiênico</a></b>
                            </h4>
                            <h5>
                                Papel Higiênico Neve
                            </h5>
                        </div>
                        <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                            <div class="input-group">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-up-fill"></i>
                                </button>
                                <input type="text" class="form-control text-center border-dark" value="1">
                                <button class="btn btn-outline-dark btn-sm" type="button">
                                    <i class="bi bi-caret-down-fill"></i>
                                </button>
                                <button class="btn btn-outline-danger border-dark btn-sm" type="button" onclick="removeList(this)">
                                    <i class="bi-trash"></i>
                                </button>
                            </div>
                            <div class="text-end mt-2">
                                <h6 class="text-dark">
                                    <br>Valor Total: R$ 12,00
                                </h6>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list-group-item py-3">
                    <div class="text-end">
                        <h4 class="text-dark mb-3">
                            Valor Total: R$ 0,00
                        </h4>
                        <a href="index.html" class="btn btn-outline-success btn-lg">
                            Continuar Comprando                            
                        </a>
                        <a href="#" class="btn btn-success btn-lg ms-2 mt-xs-3">Fechar Compra</a>
                    </div>
                </li>
            </ul>
        </div>
    </main> 
~~~~         
     
#javascript
~~~~javascript
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
    document.addEventListener("DOMContentLoaded", function() {
    var inputGroups = document.querySelectorAll(".input-group");
    var baseValues = [4.50, 24.50, 12.50, 12.00]; 
    var totalValues = document.querySelectorAll(".text-dark");

    inputGroups.forEach(function(group, index) {
        var input = group.querySelector("input");
        var increaseButton = group.querySelector(".bi-caret-up-fill");
        var decreaseButton = group.querySelector(".bi-caret-down-fill");

        increaseButton.addEventListener("click", function() {
            var value = parseInt(input.value);
            if (value < 10) {
                input.value = value + 1;
                updateTotalValue(index);
                calcularValorTotal();
            }
        });

        decreaseButton.addEventListener("click", function() {
            var value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
                updateTotalValue(index);
                calcularValorTotal();
            }
        });

        function updateTotalValue(index) {
            var value = parseInt(input.value);
            var totalPrice = baseValues[index] * value;
            totalValues[index].textContent = "Valor Total: R$ " + totalPrice.toFixed(2);
        }
    });

    var h4Total = document.querySelector("h4.text-dark.mb-3");

    function calcularValorTotal() {
        var totalSum = 0;

        inputGroups.forEach(function(group, index) {
            var input = group.querySelector("input");
            var value = parseInt(input.value);
            if (!isNaN(value)) {
                var totalPrice = baseValues[index] * value;
                totalSum += totalPrice;
            }
        });

        h4Total.textContent = "Valor Total: R$ " + totalSum.toFixed(2);
    }

    calcularValorTotal();
});
function removeList(icon) {
            var listItem = icon.closest('.list-group-item');
            listItem.remove();
            }
~~~~
## Barra de Busca e Filtro de Pesquisa

![Captura de tela 2023-05-14 203251](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t15-e1-proj-web-t15-time-1-projprecocerto/assets/74187849/1f7dcdc6-065a-4150-bee1-54b40d103ec0)

#html
~~~~html
<main class="flex-fill">
   <div class="container">
       <div class="row">
           <div class="col-12 col-md-5">
               <form class="justify-content-center justify-content-md-start mb-3 mb-md-0">
                   <div class="input-group input-group-sm">
                       <input type="search" class="form-control" id="search-bar" placeholder="Busque aqui seu produto">
                   </div>
               </form>
           </div>
           <div class="col-12 col-md-7">
               <div class="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                   <form class="d-inline-block">
                       <select class="form-select form-select-sm">
                           <option>Ordenar pelo nome</option>
                           <option>Ordenar pelo menor preço</option>
                           <option>Ordenar pelo maior preço</option>
                       </select>
                   </form>
  ~~~~                        
#JavaScript                          
~~~~javascript
                      
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const productList = document.getElementById('product-list');
    const products = productList.getElementsByClassName('col-xl-3');
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const title = product.getElementsByClassName('card-title')[0].textContent.toLowerCase();
        
        if (title.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    }
});
~~~~




