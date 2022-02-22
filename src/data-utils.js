export function generateColumns(dataArr) {
  const keys = Object.keys(dataArr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key
        .split('_') //makes the string an array of words which were seperated by '_'
        .map(word => word[0].toUpperCase() + word.slice(1)) // maps through the array of words created for each sentence and returns each word with the first letter to uppercase concatted with the rest of the word
        .join(' ') //joins the array as a string with a ' ' in between
    };
  });

  return columns;
}


export function totalInvoicesPerState(dataArr) {
  const countTotalObject = dataArr.reduce((acc, curr) => {
    if (acc[curr.state]) {
      acc[curr.state].count++;
      acc[curr.state].total = acc[curr.state].total + curr.invoice_amount;
    } else {
      acc[curr.state] = {};
      acc[curr.state].count = 1;
      acc[curr.state].total = curr.invoice_amount;
    }

    return acc;
  }, {});

  return countTotalObject;

}