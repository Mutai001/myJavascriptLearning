// Fetch data with query parameters
const params = new URLSearchParams({ key1: 'value1', key2: 'value2' });
fetch(`https://api.example.com/data?${params}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));