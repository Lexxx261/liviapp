"use client"

import { UseLovedProducts } from "@/hooks/use-loved-products"
import LovedItemProduct from "./components/loved-item-product"


export default function Page() {
    const {lovedItems} = UseLovedProducts()

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="text-2xl">
                Tus productos favoritos
            </h1>
            <div>
                <div>
                    {lovedItems.length === 0 && (
                        <p>Aun no agregaste productos favoritos</p>
                    )}
                    <ul>
                        {lovedItems.map((item) => (
                            <LovedItemProduct key={item.id} product={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}