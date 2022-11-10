import { Increment, Decrement } from "../action/counterAction";

const Initial_State = {
    Value: 0
}

const overAllReducer = (state = Initial_State, action) => {
    const { type, payload } = action
    switch (type) {
        case Increment:
            {
                return { ...state, Value: state.Value + payload }
            }
        case Decrement:
            {
                return { ...state, Value: state.Value - payload }
            }
        default: {
            return { ...state }
        }
    }
}

export default overAllReducer