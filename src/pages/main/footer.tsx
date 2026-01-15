import React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube
} from "react-icons/fa";

import logo from "@/assets/img/logo.png"; // ajusta la ruta si aplica

export const FooterComponent: React.FC = () => {
    return (
        <footer className="py-12 bg-blue-950 text-gray-400 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* LOGO + TEXTO */}
                <div className="flex items-center gap-4 text-center md:text-left">
                    <img
                        src={logo}
                        alt="Iglesia Bautista Hebrón"
                        className="w-10 h-10"
                    />

                    <div>
                        <h3 className="text-white text-2xl font-semibold">
                            IBH
                        </h3>
                        <p className="text-gray-400 text-sm italic">
                            "Somos una gran familia de Dios"
                        </p>
                    </div>
                </div>

                {/* REDES SOCIALES */}
                <div className="flex gap-6">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100081298615573"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaFacebookF size={24} />
                    </a>

                    <a
                        href="https://www.youtube.com/@iglesiabautistahebron1905"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaYoutube size={24} />
                    </a>
                </div>

            </div>

            {/* COPYRIGHT */}
            <p className="text-center mt-10 text-gray-600 text-sm">
                © 2026 Iglesia Bautista Hebrón. Todos los derechos reservados.
            </p>
        </footer>
    );
};
