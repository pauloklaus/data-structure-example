import swapItems from "@/lib/Sort/SwapItems";

function selectLow(items, low, high) {
    let lowIndex = low;

    for (let index = low; index <= high; index++)
        if (items[lowIndex] > items[index])
            lowIndex = index;

    return lowIndex;
}

function selectionSort(items) {
    if (items.length > 1)
        for (let index = 0; index < items.length; index++)
            swapItems(items, selectLow(items, index, items.length - 1), index);
    
    return items;
}

export default selectionSort;
