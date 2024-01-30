import { ACTION } from "./actions";

const initState = {
    searchText: "",
    status: [],
    brand: "All",
    category: "All",
    price: "0,0",
};

const filterSlice = (state = initState, action) => {
    switch (action.type) {
        case ACTION.SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.payload,
            };
        }
        case ACTION.SEARCH_CATEGORY: {
            return {
                ...state,

                ...state,
                category: action.payload,
            };
        }
        case ACTION.SEARCH_BRAND: {
            return {
                ...state,
                brand: action.payload,
            };
        }
        case ACTION.SEARCH_PRICE: {
            return {
                ...state,
                price: action.payload,
            };
        }

        default:
            return state;
    }
};

export default filterSlice;
