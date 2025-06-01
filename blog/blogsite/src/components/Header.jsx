import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Blog Başlığı */}
                <h1 className="text-3xl font-bold tracking-wider hover:text-yellow-200 transition duration-300">
                    Blog Diyarı
                </h1>

                { }
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Navigasyon Menüsü */}
                <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-yellow-200 transition-colors duration-300 py-2 px-4"
                            >
                                Anasayfa
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/yazilar"
                                className="hover:text-yellow-200 transition-colors duration-300 py-2 px-4"
                            >
                                Yazılar
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/hakkimda"
                                className="hover:text-yellow-200 transition-colors duration-300 py-2 px-4"
                            >
                                Hakkımda
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/iletisim"
                                className="hover:text-yellow-200 transition-colors duration-300 py-2 px-4"
                            >
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
