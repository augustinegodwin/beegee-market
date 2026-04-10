"use client"
import Button from "@/app/components/utils/button";
import FilterCard from "@/app/components/utils/filterCard";
import MaxWidthContainer from "@/app/components/utils/maxWidthContainer";
import ProductCard from "@/app/components/utils/productCard";
import category from "@/app/assets/images/filter.svg";
import SwitchCard from "@/app/components/utils/switchCard";
import Image from "next/image";
import bg from "@/app/assets/images/bg.avif";
import { useState } from "react";
import { ProductModal } from "@/app/components/utils/product-details";
import CookieBanner from "@/app/components/utils/toast";
import useFetch from "@/app/lib/useAsyncFetch";
import { getAllProducts } from "@/app/lib/async_data";
import Spinner from "@/app/components/utils/spinner";
import NetworkEror from "@/app/components/utils/networkEror";
import { Plus } from "lucide-react";
import { UploadProductModal } from "@/app/components/utils/uploadProductsModal";
const filterItems = [
  {
    title: "All Items",
    active: true,
  },
  {
    title: "Clothing",
    active: false,
  },
  {
    title: "Accessories",
    active: false,
  },
  {
    title: "Books",
    active: false,
  },
  {
    title: "Gadgets",
    active: false,
  },
  {
    title: "Food Stuffs",
    active: false,
  },
];

const ProductSkeleton = () => {

  return (
    <div 
      className="w-full flex flex-col gap-4 animate-pulse [mask-image:linear-gradient(to_bottom,white_100%,transparent_100%)]"
      // Note: 'black' in a mask means 100% visible, 'transparent' means 0% visible.
    >
      {/* Image Placeholder */}
      <div className="w-full overflow-hidden relative aspect-[0.882609/1] bg-gray-200 rounded-2xl" />

      <div className="w-full flex flex-col gap-2.5">
        {/* Title Placeholder */}
        <div className="w-full space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>

        {/* Status and Price Placeholder */}
        <div className="flex w-full justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-20" />
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>

        {/* Buttons Placeholder */}
        <div className="flex gap-2">
          <div className="h-9 w-full bg-black/50 rounded-lg" />
          <div className="h-9 w-full bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pModal,setPModal]=useState(false)
  const {
    data: products,
    loading,
    refetch,
    error
  } = useFetch({
    fn: (params) => getAllProducts(params.searchparam || ""),
    params: { searchparam: "" },
  });
  const handleOpenProduct = () => {
    setIsModalOpen(true)
  }
  const mainpoducts:Product[] | null =products?.products
  return (
    <MaxWidthContainer>
      <div className="pt-18.75 w-full flex flex-col">
        <div className="w-full mt-10 py-25 p-5 bg-(--green) border rounded-3xl relative border-gray-200 ">
          {/* <Image
            src={bg}
            alt="background"
            className="w-full h-full object-cover rounded-3xl absolute top-0 left-0 opacity-20"
          /> */}
          <div className="w-full flex justify-center">
            <div className="w-full items-center justify-center max-w-150 flex flex-col gap-5">
              <div className="w-fit">
                <h2 className="text-center title-font2 text-[40px] sm:text-5xl lg:text-[65px] text-white leading-none tracking-header">
                  MARKETPLACE
                </h2>
              </div>
              <div className="w-full max-w-100 flex flex-col justify-center items-center gap-5">
                <p className="text-center text-lg text-white/75 leading-body title-font font-medium tracking-body">
                  HOME / STORE
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-25 gap-5 flex flex-col">
          <div className="w-full flex gap-5 flex-row">
            <div className="flex-1 overflow-hidden ">
              <div className="flex lg:hidden">
                <button className="border border-gray-200 cursor-pointer rounded-full size-10.5 flex justify-center items-center bg-(--card)">
                  <Image src={category} alt="category" className="size-6" />
                </button>
              </div>
              <div className="w-fit hidden lg:flex flex-row gap-3 lg:gap-4">
                {filterItems.map((item) => (
                  item.active ?<button className=' bg-(--primary) cursor-pointer whitespace-nowrap text-white rounded-xl px-5 py-1 title-font tracking-header'>
                      {item.title}
                  </button>:
                  <button className='border border-gray-100 cursor-pointer whitespace-nowrap text-(--secondary) rounded-xl px-5 py-1 title-font tracking-header'>
                      {item.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-fit">
              <SwitchCard />
            </div>
          </div>
          {
            loading && (<div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array(16).fill(null).map((_, index) => (
                      <ProductSkeleton key={index} />
                    ))}
                  </div>) 

          }
          {
            !loading && mainpoducts && (
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                {mainpoducts.map((product:Product) => (
                  <ProductCard
                    key={product._id}
                    {...product}
                  />
                ))}
              </div>
            )
          }
          {
            !loading && error &&(
              <div className="py-25">
                <NetworkEror/>
              </div>
            )
          }
          
        </div>
      </div>
      <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <CookieBanner/>
        <button
      onClick={() => setPModal(true)}
      className="fixed bottom-8 right-4 cursor-pointer sm:right-8 z-50 flex items-center justify-center size-14 bg-black text-white rounded-full shadow-lg shadow-black/20 hover:scale-110 active:scale-95 transition-all duration-200 group"
      aria-label="Add Item"
    >
      <Plus 
        size={28} 
        className="transition-transform group-hover:rotate-90 duration-300" 
      />
      <UploadProductModal isOpen={pModal} onClose={()=>setPModal(false)}/>
    </button>
    </MaxWidthContainer>
  );
}
