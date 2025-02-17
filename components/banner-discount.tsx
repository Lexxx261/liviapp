import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consigue hasta un 25% de descuento</h2>
            <h3 className="mt-3 font-semibold">Envio gratis en compras mayores a $2000</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 at-5 pt-2">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Más Información</Link>
            </div>
        </div>
    )
}

export default BannerDiscount;