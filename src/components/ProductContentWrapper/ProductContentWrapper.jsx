import React from "react";
import ProductTabs from "./ProductTabs/ProductTabs";

export default function ProductContentWrapper ({products}) {
    return (
        <div>
            <ProductTabs products={products}/>
        </div>
    )
};