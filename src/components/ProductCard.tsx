import { useState } from "react"
import type { IProduct } from "../types/product"
import { FaStar, FaRegStar } from "react-icons/fa"

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