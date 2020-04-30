const arrayToList = (arr = []) => {
  const list = {};
  let node = list;
  for (let value of arr.slice(0, -1)) {
    node.value = value;
    node.next = { next: null };
    node = node.next;
  }
  node.value = arr[arr.length - 1];
  return list;
};

const listToArray = (list = {}) => {
  const arr = [];
  let node = list;
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
};

const prependToList = (newValue, list = { value: null, next: null }) => {
  const newList = { value: newValue, next: {} };
  let newListNode = newList.next;
  let inputListNode = list;
  while (inputListNode) {
    newListNode.value = inputListNode.value;
    newListNode.next = inputListNode.next;
    newListNode = newListNode.next;
    inputListNode = inputListNode.next;
  }
  return newList;
};

const nthItemInList = (n, list) => {
  if (list === null) return undefined;
  if (n === 0) return list.value;
  return nthItemInList(n - 1, list.next);
};

module.exports = { arrayToList, listToArray, prependToList, nthItemInList };
