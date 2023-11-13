document.addEventListener('DOMContentLoaded', function () {
    fetchData('https://api.example.com/news')
        .then(data => {
            updateUIWithData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Add event listener for a button
    const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', function () {
        handleButtonClick();
    });
});

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

function updateUIWithData(data) {
    const newsContainer = document.getElementById('newsContainer');

    data.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        articleElement.innerHTML = `
            <h2 style="color: var(--almost-black); font-weight: 700;">${article.title}</h2>
            <p style="color: var(--medium-gray);">${article.summary}</p>
            <a href="${article.url}" target="_blank" style="color: var(--almost-black); font-weight: 700; text-decoration: none;">Read more</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}

function handleButtonClick() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

