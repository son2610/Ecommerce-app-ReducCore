import { ACTION } from "./actions";

const initState = [];

const productSlice = (state = initState, action) => {
    switch (action.type) {
        case ACTION.FETCH_DATA:
            return [...action.payload];

        default:
            return state;
    }
};

export default productSlice;
