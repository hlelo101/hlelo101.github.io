// Sample data for articles
const articles = [
    { title: "Introduction to HTML", content: "HTML is the standard markup language for creating web pages." },
    { title: "CSS Basics", content: "CSS is used for styling web pages. Learn the basics of CSS properties and selectors." },
    { title: "JavaScript Fundamentals", content: "JavaScript is a programming language that enables interactive web pages. Learn about variables, functions, and control flow." }
];

// Function to perform search
function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    // Filter articles based on search input
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchInput) || article.content.toLowerCase().includes(searchInput)
    );

    // Display search results
    filteredArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
        `;
        results.appendChild(articleElement);
    });
}