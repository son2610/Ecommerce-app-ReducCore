import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../reducer/actions";
import { filteredProductsSelector } from "../reducer/selector";
import InfiniteScroll from "react-infinite-scroll-component";
function Products() {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(8);
    useEffect(() => {
        async function getPorductList() {
            const res = await fetch(`https://dummyjson.com/products?limit=10`);
            const data = await res.json();
            dispatch(fetchData(data.products));
        }
        getPorductList();
    }, []);

    const filteredProducts = useSelector(filteredProductsSelector);

    const fetchDataMore = async () => {
        setLimit((prevLimit) => prevLimit + 8);

        const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}`
        );
        const data = await res.json();
        dispatch(fetchData(data.products));
    };

    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <InfiniteScroll
                dataLength={filteredProducts.length}
                next={fetchDataMore}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <div className="row">
                    {filteredProducts.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Products;
