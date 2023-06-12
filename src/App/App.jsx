import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setcounter] = useState(0);
  useEffect(()=> {
    console.log('value post setCounter', counter)
    return () => {
      //console.log('cleanup')
    }
  } ,[counter])
  useEffect(()=> {
    console.log('creation du composant set etat initial')
    setcounter(5)
  }, [])
  return (
    <div className='App'>
      voici la valeur de counter : {counter}
      <hr/>
      <Button className={"primary"} onClick={()=> {
        setcounter(counter+1)
        console.log(counter)
      }}>+1</Button>
      <Button className={"error"} onClick={()=>{
        setcounter(counter-1)
        console.log(counter)
      }}>-1</Button>
    </div>
  );
}

export default App;
