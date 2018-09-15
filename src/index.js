class Sorter {
  constructor() {
    this.collection = {};
    this.index = 0;
  }

  add(element) {
    this.collection[this.index] = element;
    this.index++;
  }

  at(index) {
    return this.collection[index];
  }

  get length() {
    return this.index;
  }

  toArray() {
    return Object.values(this.collection);
  }

  sort(indices) {
    if(indices.length < 2) {return Object.values(this.collection)};
    let sortedIndices = indices.sort();
    let array = Object.values(this.collection).splice(sortedIndices[0], sortedIndices.length);
    let sortedArray = array.sort(function(a, b) {return a > b ? 1 : -1});

    for (let i = 0; i < indices.length; i++) {
      this.collection[indices[i]] = array[i];
    }

    return Object.values(this.collection);
  }


  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
