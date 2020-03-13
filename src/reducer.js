export const INCREASE_NUMBER = 'INCREASE_NUMBER'
export const RESET_NUMBER = 'RESET_NUMBER'
export const SWITCH_COUNTER_MODE = 'SWITCH_COUNTER_MODE'
export const SET_COUNTER = 'SET_COUNTER'
export const VALUES_FUNC_1 = 'VALUES_FUNC_1'
export const VALUES_FUNC_2 = 'VALUES_FUNC_2'
export const VALUES_FUNC_3 = 'VALUES_FUNC_3'
export const VALUES_FUNC_4 = 'VALUES_FUNC_4'
export const SET_VALUES_FUNC_1 = 'SET_VALUES_FUNC_1'
export const SET_VALUES_FUNC_2 = 'SET_VALUES_FUNC_2'
export const INIT_STATE = 'INIT_STATE'

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
    ],
    inputs: [
        {id: 0, title: 'max value: '},
        {id: 1, title: 'min value: '}
    ]

}
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case INIT_STATE:
            return {
                ...action.initState
            }
        case INCREASE_NUMBER:
            if (state.counterNumber >= state.maxNumber - 1) {
                return {
                    ...state,
                    isIncDisabled: true,
                    isResetDisabled: false,
                    counterNumber: +state.counterNumber + 1
                }
            } else if (state.counterNumber > state.minNumber && state.counterNumber < state.maxNumber) {
                return {
                    ...state,
                    isResetDisabled: false,
                    isIncDisabled: false,
                    counterNumber: +state.counterNumber + 1
                }
            } else {
                return {
                    ...state,
                    isResetDisabled: false,
                    isIncDisabled: false,
                    counterNumber: +state.counterNumber + 1
                }
            }

        case RESET_NUMBER:
            if (state.counterNumber <= state.minNumber) {
                return {
                    ...state,
                    isResetDisabled: true,
                }
            } else if (state.counterNumber > state.minNumber && state.counterNumber < state.maxNumber) {
                return {
                    ...state,
                    isResetDisabled: true,
                    isIncDisabled: false,
                    counterNumber: state.minNumber
                }
            } else {
                return {
                    ...state,
                    isResetDisabled: true,
                    isIncDisabled: false,
                    counterNumber: state.minNumber
                }
            }
        case SWITCH_COUNTER_MODE:
            return {
                ...state,
                isEditMode: true
            }
        case SET_COUNTER:
            return {
                ...state,
                isIncDisabled: false,
                isResetDisabled: true,
                isEditMode: false
            }
        case VALUES_FUNC_1:
            return {
                ...state,
                incorrectMinValue: true,
                incorrectMaxValue: false
            }
        case VALUES_FUNC_2:
            return {
                ...state,
                incorrectMinValue: false,
                incorrectMaxValue: true
            }
        case VALUES_FUNC_3:
            return {
                ...state,
                incorrectMinValue: true,
                incorrectMaxValue: true
            }
        case VALUES_FUNC_4:
            return {
                ...state,
                incorrectMinValue: false,
                incorrectMaxValue: false
            }
        case SET_VALUES_FUNC_1:
            return {
                ...state,
                error: true,
                isIncDisabled: true,
                isResetDisabled: true,
                minNumber: action.minValue,
                maxNumber: action.maxValue,
                counterNumber: action.minValue
            }
        case SET_VALUES_FUNC_2:
            return {
                ...state,
                isIncDisabled: true,
                isResetDisabled: true,
                isEditMode: true,
                minNumber: action.minValue,
                maxNumber: action.maxValue,
                counterNumber: action.minValue,
                error: false,
                incorrectMaxValue: false,
                incorrectMinValue: false
            }
    }
    return state
}
export const increaseNumberAC = () => {return {type: INCREASE_NUMBER}}
export const resetNumberAC = () => {return {type: RESET_NUMBER}}
export const switchCounterModeAC = () => {return {type: SWITCH_COUNTER_MODE}}
export const setCounterAC = () => {return {type: SET_COUNTER}}
export const valuesFunc1AC = () => {return {type: VALUES_FUNC_1}}
export const valuesFunc2AC = () => {return {type: VALUES_FUNC_2}}
export const valuesFunc3AC = () => {return {type: VALUES_FUNC_3}}
export const valuesFunc4AC = () => {return {type: VALUES_FUNC_4}}
export const setValuesFunc1AC = (minValue, maxValue) => {return {type: SET_VALUES_FUNC_1, minValue, maxValue}}
export const setValuesFunc2AC = (minValue, maxValue) => {return {type: SET_VALUES_FUNC_2, minValue, maxValue}}
export const initStateAC = (initState) => {return {type: INIT_STATE, initState}}
export default reducer