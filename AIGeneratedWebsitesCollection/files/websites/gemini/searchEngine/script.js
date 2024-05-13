function searchFunction() {
    var searchTerm = document.getElementById("search-bar").value.toLowerCase();
    var resultList = document.getElementById("results");
    resultList.innerHTML = ""; // Clear previous results
  
    // Sample data (replace with your website content)
    var content = [
      "This is a sample website page about dogs.",
      "Here you can learn all about cats.",
      "This page has information on different types of birds."
    ];
  
    for (var i = 0; i < content.length; i++) {
      var item = content[i].toLowerCase();
      if (item.includes(searchTerm)) {
        var listItem = document.createElement("li");
        listItem.textContent = content[i];
        resultList.appendChild(listItem);
      }
    }
  
    // Display message if no results found
    if (resultList.childNodes.length === 0) {
      var noResults = document.createElement("li");
      noResults.textContent = "No results found.";
      resultList.appendChild(noResults);
    }
  }  