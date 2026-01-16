import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import logo64ibh from "@/assets/icon/logo64x64.png"

const HeaderComponent = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full bg-blue-900 shadow-2xl z-50 overflow-x-hidden">
            <div className="flex items-center justify-between w-full px-4 sm:px-6 py-4">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo64ibh}
                        className="h-10 w-auto"
                        alt="Logo Iglesia Bautista Hebrón"
                    />

                    {/* TEXTO */}
                    <span className="text-white font-bold text-lg sm:hidden">
                        IBH
                    </span>
                    <span className="text-white font-bold text-xl hidden sm:block">
                        Iglesia Bautista Hebrón
                    </span>
                </Link>

                {/* MENÚ DESKTOP */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            {[
                                { to: "/", label: "Inicio" },
                                { to: "/doctrina", label: "Nuestra doctrina" },
                                { to: "/ministerios", label: "Ministerios" },
                                { to: "/predicacion", label: "Predicaciones" },
                                { to: "/contacto", label: "Contacto" },
                            ].map((item) => (
                                <NavigationMenuItem key={item.to}>
                                    <NavigationMenuLink
                                        asChild
                                        className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700`}
                                    >
                                        <Link to={item.to}>{item.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* BOTÓN MOBILE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl"
                    aria-label="Menú"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* MENÚ MOBILE */}
            {open && (
                <div className="md:hidden w-full bg-blue-900 border-t border-blue-700 px-6 py-6 space-y-5">
                    {[
                        { to: "/", label: "Inicio" },
                        { to: "/doctrina", label: "Nuestra doctrina" },
                        { to: "/ministerios", label: "Ministerios" },
                        { to: "/predicacion", label: "Predicaciones" },
                        { to: "/contacto", label: "Contacto" },
                    ].map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="block text-white text-lg text-center"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

export default HeaderComponent
