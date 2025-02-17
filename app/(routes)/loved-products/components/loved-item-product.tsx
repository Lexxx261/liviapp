import ProductColorSize from "@/components/shared/product-color-size"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { UseLovedProducts } from "@/hooks/use-loved-products"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { Trash } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface LovedItemProductProps {
    product: ProductType
}
const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const router = useRouter()
    const { removeLovedItem } = UseLovedProducts()
    const { addItem } = useCart()


    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)}>
                <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} alt={product.slug}
                    className="overflow-hidden rounded-md sm:w-auto sm:h-32"
                    width={500} // Set the width of the image
                    height={500} // Set the height of the image
                    />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <div>
                        <h2 className="text-lg font-bold">{product.ProductName}</h2>
                        <p className="font-bold">{formatPrice(product.Price)}</p>
                        
                        <ProductColorSize Color={product.Color} Size={product.Size} />

                        <Button className="mt-5 rounded-full " onClick={addToCheckout}>Añadir al carrito</Button>
                    </div>

                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center dark:bg-white dark:text-black shadow-md p-1 hover:scale-110 transition")}>
                        <Trash size={20} onClick={() => removeLovedItem(product.id)} />
                    </button>
                </div>
            </div>

        </li>
    )
}

export default LovedItemProduct;