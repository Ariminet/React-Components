import React from 'react';
import DataList from './Components/DataComp/DataList';
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    // DataProvider shares the context to all children so DataList for this example
    <DataProvider>
      <div className="App">
        <DataList />
      </div>
      ;
    </DataProvider>
  );
}

export default App;
