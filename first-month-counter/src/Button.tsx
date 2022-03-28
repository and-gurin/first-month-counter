import React from 'react';
type ButtonPropsType = {
    name: string
    callBack: ()=> void
    disabledValue: boolean
}
export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
      props.callBack()
    }
    const disabledHandler = () => {
      
    }
    return (
        <button disabled={props.disabledValue}
                className={props.disabledValue? 'Button-disabled' : 'Button'}
                onClick={onClickButtonHandler}
        >{props.name}</button>
    );
};
