import React from 'react';
import logo from './logo.svg';
import Box from './components/Box';
import './App.css';

function App() {
  return (
    <div className="bg-blue-500 w-full">
      <header>
        <Box>THIS SHOULD BE WRAPPED WITH A DIV</Box>
        <Box as="p">THIS SHOULD BE WRAPPED WITH A Paragraph TAG</Box>
      </header>
    </div>
  );
}

export default App;
