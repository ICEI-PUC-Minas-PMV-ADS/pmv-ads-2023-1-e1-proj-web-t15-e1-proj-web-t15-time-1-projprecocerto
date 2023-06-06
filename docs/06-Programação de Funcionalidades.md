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

### Artefatos da funcionalidade

● carrinho.html

● estilos.css       
     

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




