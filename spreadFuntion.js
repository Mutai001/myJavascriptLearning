function findMax(arr) {
	return Math.max(...arr)
}

function mergeArrays(arr1, arr2) {
	return [...arr1, ...arr2]
}

function cloneObject(obj) {
	return { ...obj }
}

function mergeObjects(obj1, obj2) {
	return { ...obj1, ...obj2 }
}

export { findMax, mergeArrays, cloneObject, mergeObjects }
