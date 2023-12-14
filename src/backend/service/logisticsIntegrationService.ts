import {Product} from "@/common/types";

/*
 * Mock backend service doing integration to third party
 */
export const submitProductSelectionToLogisticsService = (product: Product) => {
    console.log("Sending...")
    console.log("Product selection sent to to logistics!")
    return product;
}