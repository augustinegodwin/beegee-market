"use client";
import MaxWidthContainer from "@/app/components/utils/maxWidthContainer";
import bot from "@/app/assets/images/user.jpg";
import Image from "next/image";
import Input from "@/app/components/utils/input";
import FilterCard from "@/app/components/utils/filterCard";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Button from "@/app/components/utils/button";
import AuthButton from "@/app/components/utils/authButton";
import { useAuthStore } from "@/app/store/auth.store";
import { redirect } from "next/navigation";
import NetworkEror from "@/app/components/utils/networkEror";
import { UploadProductModal } from "@/app/components/utils/uploadProductsModal";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Page() {
  const { user,isAuthenticated,networkError } = useAuthStore();
  const [activeTab, setActiveTab] = useState(1);
  const [pModal,setPModal]=useState(true)
  const tabs = [
    { id: 1, title: "General Settings" },
    { id: 2, title: "Wallet" },
    { id: 3, title: "Products" },
    { id: 4, title: "Orders" },
    { id: 5, title: "Payments,Addresses and Others" },
  ];
  if(!isAuthenticated && !user) {
    // redirect("/sign-in")
  }
  if (!user && !isAuthenticated ) return (
    <MaxWidthContainer>
      <div className="w-full flex justify-center items-center min-h-[75vh] py-25">
        <NetworkEror/>
      </div>
    </MaxWidthContainer>
  )
  if (user)  return (
    <>
      <MaxWidthContainer>
        <div className="w-full py-25">
          <div className="w-full flex justify-start   pt-15 flex-col ">
            <div className="w-full items-start justify-start flex flex-row lg:flex-col gap-5">
              <div className="flex w-full flex-col lg:flex-row gap-10 lg:gap-25">
                <div className="w-full lg:w-50 flex flex-col gap-5">
                  <div className="w-full flex flex-col  gap-4">
                    <h2 className="text-left title-font font-bold text-5xl lg:text-[48px] text-(--primary) leading-none tracking-header">
                      Account
                    </h2>
                    <p className="text-base text-left leading-5 text-(--secondary) title-font">
                            Welcome back, {user.user.name}!
                          </p>
                  </div>

                  <div className="flex flex-row lg:flex-col gap-4 w-full overflow-hidden">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`  cursor-pointer whitespace-nowrap  rounded-full px-5 py-2 title-font tracking-header ${
                          activeTab === tab.id
                            ? "bg-(--primary) text-white"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>
                </div>
                {activeTab === 1 && (
                  <div className="flex-1 ">
                    <div className="w-full py-5 px-1 flex flex-col gap-5 sm:gap-10">
                      <>
                        <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div className="space-y-1">
                            <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                              Profile Image
                            </h2>
                            <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                              This will be displayed on your product listing.
                            </p>
                          </div>
                          <div className="size-20 rounded-full overflow-hidden border border-gray-100">
                            <Image className="size-full" alt="logo" width={100} height={100} src={user?.user?.profileImage || bot} />
                          </div>
                        </section>
                        <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div className="space-y-1">
                            <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                              Account Name
                            </h2>
                            <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                              This will be displayed on your product listing.
                            </p>
                          </div>
                          <div>
                            <Input type="text" placeholder={user?.user.name} />
                          </div>
                        </section>
                        <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div className="space-y-1">
                            <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                              University
                            </h2>
                            <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                              This will be displayed on your product listing.
                            </p>
                          </div>
                          <div>
                            <Input
                              type="text"
                              placeholder={user?.user.school}
                            />
                          </div>
                        </section>
                        <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div className="space-y-1">
                            <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                              Phone Number
                            </h2>
                            <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                              This will be displayed on your product listing.
                            </p>
                          </div>
                          <div>
                            <Input type="text" placeholder={user?.user.phoneNumber} />
                          </div>
                        </section>
                        <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div className="space-y-1">
                            <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                              Password
                            </h2>
                            <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                              This will be displayed on your product listing.
                            </p>
                          </div>
                          <div>
                            <Input type="text" placeholder="*************" />
                          </div>
                        </section>
                        <div className="flex gap-5">
                          <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="space-y-1">
                              <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                                Level
                              </h2>
                              <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                                This will be displayed on your product listing.
                              </p>
                            </div>
                            <div>
                              <Input type="text" placeholder={user?.user.level} />
                            </div>
                          </section>
                          
                        </div>
                      </>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="flex-1 flex flex-col gap-5">
                    <div className="flex-1 flex flex-col sm:flex-row gap-5">
                      {/* Account Card */}
                      <div className="flex-1 h-fit rounded-[30px] bg-(--green) border border-gray-200 p-1">
                        <div className="py-2 px-5">
                          <p className="text-base text-center leading-5 text-white title-font">
                            Account balance
                          </p>
                        </div>
                        <div className="w-full h-fit p-5 bg-foreground items-center border border-(--green) rounded-3xl justify-center flex flex-col gap-5">
                          <div className="flex jusify-center w-fit items-center flex-row gap-2">
                            <p className="text-base w-fit text-center leading-5 text-(--secondary) title-font">
                              NGN
                            </p>
                            <h2
                              className={` text-center w-fit atwtts text-3xl lg:text-[48px] text-black leading-none tracking-[-0.01em]`}
                            >
                              100,000
                            </h2>
                          </div>
                          <button className="w-full px-5 py-3 title-font bg-black transition-all rounded-xl font-medium leading-[1.1] tracking-body text-sm text-white ">
                            Request Withdraw
                          </button>
                        </div>
                      </div>
                      {/* dept Card */}
                      <div className="flex-1 h-fit rounded-[30px] bg-(--warning) border border-gray-200 p-1">
                        <div className="py-2 px-5">
                          <p className="text-base text-center leading-5 text-white title-font">
                            Money Owing
                          </p>
                        </div>
                        <div className="w-full h-fit p-5 bg-foreground items-center border border-(--warning) rounded-3xl justify-center flex flex-col gap-5">
                          <div className="flex jusify-center w-fit items-center flex-row gap-2">
                            <p className="text-base w-fit text-center leading-5 text-(--secondary) title-font">
                              NGN
                            </p>
                            <h2
                              className={` text-center w-fit atwtts text-3xl lg:text-[48px] text-black leading-none tracking-[-0.01em]`}
                            >
                              -1,000
                            </h2>
                          </div>
                          <button className="w-full px-5 py-3 title-font bg-black transition-all rounded-xl font-medium leading-[1.1] tracking-body text-sm text-white ">
                            Pay Dept
                          </button>
                        </div>
                      </div>
                    
                    </div>
                    {/* payout History */}
                      <div className="flex-1 h-fit rounded-[30px] bg-(--card) border border-gray-200 p-1.5">
                        <div className="py-2 px-5">
                          <p className="text-base text-left leading-5 text-(--secondary) title-font">
                            Recent Payouts
                          </p>
                        </div>
                        <div className="w-full h-fit p-5 bg-foreground items-center border border-gray-200 rounded-3xl justify-center flex flex-col gap-5">
                          <div className="flex jusify-center min-h-50 w-fit items-center flex-row gap-2">
                            <p className="text-base text-left leading-5 text-(--secondary) title-font">
                            No Transaction Payouts
                          </p>
                          </div>
                          
                        </div>
                      </div>
                    <div>
                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
      <UploadProductModal isOpen={pModal} onClose={()=>setPModal(false)}/>
      </>
  )
}
