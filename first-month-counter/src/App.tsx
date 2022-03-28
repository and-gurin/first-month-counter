import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Count} from "./Count";

function App() {
    const minCount = 0;
    const maxCount = 5;
  const [count, setCount] = useState(minCount)

  const increaseCount = () => {
      setCount(count + 1)
  }
  const resetCount = () => {
      setCount(minCount)
  }
    const disabledReset = count === minCount ? true : false;
    const disabledInc = count >= maxCount ? true : false;

    return (
    <div className="App">
        <Count count={count}/>
      <div className={"Button-block"}>
        <Button disabledValue={disabledInc} callBack={increaseCount} name={'inc'}/>
        <Button disabledValue={disabledReset} name={'reset'} callBack={resetCount}/>
      </div>
    </div>
  );
}

export default App;
