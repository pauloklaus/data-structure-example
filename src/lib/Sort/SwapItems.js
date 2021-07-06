function swapItems(items, index1, index2) {
    const item1 = items[index1];
    items[index1] = items[index2];
    items[index2] = item1;
}

export default swapItems;
