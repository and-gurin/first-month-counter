

const initialState= {
    value:< number | string> 'initial value'
}
export type InitialStateType = typeof initialState;

export const counterReducer = (state:InitialStateType = initialState, action:counterReducerActionType):InitialStateType=>{
    switch (action.type){
        case "INCREASE-COUNT":
            return {
                ...state, value: +state.value + 1
            }
        case "RESET-COUNT":
            return {
                ...state, value: action.minCount
            }
        case "WRONG-VALUE" :
            return {
                ...state, value: action.error
            }

    }
    return state
}

export const increaseCountAC = ()=>({type: 'INCREASE-COUNT'} as const )
export const resetCountAC = (minCount:number)=>({type: 'RESET-COUNT', minCount: minCount} as const )
export const wrongValueAC = (error:string)=>({type: "WRONG-VALUE", error: error} as const )

export type IncreaseCountActionType = ReturnType<typeof increaseCountAC>
export type ResetCountActionType = ReturnType<typeof resetCountAC>
export type WrongValueActionType = ReturnType<typeof wrongValueAC>

export type counterReducerActionType = IncreaseCountActionType | ResetCountActionType | WrongValueActionType

/*
export const increaseCountTC = (startValue: number | string)=> (dispatch: Dispatch)=>{
    localStorage.setItem('startValue', JSON.stringify(startValue))
    dispatch(increaseCountAC())
}*/
