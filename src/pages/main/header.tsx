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

const HeaderComponent = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full bg-blue-900 shadow-2xl fixed top-0 z-50">
            <div className="flex items-center justify-between w-full px-6 py-4">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/src/assets/icon/logo64x64.png"
                        className="h-10 w-auto"
                        alt="Logo"
                    />
                    <span className="text-white font-bold text-xl hidden sm:block">
                        Iglesía Bautista Hebrón
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
                                { to: "/contacto", label: "Contacto" },
                            ].map((item) => (
                                <NavigationMenuItem key={item.to}>
                                    <NavigationMenuLink
                                        asChild
                                        className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700 hover:text-white`}
                                    >
                                        <Link to={item.to}>{item.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* BOTÓN HAMBURGUESA (MOBILE) */}
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
                <div className="md:hidden bg-blue-900 border-t border-blue-700 px-6 py-6 space-y-4">
                    <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="block text-white text-lg"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/doctrina"
                        onClick={() => setOpen(false)}
                        className="block text-white text-lg"
                    >
                        Nuestra doctrina
                    </Link>
                    <Link
                        to="/ministerios"
                        onClick={() => setOpen(false)}
                        className="block text-white text-lg"
                    >
                        Ministerios
                    </Link>
                    <Link
                        to="/contacto"
                        onClick={() => setOpen(false)}
                        className="block text-white text-lg"
                    >
                        Contacto
                    </Link>
                </div>
            )}
        </header>
    )
}

export default HeaderComponent
