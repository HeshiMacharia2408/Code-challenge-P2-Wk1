import React from "react";
import TransactionsLog from './TransactionsLog'
import TransactionsFilter from './TransactionsFilter'

const App = () => {
    return (
      <div>
        <h1>Banking App of Flatiron</h1>
        <TransactionsLog />
        <TransactionsFilter />
      </div>
    );
  };
  
  export default App;