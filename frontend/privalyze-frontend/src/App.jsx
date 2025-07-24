import React from 'react';
import Analyzer from './components/Analyzer';

const App = () => {
  return (
    <div className="app-container">
      <h1>🔒 <span style={{ color: '#007aff' }}>PrivAlyze</span></h1>
      <p className="subtitle">Your Personal Privacy Risk Analyzer</p>
      <Analyzer />
    </div>
  );
};

export default App;
