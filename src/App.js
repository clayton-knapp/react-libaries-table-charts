import './App.css';
import DataGrid from 'react-data-grid';
import data from './data.js';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import { generateColumns } from './data-utils';
import { totalInvoicesPerState } from './data-utils';


function App() {

  // const columns = [
  //   { key: 'client_name', name: 'Client Name' },
  //   { key: 'invoice_amount', name: 'Invoice Amount' },
  //   { key: 'project_expense', name: 'Project Expense' },
  //   { key: 'date', name: 'Date' },
  //   { key: 'state', name: 'State' },
  //   { key: 'kind_of_project', name: 'Kind of Project' }
  // ];

  const columns = generateColumns(data);
  
  const rows = data;

  const chartData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  //we want to see Total invoice or profit per state
  //we want to see total invoices per kind of work

  const temp = totalInvoicesPerState(data);
  console.log(temp);

  return (
    <div className="App">
      <div className='data-grid'>
        <DataGrid 
          columns={columns} 
          rows={rows} 
        />
      </div>
      <div>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={10}
        >
          <VictoryBar
            // style={{ data: { fill: '#c43a31' } }}
            data={data}
            x='client_name'
            y='invoice_amount'
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default App;
