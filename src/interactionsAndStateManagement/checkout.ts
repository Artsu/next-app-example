/*
 * This is a dummy example of code that handles client side fetch operation and can either return the output or set it to
 * global state manager like redux.
 */

import {Product} from "@/common/types";

export const submitProductSelection = async (selectedProduct: Product) => {
    const res = await fetch("/api/v1/product", {method: "POST", body: JSON.stringify(selectedProduct)});
    const submittedProduct = await res.json()
    window.alert(`Product selected successfully!
${JSON.stringify(submittedProduct, null, 2)}`,)
}