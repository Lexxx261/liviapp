interface ProductColorSize {
    Color: string,
    Size: string | null
}

const ProductColorSize = (props: ProductColorSize) => {
    const { Color, Size } = props

    return (
        <div className="flex items-center gap-3">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dar:bg-white dark:text-black w-fit">
                {Color}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-slate-500 rounded-full dar:bg-white dark:text-black w-fit">
                {Size}
            </p>
        </div>
    )
}

export default ProductColorSize;