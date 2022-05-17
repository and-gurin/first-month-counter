import React, {ChangeEvent, useEffect} from 'react';
import {Button} from "./Button";

type CountSetPropsType = {
    setCountValue: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number
    setStartValue: (newValue: number)=>void
    setMaxValue: (newValue: number)=>void
    wrongValue:boolean

}
export const CountSet = (props: CountSetPropsType) => {
    const {setStartValue, setMaxValue, maxValue, startValue, wrongValue} = props

    useEffect(()=>{
        let startValueAsString = localStorage.getItem('startValue')
        if(startValueAsString){
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(()=>{
        let maxValueAsString = localStorage.getItem('maxValue')
        if(maxValueAsString){
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])



    const oneChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
    }
    const oneChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
    }
    const setCountValue = () => {
        props.setCountValue(startValue, maxValue)
    }


    return (
        <div>
            <div className={'CountSet'}>
                <div><span>start value</span>
                    <input type='number'
                           value={startValue}
                           onChange={oneChangeStartValueHandler}
                           className={wrongValue ? 'Input_mist' : 'Input'}/></div>
                <div><span>max value</span>
                    <input type='number'
                           value={maxValue}
                           onChange={oneChangeMaxValueHandler}
                           className={wrongValue ? 'Input_mist' : 'Input'}/></div>
            </div>
            <div className={"Button-block"}>
                <Button disabledValue={wrongValue}
                        callBack={setCountValue}
                        name={'set'}/>
            </div>
        </div>

    );
};
