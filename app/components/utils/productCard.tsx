import Image from "next/image";
import bookmark from "@/app/assets/images/bookmark.svg";
import { useProductStore } from "@/app/store/products.store";
export default function ProductCard( product:Product) {
  const { setSelectedProduct } = useProductStore();
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full overflow-hidden image-curtain relative aspect-[0.882609/1] border-gray-200 bg-(--card) rounded-2xl ">
        <Image
          src={product.image[0].url}
          alt={product.title}
          className="size-full relative  rounded-2xl object-cover"
          width={100}
          sizes="100vw"
          height={100}
        />
      </div>
      <div className="w-ful flex flex-col gap-2.5">
        <div className="w-full">
          <p className="text-semibold leading-body line-clamp-2 tracking-body text-sm text-(--primary) atwtts">
            {product.title}
          </p>
        </div>
        <div className="flex w-full justify-between">
          {product.availabilityStatus ? (
            <p className="text-semibold leading-body tracking-body text-sm atwtts text-(--green)">
              Avaliable
            </p>
          ) : (
            <p className="text-semibold leading-body tracking-body text-sm atwtts text-(--warning)">
              Unavaliable
            </p>
          )}
          <p className="text-semibold leading-body tracking-body atwtts text-sm text-(--primary)">
            N{Number(product.price).toLocaleString('en-NG')} <i></i>
          </p>
        </div>
        <div className="flex gap-2">
          {product.availabilityStatus ? (
            <button className="w-full px-5 py-2 title-font2 bg-black transition-all rounded-lg font-medium leading-[1.1] tracking-body text-sm text-white ">
              {product.forSale ? "Purchase" : "Rent"}
            </button>
          ) : (
            <button className="w-full px-5 py-2 title-font2 bg-(--green) transition-all rounded-lg font-medium leading-[1.1] tracking-body text-sm text-white ">
              {product.forSale ? "Purchase" : "Rent"}
            </button>
          )}
           <button className="w-full px-5 py-2 title-font2 bg-(--card) border-2 border-gray-200 transition-all rounded-lg font-medium leading-[1.1] tracking-body text-sm text-black " onClick={()=>setSelectedProduct(product)}>
              View
            </button>
        </div>
      </div>
    </div>
  );
}
