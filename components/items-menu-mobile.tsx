import { Menu } from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/category/pantalon" className="block">Pantalón</Link>
                <Link href="/category/remera" className="block">Remera</Link>
                <Link href="/category/buzo" className="block">Buzo</Link>
            </PopoverContent>
        </Popover>

    )
}
export default ItemsMenuMobile;