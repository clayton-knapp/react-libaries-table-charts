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


export function totalInvoicesPerMonth(data) {
  const thing = data.reduce((acc, customer) => {
    const monthCode = customer.date.substr(0, 2);
    const monthMap = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    };
    const month = monthMap[monthCode];
    if (acc[month]) {
      acc[month] = acc[month] + customer.invoice_amount;
    }
    else {
      acc[month] = customer.invoice_amount;
    }
    return acc;
  }, {});

  // console.log('firstthing', thing);

  const newThing = Object.entries(thing).map(entry => 
    // return {
    ({ 'x': entry[0], 'y': entry[1] })
    // };
  );

  // console.log(newThing);
  const finalThing = [newThing[8], newThing[7], newThing[1], newThing[5], newThing[10], newThing[2], newThing[6], newThing[11], newThing[3], newThing[0], newThing[4], newThing[9]];

  return finalThing;


  //what do i need it to look like?
  // data={[
  //   { month: 1, total_invoices: 2 },
  //   { x: 2, y: 3 },
  //   { x: 3, y: 5 },
  //   { x: 4, y: 4 },
  //   { x: 5, y: 7 }
  // ]}
}