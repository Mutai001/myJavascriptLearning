// Upload a file using FormData
const formData = new FormData();
formData.append('file', document.querySelector('input[type="file"]').files[0]);

fetch('https://api.example.com/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));