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
const o={
    id: '1',
    name: 'Premium Leather Handbag',
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    description: 'Crafted from genuine Italian leather, this sophisticated handbag is the perfect companion for any occasion. Its timeless design and superior craftsmanship make it an investment piece.',
    details: [
      'Genuine Italian leather construction',
      'Spacious main compartment with multiple pockets',
      'Adjustable shoulder strap',
      'Gold-tone hardware',
      'Dust bag included'
    ],
    inStock: true,
  }

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    setSelectedProduct(o)
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
                  <FilterCard title={item.title} key={item.title} active={item.active} />
                ))}
              </div>
            </div>
            <div className="w-fit">
              <SwitchCard />
            </div>
          </div>
          {
            loading && (<div className="w-full h-[20vh] flex items-center justify-center">
                    <Spinner />
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
          product={o}
        />
        <CookieBanner/>
    </MaxWidthContainer>
  );
}
