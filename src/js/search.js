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

