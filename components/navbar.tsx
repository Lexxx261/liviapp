"use client"
import Image from "next/image";
import logoLight from "./assets/logos/logo.png";
import logoDark from "./assets/logos/logo-w.png";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "../components/menu-list"
import ItemsMenuMobile from "./items-menu-mobile";
import ModeToggle from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";

const Navbar = () => {
    const { resolvedTheme } = useTheme();
    const router = useRouter()
    const cart = useCart()
    const {lovedItems} = UseLovedProducts()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <Image
                src={resolvedTheme === "dark" ? logoDark : logoLight}
                alt="Logo"
                width={100}
                height={100}
                onClick={() => router.push("/")}
                className="cursor-pointer"
            />
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden ">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {cart.items.length === 0 ?
                    <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/cart")} />
                    : (
                   <div className="flex gap-1" onClick={() => router.push("/cart")}>
                    <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                    <span>{cart.items.length}</span>
                   </div>
                )}

                <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} 
                onClick={() => router.push("/loved-products")} />
                <User strokeWidth={1} className="cursor-pointer" />
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navbar;