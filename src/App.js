import './App.css';
import DataGrid from 'react-data-grid';
import data from './data.js';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie, VictoryLine, VictoryAxis } from 'victory';
import { generateColumns, totalInvoicesPerMonth } from './data-utils';
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
  // console.log(totalPerProjectType);

  const totalInvoicesPerMonthData = totalInvoicesPerMonth(data);
  // console.log(totalInvoicesPerMonthData);

  return (
    <div className="App">
      <div className='data-grid'>
        <DataGrid 
          columns={columns} 
          rows={rows} 
        />
      </div>
      <div className='chart'>
        <h2>Invoice Total Per State:</h2>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={10}
          style={{
            parent: {
              border: '1px solid black'
            }
          }}
          width={500}
          height={500}
        >
          <VictoryAxis
            // tickValues={[]}
            style={{ tickLabels: { fontSize: 7 } }}
          />
          <VictoryAxis
            dependentAxis
            // tickValues={[]}
            style={{ tickLabels: { fontSize: 10 } }}
          />
          <VictoryBar horizontal
            // style={{ data: { fill: '#c43a31' } }}
            data={totalPerStateData}
            x='state'
            y='total'
            style={{
              data: {
                fill: ({ datum }) => datum.x === 3 ? '#000000' : '#c43a31',
                stroke: ({ index }) => +index % 2 === 0 ? '#000000' : '#c43a31',
                fillOpacity: 0.7,
                strokeWidth: 3
              },
              labels: {
                fontSize: 30,
                fill: ({ datum }) => datum.x === 3 ? '#000000' : '#c43a31'
              }
            }}
          />
        </VictoryChart>
      </div>


      <div>
        <h2>Percentage of Job Type</h2>
        <VictoryPie 
          data={totalPerProjectType}
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          // categories={{ x: ['dogs', 'cats', 'mice'] }}
          // labels={({ datum }) => `${datum.x}`}
          style={{
            labels: {
              fontSize: 7, fill: '#c43a31'
            }
          }}
          padding={{ left: 100, right: 100 }}
          labelPlacement={({ index }) => 'parallel'}

        />
      </div>



      <div className='line'>
        <h2>Invoice Total Per Month:</h2>
        <VictoryChart
          theme={VictoryTheme.material}
          style={{
            parent: {
              border: '1px solid black'
            }
          }}
        >
          <VictoryAxis
            // tickValues={[]}
            style={{ tickLabels: { fontSize: 10 } }}
          />
          <VictoryAxis
            dependentAxis
            // tickValues={[]}
            style={{ tickLabels: { fontSize: 10 } }}
          />
          <VictoryLine
            data={totalInvoicesPerMonthData}
            style={{
              // data: {
              //   stroke: '#c43a31',
              //   strokeWidth: ({ data }) => data.length
              // },
              labels: {
                fontSize: 10,
                fill: ({ datum }) => datum.x === 3 ? '#000000' : '#c43a31'
              }
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default App;
