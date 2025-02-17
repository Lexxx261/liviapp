"use client"
import * as React from "react"
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48hrs",
        description: "Envio gratis en tus compras mayores a $2000",
        link: "#!"
    },
    {
        id: 2,
        title: "Novedades para los mas chicos",
        description: "Envio gratis en tus compras mayores a $2000",
        link: "#!"
    },
    {
        id: 3,
        title: "Compra por la web y recibi 10%",
        description: "Envio gratis en tus compras mayores a $2000",
        link: "#!"
    },
    {
        id: 4,
        title: "Promociones OUTLET",
        description: "Envio gratis en tus compras mayores a $2000",
        link: "#!"
    },
]

export function CarouselTextBanner() {
    const router = useRouter()
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            orientation="vertical"
            className="w-full max-w-4xl mx-auto"
        >
            <CarouselContent className="-mt-1 h-[200px]">
                {dataCarouselTop.map(({ id, title, link, description }) => (
                    <CarouselItem key={id} className="cursor-pointer" onClick={() => router.push(link)}>
                        <div className="p-1">
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="text-lg font-semibold">{title}</p>
                                    <p className="text-lg font-light">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default CarouselTextBanner;