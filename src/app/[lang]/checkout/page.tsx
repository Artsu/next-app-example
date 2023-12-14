import styles from '../../page.module.css'
import {Lang} from "@/common/types";
import { getDictionary } from '@/common/dictionaries'
import {fetchProducts} from "@/backend/service/productService";
import ProductListing from "@/components/ProductListing";

export default async function CheckoutPage({ params: { lang } }: {params: {lang: Lang}}) {
    /*
     * Every component under the /app directory is a server component automatically
     * so we can fetch data directly from database. No imported dependency such as database driver
     * will be bundled to the client side script package.
     */
    const dict = await getDictionary(lang)
    const products = await fetchProducts(lang)

    return (
        <main className={styles.main}>
            <h2>{dict["productSelection.title"]}</h2>
            <ProductListing products={products} />
        </main>
    )
}
