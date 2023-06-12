import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      <Button style={{border: 'none'}} onClick={(childParam)=> {
        console.log('validé', childParam)
      }}><img src='/img/valid.png'/></Button>
      <Button bgColor="white">Annuler</Button>
    </div>
  );
}

export default App;
