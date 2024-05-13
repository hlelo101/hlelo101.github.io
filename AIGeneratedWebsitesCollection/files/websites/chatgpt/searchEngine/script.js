function search() {
    var searchInput = document.getElementById('searchInput').value;
    var searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    // Perform the search (replace this with your own search logic)
    var results = ['Result 1', 'Result 2', 'Result 3']; // Example results

    // Display the results
    results.forEach(function(result) {
        var resultItem = document.createElement('div');
        resultItem.textContent = result;
        searchResults.appendChild(resultItem);
    });
}
