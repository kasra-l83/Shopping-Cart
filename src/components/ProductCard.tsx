import { useState } from "react"
import type { IProduct } from "../types/product"
import { FaStar, FaRegStar } from "react-icons/fa"

export const ProductCardSkeleton: React.FC= () =>{
  return (
    <div className="border border-lightGray py-2 px-5 space-y-2 rounded">
      <div className="place-self-center bg-lightGray size-20 sm:size-72 md:size-48 lg:size-52 xl:size-48 2xl:size-60 rounded-full"></div>
      <div className="w-full h-7 bg-lightGray rounded"></div>
      <div className="w-16 h-5 bg-lightGray rounded"></div>
      <div className="w-32 h-5 bg-lightGray rounded"></div>
      <div className="w-24 h-5 bg-lightGray rounded"></div>
      <div className="w-28 h-10 bg-lightGray rounded"></div>
    </div>
  )
}
export const ProductCard: React.FC<{product: IProduct}>= ({product}) =>{
  const [add, setAdd]= useState<boolean>(false);
  const star= Math.floor(product.rating);

  return (
    <div className="border border-lightGray py-2 px-5 space-y-2 rounded">
      <img src={product.thumbnail} alt={product.title} className="place-self-center w-full"/>
      <h4 className="text-xl font-medium line-clamp-1">{product.title}</h4>
      <p className="text-base font-medium">₹ {product.price}</p>
      <p className="text-base font-medium line-clamp-1">{product.warrantyInformation}</p>
      <span className="flex">
        {[...Array(star)].map((_, index) =>(
          <FaStar key={index}/>
        ))}
        {[...Array(5- star)].map((_, index) =>(
          <FaRegStar key={index+ star}/>
        ))}
      </span>
      <button onClick={() => setAdd(!add)}
        className={`py-2 px-3 rounded text-[white] ${add ? "bg-[red] hover:bg-lightRed" : "bg-[blue] hover:bg-lightBlue"}`}
      >
        {add ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  )
}