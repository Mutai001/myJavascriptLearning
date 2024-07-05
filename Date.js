console.log('JavaScript Date Object Lab');

// Create a new Date object called `currentDate` and log it
const currentDate = new Date();
console.log('Current Date and Time:', currentDate);

// Function to format date in 'dd-mm-yyyy' format
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

// Function to get the day of the week as a string
function getDayName(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// Export the formatDate function using ESM syntax
export { formatDate };

// Example usage (uncomment for testing)
// const formattedDate = formatDate(currentDate);
// const dayName = getDayName(currentDate);
// console.log('Formatted Date:', formattedDate);
// console.log('Day of the Week:', dayName);