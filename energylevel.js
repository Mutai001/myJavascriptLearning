/**
 * Calculates the energy points earned by the player.
 * @param {number[]} magicalItems
 * @param {number} level
 * @returns {number} - Energy Points of the user
 */
export const getEnergyPoints = (magicalItems, level) => {
    // Initialize a set to store unique multiples
    const uniqueMultiples = new Set();

    // Iterate over each magical item
    for (const baseValue of magicalItems) {
        // Skip base value 0 to avoid infinite loop
        if (baseValue === 0) continue;

        // Find all multiples of the base value less than the level
        for (let multiple = baseValue; multiple < level; multiple += baseValue) {
            uniqueMultiples.add(multiple);
        }
    }

    // Calculate the sum of all unique multiples
    const totalEnergyPoints = [...uniqueMultiples].reduce((sum, value) => sum + value, 0);

    return totalEnergyPoints;
};

// Sample Tests
console.log(getEnergyPoints([3, 5], 20)); // Expected Output: 78
console.log(getEnergyPoints([3, 5, 8, 12], 24)); // Expected Output: 143
console.log(getEnergyPoints([0], 1)); // Expected Output: 0