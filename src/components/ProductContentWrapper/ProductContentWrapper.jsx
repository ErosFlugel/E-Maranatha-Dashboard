import React from "react";
import ProductTabs from "./ProductTabs/ProductTabs";

export default function ProductContentWrapper ({products}) {
    return (
        <div className="container p-0 mt-3">
            <ProductTabs products={products}/>
        </div>
    )
};