import ProductColorSize from "@/components/shared/product-color-size";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const router = useRouter()
    const { removeItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} alt={product.slug}
                    width={180} // Set the width of the image
                    height={180} // Set the height of the image
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold"> {product.ProductName}</h2>
                    <p className="font-bold">{formatPrice(product.Price)}</p>

                    <ProductColorSize Color={product.Color} Size={product.Size} />

                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center dark:bg-white dark:text-black shadow-md p-1 hover:scale-110 transition")}>
                        <Trash size={20} onClick={() => removeItem(product.id)} />
                    </button>
                </div>

            </div>
        </li>
    )
}

export default CartItem;