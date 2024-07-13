document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postTitles = document.getElementById('postTitles');
            postTitles.innerHTML = ''; // Clear any existing content

            // Loop through the first 20 posts
            data.slice(0, 20).forEach(post => {
                const li = document.createElement('li');
                li.textContent = post.title;
                postTitles.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});