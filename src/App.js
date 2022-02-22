import './App.css';
import DataGrid from 'react-data-grid';
import data from './data.js';


function App() {

  const columns = [
    { key: 'client_name', name: 'Client Name' },
    { key: 'invoice_amount', name: 'Invoice Amount' },
    { key: 'project_expense', name: 'Project Expense' },
    { key: 'date', name: 'Date' },
    { key: 'state', name: 'State' },
    { key: 'kind_of_project', name: 'Kind of Project' }
  ];
  
  const rows = data;

  return (
    <div className="App">
      <DataGrid 
        columns={columns} 
        rows={rows} 
      />
    </div>
  );
}

export default App;
