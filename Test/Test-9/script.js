function fetchProduct() {
    const search = document.getElementById('searchInput').value;

    if (search === '') {
        document.getElementById('results').innerHTML = '<p>Please enter a search item.</p>';
        return; // Exit the function if there's no search term
    }

    fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results

            if (data.products && data.products.length > 0) {
                data.products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.innerHTML = `<h3>${product.title}</h3>`;
                    resultsDiv.appendChild(productDiv);
                });
            } 
        })
}
