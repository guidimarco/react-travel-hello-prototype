export default function journeyReducer(state = [], action) {
    switch (action.type) {
        case "ADD_JOURNEY":
            return [...state, action.payload]

        default:
            return state
    }
}