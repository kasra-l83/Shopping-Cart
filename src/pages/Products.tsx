import { IProduct } from "../types/product"
import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "../components/ProductCard"
import { fetchProductsList } from "../apis/products.api"

export const ProductsPage: React.FC= () =>{
    const products= useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProductsList()
    })
    
    return (
        <section className="p-3 grid gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.data?.products.map((product: IProduct) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </section>
    )
}