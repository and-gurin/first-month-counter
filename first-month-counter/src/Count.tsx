import React from 'react';

type CountPropsType = {
    count: number | string
    wrongValue: boolean
}
export const Count = (props: CountPropsType) => {
    return (
            <div className={props.wrongValue ?'Count_mist':'Count'}>
                {props.count}
            </div>
    );
};
