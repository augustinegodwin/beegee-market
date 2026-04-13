"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import cancel from '@/app/assets/images/cancel.svg';
import bootle from '@/app/assets/images/bottle.jpg';
import { Check, Dot, Gift, Minus, Phone, Plus, ShoppingBag, X } from "lucide-react";
import Image from 'next/image';
import { useProductStore } from "@/app/store/products.store";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/app/store/auth.store";
interface OrderDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderDetails: OrderDetails;
}
const orderState = (user: User, order: OrderDetails) => {
    const status = order.status //
    const frsale = order.forSale
    const iamSeler = user._id === order.user._id
    // if i am the sller
        // if product iis for sale
            // if iam the seller and order was created click delivered
            // if i am the seller and its was deleivered awaiting confrimation from user
            // if i am the seller and the item was confrimed order completed or no oder to display seff
        //    mone enters my account
    // if i am the customer 
        // if product is for sale 
            // if i am the customer and i have made the order  'awaiting delevery'
            // if i am the user and the seller has delivered "order completed"


            
    // if i am the seller or the person who uplooaded the product for rent
        // if product iis for rent
            // if iam the admin and order was created click delivered
            // if i am the admin and its was deleivered awaiting confrimation from user
            // if i am the admin and the item was confrimed "awiting return from customer"
            // if i am the admin and customer has clicked returnED  "COMPLETE ORDER"
            // IF Iam the admin and i click order completed then we are done
    // if i am the customer 
        // if product is for rent 
            // if i am the customer and i have made the order  'awaiting delevery'
            // if i am the user and the product was delevered 'recieved"
            // if i a he user and i click recieved then "return"
            // if i am the user and i have clicked returned awaiting cnfrimation from seller"
        // note all this place where we need to await the button should be disabked 

        // "this is the button that will be clicked based o each stages bth for seller or renter and customer"
    return (
        <button className="flex-1 flex gap-2 disabled:opacity-60 justify-center items-center px-5 h-10 title-font2 text-white cursor-pointer bg-black transition-all rounded-xl font-medium leading-[1.1] tracking-body text-sm">
            Complete Order
        </button>
    )
}
export function OrderDetailsModal({ isOpen, onClose, orderDetails }: OrderDetailsModalProps) {
    const [quantity, setQuantity] = useState(1);
    const { user,getCookie } = useAuthStore()
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>

                {/* Backdrop Animation */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center ">
                        <div className="w-full h-[40px] hidden lg:flex justify-center absolute top-0 left-0">
                            <div className="w-full flex justify-end items-center cursor-pointer" onClick={onClose} >
                                <div className="size-10 flex items-center justify-center"><X className="size-6 cursor-pointer text-white" /></div>

                            </div>
                        </div>
                        {/* Modal Pop-in Animation */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95 translate-y-10"
                            enterTo="opacity-100 scale-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100 translate-y-0"
                            leaveTo="opacity-0 scale-95 translate-y-10"
                        >
                            <Dialog.Panel className="relative w-full px-4 sm:px-10 bg-white flex justify-center h-[calc(100vh-40px)] overflow-y-scroll">

                                {/* YOUR ORIGINAL UI START */}
                                <div className="relative max-w-[550px] lg:max-w-[1200px] w-full h-fit py-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                                        <div className="flex flex-col gap-5">
                                            <div className="relative hidden lg:flex w-full aspect-square lg:aspect-[0.92/1] bg-gray-200 rounded-2xl overflow-hidden">
                                                {/* <Image
                          src={orderDetails.item}
                          alt={selectedProduct.title}
 sizes="100vw"
                          width={100}
                          height={100}
                          className="w-full h-full rounded-2xl object-cover"
                        /> */}
                                            </div>
                                            <div className='w-full h-30 py-2'>
                                                <div className="h-full rounded-2xl flex justify-center outline-2 outline-green-600 aspect-square">
                                                    {/* <Image
                            src={orderDetails.item}
                            alt={selectedProduct.title}
                             sizes="100vw"           
                            width={100}
                            height={100}
                            className="w-full h-full border-3 border-transparent rounded-2xl object-cover"
                          /> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6">
                                            <div className='flex flex-col gap-1'>
                                                <div className="w-full flex justify-between gap-5">
                                                    <p className="text-black text-lg leading-body tracking-body custom3 ">
                                                        Order #{orderDetails._id}
                                                    </p>
                                                    <span
                                                        className={`inline-flex rounded-md border px-2.5 py-0.5 text-xs leading-body font-medium title-font2 bg-green-50 text-green-700 border-green-200`}
                                                    >
                                                        {orderDetails.status}
                                                    </span>
                                                </div>
                                                <p className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font ">
                                                    Oct 29,2026 <Dot size={14} /> N{orderDetails.subtotal}
                                                </p>
                                            </div>
                                            <div className='flex flex-col gap-4'>
                                                <span className="text-(--secondary) leading-body tracking-body title-font ">
                                                    Order Summary
                                                </span>
                                                <div className="w-full flex gap-5 flex-col">
                                                    <div className="w-full flex gap-5 items-center">
                                                        <div className="aspect-square h-15 rounded-2xl bg-gray-100"></div>
                                                        <div className="flex-1 flex flex-col gap-1">
                                                            <span className="text-black line-clamp-2 leading-body tracking-body title-font ">
                                                                JBL MG-S20 TWS Bluetooth Earbuds with Digital Display Charging Case

                                                            </span>
                                                            <p className="text-(--secondary) inline-flex items-center text-sm leading-body tracking-body title-font ">
                                                                Category <Dot size={14} /> {orderDetails.item.category}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full border-t border-dashed border-gray-200 flex flex-col gap-4 pt-5">
                                                        <div className="w-full flex justify-between">
                                                            <span className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font ">
                                                                Subtotal
                                                            </span>
                                                            <span className="text-black inline-flex text-sm leading-body tracking-body title-font ">
                                                                N{orderDetails.subtotal}
                                                            </span>

                                                        </div>
                                                        <div className="w-full flex justify-between">
                                                            <span className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font ">
                                                                Shipping fee
                                                            </span>
                                                            <span className="text-black inline-flex text-sm leading-body tracking-body title-font ">
                                                                N350.00
                                                            </span>

                                                        </div>
                                                        <div className="w-full flex justify-between">
                                                            <span className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font ">
                                                                Total
                                                            </span>
                                                            <span className="text-black inline-flex text-sm leading-body tracking-body title-font ">
                                                                N{orderDetails.subtotal + 350}
                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-4 border-t border-dashed border-gray-200 pt-5'>
                                                <span className="text-(--secondary) leading-body tracking-body title-font ">
                                                    Seller / Renter
                                                </span>
                                                <div className="w-full">
                                                    <div className="w-full flex gap-5 items-center">
                                                        <div className="aspect-square h-12 rounded-lg overflow-hidden bg-gray-100">
                                                            <Image
                                                                src={orderDetails.user.profileImage}
                                                                alt="Sellers icon"
                                                                width={100}
                                                                height={100}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="flex-1 flex flex-col gap-1">
                                                            <span className="text-black line-clamp-1 leading-body tracking-body title-font ">{orderDetails.user.name} </span>
                                                            <p className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font ">
                                                                {orderDetails.user.phoneNumber}
                                                            </p>
                                                        </div>
                                                        <Link href={`tel:${orderDetails.renter.phoneNumber}`} className="aspect-square h-10 rounded-xl bg-blue-100 flex justify-center items-center">
                                                            <Phone
                                                                size={20}
                                                                className="text-blue-600"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-4 border-t border-dashed border-gray-200 pt-5'>
                                                <span className="text-(--secondary) leading-body tracking-body title-font ">
                                                    Timeline
                                                </span>
                                                <div className="w-full flex flex-col">
                                                    {/* STAGE 1 */}
                                                    <div className="relative flex gap-5 items-start pb-8">
                                                        {/* Connecting Line */}
                                                        <div className="absolute left-5 top-10 w-[1px] h-full bg-gray-200" />

                                                        <div className="relative z-10 aspect-square flex justify-center items-center h-10 rounded-full border border-gray-200 bg-white">
                                                            <ShoppingBag className="text-orange-300" size={20} />
                                                        </div>

                                                        <div className="flex-1 flex flex-col gap-1">
                                                            <span className="text-black line-clamp-1 leading-body tracking-body title-font">Order Confirmed</span>
                                                            <p className="text-(--secondary) inline-flex text-xs leading-body tracking-body title-font">
                                                                Order Placed and confirmed
                                                            </p>
                                                        </div>

                                                        <div className="flex h-10 items-start">
                                                            <p className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font">
                                                                Oct 29, 2026
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* STAGE 2 */}
                                                    <div className="relative flex gap-5 items-start pb-8">
                                                        {/* Connecting Line (Dashed to show progress to next) */}
                                                        <div className="absolute left-5 top-10 w-[1px] h-full border-l border-dashed border-gray-300" />

                                                        <div className="relative z-10 aspect-square flex justify-center items-center h-10 rounded-full border border-gray-200 bg-white">
                                                            <Gift className="text-purple-300" size={20} />
                                                        </div>

                                                        <div className="flex-1 flex flex-col gap-1">
                                                            <span className="text-black line-clamp-1 leading-body tracking-body title-font">Order Delivered</span>
                                                            <p className="text-(--secondary) inline-flex text-xs leading-body tracking-body title-font">
                                                                Order Delivered and received
                                                            </p>
                                                        </div>

                                                        <div className="flex h-10 items-start">
                                                            <p className="text-(--secondary) inline-flex text-sm leading-body tracking-body title-font">
                                                                Nov 3, 2026
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* STAGE 3 (Last Stage) */}
                                                    <div className="relative flex gap-5 items-start">
                                                        {/* No line needed after last child */}
                                                        <div className="relative z-10 aspect-square flex justify-center items-center h-10 rounded-full border border-dashed border-gray-300 bg-gray-50">
                                                            <Check className="text-gray-300" size={20} />
                                                        </div>

                                                        <div className="flex-1 flex flex-col gap-1">
                                                            <span className="text-gray-400 line-clamp-1 leading-body tracking-body title-font italic">Order completed (pending)</span>
                                                            <p className="text-gray-300 inline-flex text-xs leading-body tracking-body title-font">
                                                                Waiting for final verification
                                                            </p>
                                                        </div>

                                                        <div className="flex h-10 items-start">
                                                            <p className="text-gray-300 inline-flex text-sm leading-body tracking-body title-font">
                                                                -- --
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* Complete orer process */}
                                                {
                                                    orderDetails.user._id !== user?.user._id ?
                                                        <div className="w-full mt-5 flex justify-end">
                                                            <button className="flex-1 flex gap-2 disabled:opacity-60 justify-center items-center px-5 h-10 title-font2 text-white cursor-pointer bg-black transition-all rounded-xl font-medium leading-[1.1] tracking-body text-sm">
                                                                Complete Order
                                                            </button>
                                                        </div> : <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* YOUR ORIGINAL UI END */}

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )

}