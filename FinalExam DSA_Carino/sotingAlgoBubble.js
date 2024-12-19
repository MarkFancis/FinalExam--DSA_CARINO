let numbers = [];


function getNumbers() {
    for (let i = 0; i < 10; i++) {
        let input = prompt(`Enter number ${i + 1}:`);
        
        numbers.push(Number(input));
    }
}


function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            console.log(`Comparing ${arr[i]} and ${arr[i + 1]}`); 
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;  
    } while (swapped);
}

function logSortedArray() {
    console.log("Sorted Array: " + numbers.join(", "));
}

getNumbers();

bubbleSort(numbers);

logSortedArray();