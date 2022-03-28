import React from 'react';

type CountPropsType = {
    count: number
}
export const Count = (props: CountPropsType) => {
    return (
        <div className={'Count'}>
            {props.count}
        </div>
    );
};
