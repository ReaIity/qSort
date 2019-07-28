function qSort() {
  var arr = [1, 0, 213, 54, 6, 9, 7];
  function quickSort(arr) {
    if (arr.length < 2){
      return arr;
    } else {
      const pivot = arr[Math.floor(Math.random() * arr.length)];
      let a = arr.filter(value => value < pivot);
      let b = arr.filter(value => value > pivot);
      return [ ...quickSort(a), pivot, ...quickSort(b)];
    }
  }
  console.log(quickSort(arr));
}
