import { Schema } from "../validation"
import { clear } from "../redux/cartSlice"
import { Input } from "../components/Input"
import { Modal } from "../components/Modal"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { IRegistration } from "../types/registration"
import { Controller, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

export const Registration: React.FC= () =>{
    const [open, setOpen]= useState<boolean>(false);
    const [data, setData]= useState<IRegistration | null>(null);
    const dispatch= useAppDispatch();
    const cartItems= useAppSelector((state) => state.cart.items);
    const navigation= useNavigate();
    const {handleSubmit, reset, control}= useForm<IRegistration>({
        mode: "all",
        resolver: zodResolver(Schema)
    })

    const submit= (data: IRegistration) =>{
        reset();
        setData(data);
        setOpen(true);
    }
    const close= () =>{
        setOpen(false);
        dispatch(clear());
    }

    useEffect(() =>{
        if(cartItems.length<= 0) navigation("/cart");
    }, [cartItems.length])
    
    return (
        <>
            <div className="py-10 space-y-7 max-w-[800px] mx-auto px-5 sm:px-0">
                <h1 className="text-4xl font-medium">Registration Form</h1>
                <form onSubmit={handleSubmit(submit)} className="space-y-5 text-[white] py-12 rounded-2xl px-2 bg-darkGray">
                    <Controller defaultValue="" name="firstName" control={control} render={({ field, fieldState }) =>(
                        <Input label="First name" {...field} error={fieldState.error?.message}/>
                    )}/>
                    <hr className="text-[#717171]"/>
                    <Controller defaultValue="" name="lastName" control={control} render={({ field, fieldState }) =>(
                        <Input label="Last name" {...field} error={fieldState.error?.message}/>
                    )}/>
                    <hr className="text-[#717171]"/>
                    <Controller defaultValue="" name="email" control={control} render={({ field, fieldState }) =>(
                        <Input label="Email address" placeholder="example@email.com" {...field} error={fieldState.error?.message}/>
                    )}/>
                    <hr className="text-[#717171]"/>
                    <Controller defaultValue="" name="phoneNumber" control={control} render={({ field, fieldState }) =>(
                        <Input label="Phone number" placeholder="09120000000" {...field} error={fieldState.error?.message}/>
                    )}/>
                    <hr className="text-[#717171]"/>
                    <Controller defaultValue="" name="houseNumber" control={control} render={({ field, fieldState }) =>(
                        <Input label="House number" placeholder="021-00000000" {...field} error={fieldState.error?.message}/>
                    )}/>
                    <hr className="text-[#717171]"/>
                    <Controller defaultValue="" name="address" control={control} render={({ field, fieldState }) =>(
                        <Input label="Address" {...field} error={fieldState.error?.message}/>
                    )}/>
                    <hr className="text-[#717171]"/>
                    <button type="submit" className="bg-lightBlue hover:bg-darkBlue px-6 py-2 rounded sm:ml-20">Send information</button>
                </form>
            </div>
            <Modal open={open} close={close} data={data!} />
        </>
    )
}