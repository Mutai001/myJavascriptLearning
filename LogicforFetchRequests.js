// Retry logic for fetch requests
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (attempt < retries - 1) {
                await new Promise(res => setTimeout(res, delay));
            } else {
                throw error;
            }
        }
    }
}

fetchWithRetry('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));