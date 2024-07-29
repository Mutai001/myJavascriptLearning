// Fetch data from an API that returns XML
fetch('https://api.example.com/data.xml')
    .then(response => response.text())
    .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
        console.log(xmlDoc);
    })
    .catch(error => console.error('Error:', error));