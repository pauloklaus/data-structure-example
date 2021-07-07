import swapItems from "@/lib/Sort/SwapItems";

function partition(items, low, high) {
    let lowIndex = low;

    for (let index = low; index < high; index++)
        if (items[index] < items[high]) {
            swapItems(items, index, lowIndex);
            lowIndex++;
        }

    swapItems(items, lowIndex, high);
    console.log("partition()", [...items]);
    return lowIndex;
}

function startSort(items, low, high) {
    if (high - low > 0) {
        const partitionIndex = partition(items, low, high);
        startSort(items, low, partitionIndex - 1);
        startSort(items, partitionIndex + 1, high);
    }
    console.log("quickSort()", [...items]);
}

function quickSort(items) {
    console.time("quickSort()");

    if (items.length > 1)
        startSort(items, 0, items.length - 1);

    console.timeEnd("quickSort()");
    return items;
}

export default quickSort;
