import './App.css';
import DataGrid from 'react-data-grid';
import data from './data.js';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie, VictoryLine } from 'victory';
import { generateColumns } from './data-utils';
import { totalInvoicesPerState, totalInvoicesByProjectType } from './data-utils';


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

  // const chartDataTest = [
  //   { quarter: 1, earnings: 13000 },
  //   { quarter: 2, earnings: 16500 },
  //   { quarter: 3, earnings: 14250 },
  //   { quarter: 4, earnings: 19000 },
  // ];

  // const pieDataTest = [
  //   { x: '1', y: 13000 },
  //   { x: '2', y: 16500 },
  //   { x: '3', y: 14250 },
  //   { x: '4', y: 19000 },
  // ];

  //we want to see Total invoice or profit per state
  //we want to see total invoices per kind of work

  const totalPerStateData = totalInvoicesPerState(data);
  // console.log(totalPerStateData);

  const totalPerProjectType = totalInvoicesByProjectType(data);
  console.log(totalPerProjectType);

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
            data={totalPerStateData}
            x='state'
            y='total'
          />
        </VictoryChart>
      </div>
      <div>
        <VictoryPie 
          data={totalPerProjectType}
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          // categories={{ x: ['dogs', 'cats', 'mice'] }}
        />
      </div>
      <div>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' }
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default App;
