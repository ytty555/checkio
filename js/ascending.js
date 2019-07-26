// Проверяет, являются ли элементы массива упорядоченными по возрастанию

function isAscending(items) {
    if (items == [] || items.length == 1) return true;
    let lastItem = items[0];
    for (let i = 1; i < items.length; i++) {
        if (lastItem > items[i] || lastItem === items[i]) return false;
        lastItem = items[i];
    }
    return true;

}

isAscending([4, 5, 6, 7, 3, 7, 9]);