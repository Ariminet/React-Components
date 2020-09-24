import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './Components/SearchBar/index';
import ItemComp from './Components/SearchBar/Item/index';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/item/:id" component={ItemComp} />
        <SearchBar />
      </Switch>
    </div>
  );
}

export default App;
