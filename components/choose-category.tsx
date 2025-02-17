"use client"

import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";
import Image from "next/image";

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories()

    console.log(result)
    return (
        <div className="mx-w-6xl py-4 mx-auto sm:p-16 sm:px-24">
            <h3 className="px-4 pb-4 text-3xl sm:pb-8 ">Elige tu categoria favorita</h3>

            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.MainImage.url}`}
                                alt={category.CategoryName}
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                width={180} // Set the width of the image
                                height={180} // Set the height of the image
                            />
                            <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{category.CategoryName}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default ChooseCategory;