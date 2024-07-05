// Simulate API calls by returning Promises
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
        }, 1000);
    });
}

// Export the functions
export { getUsers, getPosts };

// Use Promise.all() to call both functions concurrently
Promise.all([getUsers(), getPosts()])
    .then(([users, posts]) => {
        console.log('Users:', users);
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// Logging to ensure code runs
console.log('Hello world');