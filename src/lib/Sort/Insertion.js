import swapItems from "@/lib/Sort/SwapItems";

function insertionSort(items) {
    console.time("insertionSort()");

    if (items.length > 1)
        for (let index = 0; index < items.length; index++) {
            let compareIndex = index;
            while (compareIndex > 0 && items[compareIndex] < items[compareIndex - 1]) {
                swapItems(items, compareIndex, compareIndex - 1);
                compareIndex--;
            }
            console.log([...items]);
        }
    
    console.timeEnd("insertionSort()");
    return items;
}

export default insertionSort;
