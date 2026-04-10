"use client";
import MaxWidthContainer from "@/app/components/utils/maxWidthContainer";
import bot from "@/app/assets/images/user.jpg";
import Image from "next/image";
import Input from "@/app/components/utils/input";
import FilterCard from "@/app/components/utils/filterCard";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Button from "@/app/components/utils/button";
import AuthButton from "@/app/components/utils/authButton";
import { useAuthStore } from "@/app/store/auth.store";
import { redirect, useRouter } from "next/navigation";
import NetworkEror from "@/app/components/utils/networkEror";
import { UploadProductModal } from "@/app/components/utils/uploadProductsModal";
import { ConfirmationModal } from "@/app/components/headlessUiComponents/confrimationModal";
import useFetch from "@/app/lib/useAsyncFetch";
import { getAllOrders } from "@/app/lib/async_data";
import { User, MapPin, Phone, PackageCheck } from "lucide-react";
import { OrderDetailsModal } from "@/app/components/utils/orderdetailsModal";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Page() {
  const { user,isAuthenticated,networkError,deleteCookie } = useAuthStore();
  const {data:serverOders,error,loading,refetch} = useFetch({
    fn:getAllOrders
  })
  const [activeTab, setActiveTab] = useState(1);
  const [pModal,setPModal]=useState(false)
  const [confrim,setConfrim]=useState(false)
  const [orderDetails,setOrderDetails]=useState(false)
const [selectedOrder,setSelectedOrder]=useState<(OrderDetails | null)>(null)
const showOrder=(order:OrderDetails)=>{
  setSelectedOrder(order)
  setOrderDetails(true)
}
  const router = useRouter();
  const logout = () => {
    deleteCookie("RFTFL");
    deleteCookie("ACTFL");
    router.refresh();
  }
  const tabs = [
    { id: 1, title: "General Settings" },
    { id: 2, title: "Wallet" },
    { id: 3, title: "Orders" },
    { id: 4, title: "products" },
  ];
 const orders = [
    {
      _id: "69d63efafa9dbb6ca38383c3",
      date: "April 08, 2026",
      customer: "Augustine Godwin",
      product: "Random beegee design Flyer",
      amount: "100",
      status: "Recieved",
    },
    {
      _id: "68ee4ea66bc4a9009ac32b8b",
      date: "October 14, 2025",
      customer: "Young Millions",
      product: "Mini Standing Fan (Portable & Quiet)",
      amount: "222,000",
      status: "pending Approval",
    },
    {
      _id: "68ee4f6867570f3a359410b2",
      date: "October 14, 2025",
      customer: "rose",
      product: "6 Items",
      amount: "522,000",
      status: " ",
    },
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
                        className={`  cursor-pointer whitespace-nowrap rounded-full px-5 py-2 title-font tracking-header ${
                          activeTab === tab.id
                            ? "bg-(--primary) text-white"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {tab.title}
                      </button>
                    ))}
                    <button
                    onClick={()=>setConfrim(true)}
                        className={` bg-gray-200 text-black cursor-pointer whitespace-nowrap  rounded-full px-5 py-2 title-font tracking-header `}
                      >
                        Log out
                      </button>
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
                              {user.user.walletBalance.toLocaleString('en-NG')}
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
                              {user.user.walletDebt.toLocaleString('en-NG')}
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
                {activeTab === 3 && (
                  <div className="flex-1 w-full h-fit rounded-[30px] bg-(--card) border border-gray-200 p-1.5">
                        <div className="py-2 w-full  px-5">
                          <p className="text-base text-left leading-5 text-(--secondary) title-font">
                            Recent orders
                          </p>
                        </div>
                        <div className="w-full h-fit pt-4 bg-foreground items-center border border-gray-200 rounded-3xl overflow-hidden justify-center flex flex-col gap-5">
                          <div className="overflow-x-auto w-full">
                            {loading && (<table className="w-full animate-pulse">
  <thead className="border-b border-zinc-950/5 bg-zinc-50/50">
    <tr>
      {/* Contact Header Skeleton */}
      <th className="px-6 py-3">
        <div className="h-3 w-16 bg-zinc-200 rounded-sm"></div>
      </th>
      {/* Date Header Skeleton */}
      <th className="px-6 py-3">
        <div className="h-3 w-12 bg-zinc-200 rounded-sm"></div>
      </th>
      {/* Seller Header Skeleton */}
      <th className="px-6 py-3">
        <div className="h-3 w-20 bg-zinc-200 rounded-sm"></div>
      </th>
      {/* Product Header Skeleton */}
      <th className="px-6 py-3">
        <div className="h-3 w-16 bg-zinc-200 rounded-sm"></div>
      </th>
      {/* Amount Header Skeleton */}
      <th className="px-6 py-3">
        <div className="h-3 w-14 bg-zinc-200 rounded-sm"></div>
      </th>
      {/* Status Header Skeleton */}
      <th className="px-6 py-3">
        <div className="h-3 w-12 bg-zinc-200 rounded-sm"></div>
      </th>
    </tr>
  </thead>
  <tbody className="divide-y bg-white divide-zinc-950/5">
    {[1, 2, 3].map((item) => (
      <tr key={item}>
        <td className="px-6 py-4">
          <div className="h-4 w-24 bg-zinc-100 rounded-md"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-28 bg-zinc-100 rounded-md"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-20 bg-zinc-100 rounded-md"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-32 bg-zinc-100 rounded-md"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-16 bg-zinc-100 rounded-md"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-6 w-20 bg-zinc-100 rounded-md"></div>
        </td>
      </tr>
    ))}
  </tbody>
</table>)}
                        {true && (
                          <table className="w-full">
                          <thead className="border-b border-zinc-950/5 bg-zinc-50/50">
                            <tr>
                              <th className="px-6 font-medium py-3 text-left text-xs title-font2 text-zinc-500 uppercase tracking-wider whitespace-nowrap">
                                Contact
                              </th>
                              <th className="px-6 font-medium py-3 text-left text-xs title-font2 text-zinc-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th className="px-6 font-medium py-3 text-left text-xs title-font2 text-zinc-500 uppercase tracking-wider">
                                Seller/Renter
                              </th>
                              <th className="px-6 font-medium py-3 text-left text-xs title-font2 text-zinc-500 uppercase tracking-wider">
                                Product
                              </th>
                              <th className="px-6 font-medium py-3 text-left text-xs title-font2 text-zinc-500 uppercase tracking-wider">
                                Amount
                              </th>
                              <th className="px-6 font-medium py-3 text-left text-xs title-font2 text-zinc-500 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          {!loading && serverOders && <tbody className="divide-y bg-white divide-zinc-950/5">
                            {serverOders.orders.map((order:OrderDetails) => (
                              <tr onClick={()=>showOrder(order)} key={order._id} className="hover:bg-zinc-50/50">
                                <td className="relative px-6 py-4 whitespace-nowrap title-font2 text-sm font-medium text-zinc-950">
                                  09032839202
                                </td>
                                <td className="relative px-6 font-medium py-4 whitespace-nowrap title-font2 text-sm text-zinc-500">
                                  {order.createdAt}
                                </td>
                                <td className="relative px-6 py-4 whitespace-nowrap title-font2 text-sm text-zinc-950">
                                  {order.renter.name}
                                </td>
                                <td className="relative px-6 py-4 whitespace-nowrap title-font2 text-sm text-zinc-500">
                                  {(order.name.length > 20) ? order.name.slice(0,20) + "..." : order.item.title}
                                </td>
                                <td className="relative px-6 py-4 whitespace-nowrap title-font2 text-sm font-medium text-zinc-950">
                                  {order.subtotal}
                                </td>
                                <td className="relative px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`inline-flex rounded-md border px-2.5 py-0.5 text-xs font-medium title-font2 ${
                                      order.status === "paid"
                                        ? "bg-green-50 text-green-700 border-green-200"
                                        : "bg-blue-50 text-blue-700 border-blue-200"
                                    }`}
                                  >
                                    Pending
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>}
                          {
                            loading && <tbody className="divide-y bg-white divide-zinc-950/5">
  {[...Array(5)].map((_, index) => (
    <tr key={index} className="animate-pulse">
      {/* Phone Number Skeleton */}
      <td className="relative px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-24 bg-zinc-200 rounded-md"></div>
      </td>

      {/* Date Skeleton */}
      <td className="relative px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-20 bg-zinc-100 rounded-md"></div>
      </td>

      {/* Customer Skeleton */}
      <td className="relative px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-32 bg-zinc-200 rounded-md"></div>
      </td>

      {/* Product Skeleton */}
      <td className="relative px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-40 bg-zinc-100 rounded-md"></div>
      </td>

      {/* Amount Skeleton */}
      <td className="relative px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-16 bg-zinc-200 rounded-md"></div>
      </td>

      {/* Status Badge Skeleton */}
      <td className="relative px-6 py-4 whitespace-nowrap">
        <div className="h-6 w-16 bg-zinc-100 rounded-md border border-zinc-200/50"></div>
      </td>
    </tr>
  ))}
</tbody>
                          }
                        </table>
                        )}
                      </div>

                          
                        </div>
                      </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
      <UploadProductModal isOpen={pModal} onClose={()=>setPModal(false)}/>
      <ConfirmationModal
        isOpen={confrim}
        onClose={()=>setConfrim(false)}
        title="Are you sure you want to logout?"
        description="Logging out will require you to enter your credentials again to access your account."
        cancelText="No, keep me logged in"
        variant="danger"
        onConfirm={logout}
      />
      {selectedOrder && 
      <OrderDetailsModal
        isOpen={orderDetails}
        onClose={()=>setOrderDetails(false)}
        orderDetails={selectedOrder}
      />}
      </>
  )
}
