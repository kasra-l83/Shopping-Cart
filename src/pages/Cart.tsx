import { FaTrash } from "react-icons/fa6"
import { remove } from "../store/cartSlice"
import { FaStar, FaRegStar } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../store/hooks"

export const ShoppingCart: React.FC= () =>{
    const dispatch= useAppDispatch();
    const cartItems= useAppSelector((state) => state.cart.items);

    return (
        <main className="p-3 flex gap-x-8">
            {cartItems.length> 0 ? <ul className="w-full rounded">
                {cartItems.map((item) =>(
                    <li key={item.id}
                        className="space-y-2 space-x-2  md:flex justify-between items-center border-lightGray border-t border-x px-5 py-3 first:rounded-t last:rounded-b last:border-b"
                    >
                        <h4>{item.title}</h4>
                        <h6>₹ {item.price}</h6>
                        <span className="flex">
                            {[...Array(Math.floor(item.rating))].map((_, index) =>(
                                <FaStar key={index}/>
                            ))}
                            {[...Array(5- Math.floor(item.rating))].map((_, index) =>(
                                <FaRegStar key={index+ Math.floor(item.rating)}/>
                            ))}
                        </span>
                        <select className="py-2 border border-lightGray rounded w-24">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button className="bg-lightGray p-3 rounded hover:bg-[gray]" onClick={() => dispatch(remove(item.id))}>
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul> : <div className="border border-lightGray text-center rounded w-full place-self-center py-20">
                <h3 className="text-[gray]">Cart is empty</h3>
                <p className="text-lightGray">You can return to <a href="/" className="underline text-lightBlue hover:text-[blue]">products page</a></p>
            </div>}
            <aside className="w-full h-screen bg-darkGray p-5 text-[white] space-y-5 max-w-[40%] md:max-w-[30%] lg:max-w-[20%]">
                <h2 className="text-2xl sm:text-3xl">Subtotal ({cartItems.length}) items</h2>
                <h4 className="text-xl font-bold">Total: ₹ {cartItems.reduce((total, item) => total+ item.price, 0)}</h4>
                <button disabled={cartItems.length<= 0} className="w-full py-2 rounded bg-[blue] hover:bg-lightBlue disabled:bg-lightGray">
                    Proceed to Checkout
                </button>
            </aside>
        </main>
    )
}