import { type } from "@testing-library/user-event/dist/type";

export const ACTION = {
    FETCH_DATA: "products/fetchData",
    SEARCH_TEXT: "filters/search",
    SEARCH_STATUS: "filters/searchStatus",
    SEARCH_BRAND: "filters/searchBrand",
    SEARCH_CATEGORY: "filters/searchCategory",
    SEARCH_PRICE: "filters/searchPrice",
};

export function fetchData(payload) {
    return {
        type: ACTION.FETCH_DATA,
        payload,
    };
}

export function setSearchText(payload) {
    return {
        type: ACTION.SEARCH_TEXT,
        payload,
    };
}

export function setSearchStatus(payload) {
    return {
        type: ACTION.SEARCH_STATUS,
        payload,
    };
}

export function setSearchBrand(payload) {
    return {
        type: ACTION.SEARCH_BRAND,
        payload,
    };
}

export function setSearchCategory(payload) {
    return {
        type: ACTION.SEARCH_CATEGORY,
        payload,
    };
}

export function setsearchPrice(payload) {
    return {
        type: ACTION.SEARCH_PRICE,
        payload,
    };
}
