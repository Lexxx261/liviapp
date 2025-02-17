import { ProductType } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import IconButton from "@/components/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import ProductColorSize from "@/components/shared/product-color-size";


type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    const router = useRouter()

    console.log(product.images)

    return (
        <Link href={`/product/${product.slug}`}
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.Size}</p>
                <p className="px-2 py-1 text-xs text-white bg-slate-600 rounded-full dark:bg-white dark:text-slate-200 w-fit">{product.Color}</p>
            </div>

            <Carousel opts={{ align: "start" }} className="w-full max-w-sm">

                <CarouselContent>
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} alt="Image"
                                className="rounded-xl" />

                            <div className="absolute w-full px-6 transition-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`/product/${product.slug}`)} icon={<Expand size={20} className="text-gray-600"/>} />
                                    <IconButton onClick={() => console.log("product")} icon={<ShoppingCart size={20} className="text-gray-600"/>} />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
                    <p className="text-2xl text-center">{product.ProductName}</p>
                    <p className="font-bold text-center">{formatPrice (Number(product.Price))}</p>
        </Link>


    );
}

export default ProductCard;