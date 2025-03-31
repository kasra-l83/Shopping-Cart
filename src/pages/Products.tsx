import { useMemo, useState } from "react"
import type { IProduct } from "../types/product"
import { useQuery } from "@tanstack/react-query"
import { fetchProductsList } from "../apis/products.api"
import FilterProductsBar from "../components/FilterProductsBar"
import { ProductCard, ProductCardSkeleton } from "../components/ProductCard"

export const ProductsPage: React.FC= () =>{
    const [rating, setRating] = useState<number>(0);
    const [beauty, setBeauty] = useState<boolean>(false);
    const [order, setOrder] = useState<"asc" | "desc" | null>(null);
  
    const products= useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProductsList(),
        refetchOnWindowFocus: false,
    })
  
    const filteredProducts= useMemo(() =>{
        if (!products.data?.products) return []
        let filtered= [...products.data.products]
        if (beauty) {
            filtered= filtered.filter(
                (product) => product.category=== "beauty"
            )
        }
        if (rating > 0) {
            filtered= filtered.filter((product) => Math.floor(product.rating)=== rating)
        }
        if (order) {
            filtered.sort((a, b) =>{
                const titleA= a.title
                const titleB= b.title
                return order=== "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA)
            })
        }
        return filtered
    }, [products.data, beauty, rating, order])
  
    return (
      <main className="m-3 flex gap-x-8">
        <FilterProductsBar rating={rating} setRating={setRating} beauty={beauty} setBeauty={setBeauty} order={order} setOrder={setOrder}/>
        <section className="mt-5 grid gap-x-5 gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.isSuccess && (
                filteredProducts.map((product: IProduct) => <ProductCard key={product.id} product={product} />)
            )}
            {filteredProducts.length=== 0 && products.isSuccess && (
                <h3>Items not found</h3>
            )}
            {filteredProducts.length=== 0 && !products.isSuccess && (
                [...Array(8)].map((_, index) =>(
                    <ProductCardSkeleton key={index}/>
                ))
            )}
        </section>
      </main>
    )
}