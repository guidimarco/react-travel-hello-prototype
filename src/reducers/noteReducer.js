export default function noteReducer(state = [], action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, action.payload]

        default:
            return state
    }
}