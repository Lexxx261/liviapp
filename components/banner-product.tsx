import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumergete en una expreriencha unica</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">Las Mejores prendas</h4>
                <p className="my-2 text-lg">Animate a lo nuevo</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] lg:h-[600px] bg-[url('/compra-slide.webp')] bg-center bg-no-repeat bg-cover mt-5"></div>
        </>
    )
}

export default BannerProduct;