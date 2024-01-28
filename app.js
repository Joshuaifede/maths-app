class MathUtility {
static PI = 3.14159;
static add(a, b) {
return a + b;
}
static subtract(a, b) {
return a - b;
}
} 
console.log(MathUtility.PI); // Output: 3.14159
console.log(MathUtility.add(5, 3)); // Output: 8
console.log(MathUtility.subtract(5, 3)); // Output: 2

class DescriptiveStatistics {
static mean(data) {
const sum = data.reduce((acc, val) => acc + val, 0);
return sum / data.length;
}
static median(data) {
const sortedData = data.slice().sort((a, b) => a - b);
const middle = Math.floor(sortedData.length / 2);
if (sortedData.length % 2 === 0) {
return (sortedData[middle - 1] + sortedData[middle]) / 2;
} else {
return sortedData[middle];
}
}
static range(data) {
const max = Math.max(...data);
const min = Math.min(...data);
return max - min;
}
}
const dataset = [4, 7, 2, 8, 5, 9, 1, 6, 3];
console.log(DescriptiveStatistics.mean(dataset)); // Output: 5
console.log(DescriptiveStatistics.median(dataset)); // Output: 5
console.log(DescriptiveStatistics.range(dataset)); // Output: 8