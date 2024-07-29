// Abort a fetch request
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Request was aborted');
        } else {
            console.error('Error:', error);
        }
    });

// Abort the request
controller.abort();