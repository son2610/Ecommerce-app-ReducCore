import { createSelector } from "reselect";

export const filtersSelector = (state) => state.filters;
export const productsSelector = (state) => state.products;

export const filteredProductsSelector = createSelector(
    productsSelector,
    filtersSelector,
    (products, filters) => {
        const { searchText, brand, category, price } = filters;
        let filteredProducts = [...products];
        if (searchText) {
            filteredProducts = filteredProducts.filter((item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        if (brand !== "All") {
            filteredProducts = filteredProducts.filter(
                (item) => item.brand === brand
            );
        }
        if (category !== "All") {
            filteredProducts = filteredProducts.filter(
                (item) => item.category === category
            );
        }
        if (price !== "0,0") {
            const [min, max] = price.split(",");

            if (min !== max) {
                filteredProducts = filteredProducts.filter((item) => {
                    const priceDiscount = Math.round(
                        item.price *
                            (1 - Number(item.discountPercentage) * 0.01)
                    );
                    return priceDiscount > min && priceDiscount < max;
                });
            } else {
                filteredProducts = filteredProducts.filter((item) => {
                    const priceDiscount = Math.round(
                        item.price *
                            (1 - Number(item.discountPercentage) * 0.01)
                    );
                    return priceDiscount > min;
                });
            }
        }
        return filteredProducts;
    }
);
