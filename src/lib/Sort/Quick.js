function startSort(items) {
    if (items.length < 2)
        return items;

    var pivot = items[0];
    var left = [];
    var right = [];

    for (var i = 1; i < items.length; i++)
        items[i] < pivot ? left.push(items[i]) : right.push(items[i]);

    console.log([...left], pivot, [...right]);
    return startSort(left).concat(pivot, startSort(right));
}
  
function quickSort(items) {
    console.time("quickSort()");
    const sort = startSort(items, 0, items.length - 1);

    console.timeEnd("quickSort()");
    return sort;
}

export default quickSort;
