function search() {
    var query = document.getElementById('searchInput').value;
    var apiKey = 'AIzaSyC0zi-zDEimGRgJ1ST_nZZEjJYKOD6mETA'; 
    var cx = '67a766b97215d47a5'; 

    fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.items);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
}

function displaySearchResults(results) {
    var main = document.querySelector('main');
    main.innerHTML = ''; 

    results.forEach(result => {
        var link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.title;
        link.setAttribute('target', '_blank');

        var snippet = document.createElement('p');
        snippet.textContent = result.snippet;

        var div = document.createElement('div');
        div.appendChild(link);
        div.appendChild(snippet);

        main.appendChild(div);
    });
}