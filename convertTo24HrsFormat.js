function convertTo24HrsFormat(time) {
    // Extract the hour, minute, and period (AM/PM) using a regular expression
    const timeRegex = /^(\d{1,2}):(\d{2})(AM|PM)$/;
    const match = time.match(timeRegex);

    if (!match) {
        throw new Error("Invalid time format");
    }

    let [_, hour, minute, period] = match;
    hour = parseInt(hour);

    if (period === "PM" && hour !== 12) {
        hour += 12;
    } else if (period === "AM" && hour === 12) {
        hour = 0;
    }

    // Format the hour to have two digits
    const hourStr = hour.toString().padStart(2, '0');

    return `${hourStr}:${minute}`;
}

// Sample Test Cases
console.log(`Converted time: ${convertTo24HrsFormat("12:10AM")}`); // Output should be '00:10'
console.log(`Converted time: ${convertTo24HrsFormat("1:45PM")}`); // Output should be '13:45'
console.log(`Converted time: ${convertTo24HrsFormat("03:45PM")}`); // Output should be '15:45'