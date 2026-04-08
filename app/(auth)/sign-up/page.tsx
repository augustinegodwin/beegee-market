"use client"
import AuthButton from "@/app/components/utils/authButton"
import Input from "@/app/components/utils/input"
import Image from "next/image"
import Link from "next/link"
import logo from "@/app/assets/images/bot.png"
import { useState } from "react"
export default function Page() {
    const [showMore, setShowMore] = useState(1)
  return (
    <div className="w-full min-h-screen py-25 px-4 flex justify-center items-center">
      <div className="w-full max-w-100 bg-(--card) rounded-[30px] h-auto border border-gray-100 p-1.5 flex-col items-center flex justify-center relative">
       
        <div className="w-full h-auto flex flex-col items-center bg-[#fcfcfc] border border-gray-100 rounded-3xl py-5">
             <div className=" size-15 rounded-full border border-gray-100 z-10 bg-white -top-7.5">
                <Link href={'/'} className="flex size-full">
                    <Image
                    className="size-full"
                    alt="logo"
                    src={logo}
                />
                </Link>
             </div>
            <div className="w-full flex justify-center pt-5 flex-col items-center px-5 gap-3">
                <h3 className=' title-font text-(--primary) text-2xl tracking-body leading-5'>Create your account</h3>
                <p className="leading-body text-center title-font track-body font-medium text-(--secondary)">Lets get started it is free.</p>
               {
                showMore === 1 &&  <form className="w-full flex-col flex gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Full Name</label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Phone Number</label>
                        <Input
                            type="tel"
                            placeholder="09032457431"
                        
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Password</label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>
                    <AuthButton/>
                </form>
               }
                {
                    showMore === 2 && <form className="w-full flex-col flex gap-4">
                    <div className="w-full flex-row flex gap-4 items-center">
                        <div className="w-fit flex flex-col gap-1 justify-start">
                        {/* <label className="text-sm title-font tracking-body text-black font-medium ">Profile Image</label> */}
                        <div className="size-20 rounded-full border border-gray-100">
                            <Image
                                className="size-full"
                                alt="logo"
                                src={logo}
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">University Level</label>
                        <Input
                            type="number"
                            placeholder="100"
                        />
                    </div>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Appartment</label>
                        <Input
                            type="text"
                            placeholder="Room number"
                        
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Delivery Address</label>
                        <Input
                            type="text"
                            placeholder="Hostel Location"
                        />
                    </div>
                    <AuthButton/>
                </form>
                }
            </div>
        </div>
        <div className="py-3 px-5 flex justify-center">
            <p className="leading-body text-sm text-center title-font track-body font-medium text-(--secondary)">By continuing, you agree to our <Link href={"/sign-in"} className="link-style">Terms</Link> and <Link href={"/sign-in"} className="link-style">Privacy Policy</Link>.</p>
            {/* <p className="leading-body title-font track-body font-medium text-(--secondary)">Already have an account? <Link href={"/sign-in"} className="link-style">Sign in</Link>.</p> */}
        </div>
      </div>
    </div>
  )
}
