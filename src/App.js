import React from 'react';
import './App.css';
import SearchPage from './containers/searchPage';
    
  function App() {
    console.log("running App")
    return (
      <>
        <div className='backgroundAnimation'></div>
        <SearchPage />
      </>
    )
  }
export default App;
