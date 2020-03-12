export const INCREASE_NUMBER = 'INCREASE_NUMBER'
export const RESET_NUMBER = 'RESET_NUMBER'
export const DISABLE_FUNC_1 = 'DISABLE_FUNC_1'
export const DISABLE_FUNC_2 = 'DISABLE_FUNC_2'
export const DISABLE_FUNC_3 = 'DISABLE_FUNC_3'
export const DISABLE_FUNC_4 = 'DISABLE_FUNC_4'
export const SWITCH_COUNTER_MODE = 'SWITCH_COUNTER_MODE'
const initialState = {
    minNumber: 0,
    maxNumber: 5,
    counterNumber: 0,
    isIncDisabled: false,
    isResetDisabled: true,
    isEditMode: false,
    error: false,
    incorrectMaxValue: false,
    incorrectMinValue: false,
    buttons: [
        {id: 0, title:'inc'},
        {id: 1, title:'reset'},
        {id: 2, title:'set'},
        {id: 3, title:'set'}
    ]

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_STATE":
            return {
                ...action.initState
            }
        case INCREASE_NUMBER:
            debugger
            return {
                ...state,
                counterNumber: state.counterNumber + 1
            }
        case RESET_NUMBER:
            return {
                ...state,
                counterNumber: state.minNumber
            }
        case DISABLE_FUNC_1:
            return {
                ...state,
                counterNumber: state.maxNumber,
                isIncDisabled: true,
                isResetDisabled: false
            }
            case DISABLE_FUNC_2:
            return {
                ...state,
                isResetDisabled: false,
                isIncDisabled: false
            }
            case DISABLE_FUNC_3:
            return {
                ...state,
                isResetDisabled: true,
                isIncDisabled: false
            }
            case DISABLE_FUNC_4:
            return {
                ...state,
                isResetDisabled: false,
                isIncDisabled: false
            }
            case SWITCH_COUNTER_MODE:
            return {
                ...state,
                isEditMode: true
            }
    }
    return state
}
export const increaseNumberAC = () => {return {type: INCREASE_NUMBER}}
export const resetNumberAC = () => {return {type: RESET_NUMBER}}
export const disableFunc1AC = () => {return {type: DISABLE_FUNC_1}}
export const disableFunc2AC = () => {return {type: DISABLE_FUNC_2}}
export const disableFunc3AC = () => {return {type: DISABLE_FUNC_3}}
export const disableFunc4AC = () => {return {type: DISABLE_FUNC_4}}
export const switchCounterModeAC = () => {return {type: SWITCH_COUNTER_MODE}}
export default reducer