import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProductProps {
    images: {
        id: number;
        url: string
    }[]
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props

    return (
        <div className="sm:px-6">
            <Carousel>
                <CarouselContent>
                    {images.map((image) =>
                        <CarouselItem key={image.id}>
                            <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} alt="imag product"
                                className="rounded-lg"
                                width={300} // Set the width of the image
                                height={300} // Set the height of the image
                            />
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CarouselProduct;