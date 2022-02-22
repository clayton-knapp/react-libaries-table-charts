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
      // console.log(acc[curr.state].count, curr.state);
    } else { //this happens on the first time 
      acc[curr.state] = {}; //initializes an empty object
      acc[curr.state].count = 1; //sets count to 1
      acc[curr.state].total = curr.invoice_amount; //sets total to initial invoice amount
      // console.log(acc[curr.state].count, curr.state);
    }

    return acc;
  }, {});
  
  // returns an object of objects like this: {
  //   "California": {
  //     "count": 49,
  //     "total": 616444
  // },
  
  const entries = Object.entries(countTotalObject);
  // console.log(entries);

  const data = entries.map(entry=> (
    {
      state: entry[0],
      total: entry[1].total
    }));
  // console.log(data);

  return data;
}


export function totalInvoicesByProjectType(dataArr) {
  const countTotalObject = dataArr.reduce((acc, curr) => {
    if (acc[curr.kind_of_project]) {
      acc[curr.kind_of_project].count++;
      acc[curr.kind_of_project].total = acc[curr.kind_of_project].total + curr.invoice_amount;
      // console.log(acc[curr.state].count, curr.state);
    } else { //this happens on the first time 
      acc[curr.kind_of_project] = {}; //initializes an empty object
      acc[curr.kind_of_project].count = 1; //sets count to 1
      acc[curr.kind_of_project].total = curr.invoice_amount; //sets total to initial invoice amount
      // console.log(acc[curr.state].count, curr.state);
    }

    return acc;
  }, {});
  
  // returns an object of objects like this: {
  //   "California": {
  //     "count": 49,
  //     "total": 616444
  // },
  
  const entries = Object.entries(countTotalObject);
  // console.log(entries);

  const data = entries.map(entry=> (
    {
      x: entry[0],
      y: entry[1].total
    }));
  // console.log(data);

  return data;
}