export const mostCommon = (arr) => {
	// Check if the array is empty
	if (arr.length === 0) {
		return null
	}

	// Initialize dictionaries to count occurrences and track first occurrences
	const count = {}
	const firstIndex = {}

	// Loop through the array to fill the dictionaries
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]
		if (count[element] == null) {
			count[element] = 0
			firstIndex[element] = i
		}
		count[element]++
	}

	// Initialize variables to find the most common element
	let maxCount = 0
	let mostCommonElement = null

	// Loop through the count dictionary to find the most common element
	for (const [element, cnt] of Object.entries(count)) {
		if (
			cnt > maxCount ||
			(cnt === maxCount &&
				firstIndex[element] < firstIndex[mostCommonElement])
		) {
			maxCount = cnt
			mostCommonElement = element
		}
	}

	return mostCommonElement
}

// Example test cases
const words1 = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
const mostCommonWord1 = mostCommon(words1)
console.log(mostCommonWord1) // "apple"

const words2 = ['apple', 'banana', 'apple', 'banana', 'banana', 'apple']
const mostCommonWord2 = mostCommon(words2)
console.log(mostCommonWord2) // "apple"
