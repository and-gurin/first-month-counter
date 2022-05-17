import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Count} from "./Count";
import {CountSet} from "./CountSet";

export function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)

    const [maxCount, setMaxCount] = useState(5);
    const [minCount, setMinCount] = useState(0)
    const [count, setCount] = useState<number | string>('input value')

    const wrongValue = startValue < 0 || maxValue <= startValue;

    const increaseCount = () => {
        setCount(+count + 1)
    }
    const resetCount = () => {
        setCount(minCount)
    }

    useEffect(()=>{
        if (wrongValue) {
            setCount('incorrect value')
        } else {
            setCount(minCount)
        }
    },[wrongValue, minCount])


    const setCountValue = (startValue: number, maxValue: number) => {
        setMinCount(startValue)
        setMaxCount(maxValue)
    }

    const disabledReset = count === minCount;
    const disabledInc = count >= maxCount;

    return (
        <div className="Wrapper">
            <div className="App">
                <CountSet setCountValue={setCountValue}
                          setMaxValue={setMaxValue}
                          setStartValue={setStartValue}
                          maxValue={maxValue}
                          startValue={startValue}
                          wrongValue={wrongValue}
                          />
            </div>
            <div className="App">
                <Count wrongValue={wrongValue} count={count}/>
                <div className={"Button-block"}>
                    <Button disabledValue={disabledInc || wrongValue}
                            callBack={increaseCount}
                            name={'inc'}/>
                    <Button disabledValue={disabledReset || wrongValue}
                            name={'reset'}
                            callBack={resetCount}/>
                </div>
            </div>
        </div>

    );
}

