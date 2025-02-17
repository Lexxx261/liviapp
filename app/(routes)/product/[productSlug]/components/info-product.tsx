import { ProductType } from "@/types/product";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import ProductColorSize from "@/components/shared/product-color-size";

export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    const {addItem} = useCart()
    const {addLoveItem} = UseLovedProducts()

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl font-bold">{product.ProductName}</h1>

                <ProductColorSize Color={product.Color} Size={product.Size}/>
                
            </div>
            <Separator className="my-4" />
            <p>{product.Description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl">{formatPrice(product.Price)}</p>
            <div className="flex items-center gap-5 ">
                <Button className="w-full" onClick={() => addItem(product)} > Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black"
                onClick={() => addLoveItem(product)} />
            </div>
        </div>
    )
}

export default InfoProduct;