import React from 'react';
import logo from './logo.svg';
import './App.css';

import apiClient from './helpers/apiClient';
import applicationContext from "./context/applicationContext";
import ContentContainer from "./components/ContentContainer";

function App() {
  const restApi = new apiClient();

  return (
    <div className="App">
      <applicationContext.Provider value={{api: restApi}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ContentContainer />
        </header>
      </applicationContext.Provider>
    </div>
  );
}

export default App;
