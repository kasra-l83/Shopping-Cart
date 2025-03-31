import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"
import { IRegistration } from "../types/registration"

interface ModalProps{
    open: boolean
    close: () => void
    data: IRegistration
}

export const Modal: React.FC<ModalProps> = ({ open, close, data }) =>{
    const cartItems= useAppSelector((state) => state.cart.items);
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[black] bg-opacity-50">
            <div className="bg-[white] p-5 rounded shadow-lg">
                <h2 className="text-xl mb-4">Personal Information</h2>
                <p>First Name: {data.firstName}</p>
                <p>Last Name: {data.lastName}</p>
                <p>Email: {data.email}</p>
                <p>Phone Number: {data.phoneNumber}</p>
                <p>House Number: {data.houseNumber}</p>
                <p>Address: {data.address}</p>
                <hr className="my-3"/>
                <h2 className="text-xl mb-4">Order(s)</h2>
                {cartItems.map((item, index) =>(
                    <p key={index}>{item.title}</p>
                ))}
                <Link to="/">
                    <button onClick={close} className="mt-4 bg-[blue] hover:bg-lightBlue text-[white] px-4 py-2 rounded">Close</button>
                </Link>
            </div>
        </div>
    )
}