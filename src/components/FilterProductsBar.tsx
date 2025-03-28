import { FaRegStar, FaStar } from "react-icons/fa"

interface FilterProductsBarProps {
  rating: number
  setRating: (rating: number) => void
  beauty: boolean
  setBeauty: (beauty: boolean) => void
  order: "asc" | "desc" | null
  setOrder: (order: "asc" | "desc" | null) => void
}

function FilterProductsBar({ rating, setRating, beauty, setBeauty, order, setOrder }: FilterProductsBarProps) {

  const changeOrder= (event: React.ChangeEvent<HTMLInputElement>) =>{
    setOrder(event.target.value as "asc" | "desc");
  }
  const clear= () =>{
    setRating(0);
    setOrder(null);
    setBeauty(false);
  }

  return (
    <aside className="w-full h-screen bg-darkGray p-5 text-[white] space-y-5 max-w-[40%] md:max-w-[30%] lg:max-w-[20%]">
      <h3 className="text-3xl">Filter Products</h3>
      <span className="flex gap-x-1">
        <input type="radio" value="asc" checked={order=== "asc"} onChange={changeOrder} />
        <label>Ascending</label>
      </span>
      <span className="flex gap-x-1">
        <input type="radio" value="desc" checked={order=== "desc"} onChange={changeOrder} />
        <label>Descending</label>
      </span>
      <span className="block space-x-1">
        <input type="checkbox" checked={beauty} onChange={() => setBeauty(!beauty)} />
        <label>Beauty</label>
      </span>
      <span className="flex items-center gap-x-3">
        <label>Rating: </label>
        <span className="flex">
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => setRating(index+ 1)} className="cursor-pointer">
              {index < rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </span>
      </span>
      <button onClick={clear} className="bg-[white] text-darkGray w-full py-2 rounded hover:bg-lightGray">
        Clear Filters
      </button>
    </aside>
  )
}
export default FilterProductsBar