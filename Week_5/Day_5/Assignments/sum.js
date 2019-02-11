function arrayContainsSum(array, sum) {

  for (
    let i = 0; // 1
    i < array.length; // n + 1
    i++ // n
    ) {
    const element1 = array[i]; // n

    for (
      let ii = 0; // n
      ii < array.length; //n + n^2
      ii++ // n^2
      ) {

      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) { // n^2
        return true;
      }
    }
  }
  return false; // 1
}

//Add all the operations together to get a running time of 3 + 5n + 4n^2

