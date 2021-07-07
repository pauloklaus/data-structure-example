import swapItems from "@/lib/Sort/SwapItems";

function bubbleSort(items) {
    console.time("bubbleSort()");

    if (items.length > 1) {
        let walk = false;

        do {
            walk = false;
            for (let index = 0; index < items.length - 1; index++)
                if (items[index] > items[index + 1]) {
                    swapItems(items, index, index + 1);
                    walk = true;
                }
            console.log([...items]);
        } while (walk)
    }

    console.timeEnd("bubbleSort()");
    return items;
}

export default bubbleSort;
