import { combineReducers } from "redux";
// import { ACTION } from "./actions";
import productSlice from "./productSlice";
import filterSlice from "./filterSlice";

// const initState = {
//     products: [],
//     filters: {
//         searchText: "",
//         status: [],
//         brand: "All",
//         category: "All",
//         price: "0,0",
//     },
// };

// const rootReducer = (state = initState, action) => {
//     switch (action.type) {
//         // chuyen qua productSlice
//         // case ACTION.FETCH_DATA: {
//         //     return {
//         //         ...state,
//         //         products: action.payload,
//         //     };
//         // }
//         case ACTION.SEARCH_TEXT: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     searchText: action.payload,
//                 },
//             };
//         }
//         case ACTION.SEARCH_CATEGORY: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     category: action.payload,
//                 },
//             };
//         }
//         case ACTION.SEARCH_BRAND: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     brand: action.payload,
//                 },
//             };
//         }
//         case ACTION.SEARCH_PRICE: {
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     price: action.payload,
//                 },
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// };

const rootReducer = combineReducers({
    products: productSlice,
    filters: filterSlice,
});
export default rootReducer;
