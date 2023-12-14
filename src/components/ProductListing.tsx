"use client"

/*
 * Client components are also server side rendered even though their name kinda makes you think otherwise.
 * They are automatically hydrated on the client after the initial render.
 * Any user interaction requires the component to be client component.
 */

import {Product} from "@/common/types";
import {submitProductSelection} from "@/interactionsAndStateManagement/checkout";

interface ProductListingProps {
    products: Product[];
}

const ProductListing = ({products}: ProductListingProps) => {
    return (
        <ul>
            {products?.map(product => (
                <li key={product.rowid}><button onClick={() => submitProductSelection(product)}>{product.title}, {product.price}</button></li>
            ))}
        </ul>)
}

export default ProductListing