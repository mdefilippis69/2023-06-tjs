import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      <Button><img src='/img/valid.png'/></Button>
      <Button>Annuler</Button>
    </div>
  );
}

export default App;
