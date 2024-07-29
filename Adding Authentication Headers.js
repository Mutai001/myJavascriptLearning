// Add authentication token to the request headers
fetch('https://api.example.com/protected-data', {
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));