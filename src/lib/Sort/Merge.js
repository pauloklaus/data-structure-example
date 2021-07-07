function mergeItems(items, low, half, high) {
    let currentLow = low;
    let currentHigh = half;
    let newItems = [];

    while (currentLow < half && currentHigh < high)
        if (items[currentLow] < items[currentHigh]) {
            newItems.push(items[currentLow]);
            currentLow++;
        }
        else {
            newItems.push(items[currentHigh]);
            currentHigh++;
        }
    
    while (currentLow < half) {
        newItems.push(items[currentLow]);
        currentLow++;
    }
    
    while (currentHigh < high) {
        newItems.push(items[currentHigh]);
        currentHigh++;
    }

    for (let index = 0; index < (high - low); index++)
        items[low + index] = newItems[index];

    console.log("mergeItems()", [...items]);
}

function splitItems(items, low, high) {
    if (high - low < 2)
        return;

    const half = Math.floor((low + high) / 2);
    splitItems(items, low, half);
    splitItems(items, half, high);
    mergeItems(items, low, half, high);

    console.log("splitItems()", [...items]);
}

function mergeSort(items) {
    console.time("mergeSort()");

    if (items.length > 1)
        splitItems(items, 0, items.length - 1);

    console.timeEnd("mergeSort()");
    return items;
}

export default mergeSort;
