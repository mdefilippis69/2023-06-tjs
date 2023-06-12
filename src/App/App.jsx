import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  let counter=0;
  return (
    <div className='App'>
      voici la valeur de counter : {counter}
      <hr/>
      <Button className={"primary"} onClick={()=> {
        counter+=1
        console.log(counter)
      }}>+1</Button>
      <Button className={"error"} onClick={()=>{
        counter-=1
        console.log(counter)
      }}>-1</Button>
    </div>
  );
}

export default App;
