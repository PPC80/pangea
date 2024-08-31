import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className="absolute z-10 w-full">
            <nav className="mx-auto flex max-w-[1380px] items-center justify-between py-6 sm:px-16">
                <Link href="/" className="flex items-center justify-center">
                    <Image
                        src="/logo-white-cr.png"
                        alt="Pangea Travel Logo"
                        width={334}
                        height={210}
                        className="object-contain"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </Link>
                <div className="flex flex-row space-x-6">
                    <Link
                        href="/"
                        className="text-white hover:text-primary-green"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/"
                        className="text-white hover:text-primary-green"
                    >
                        Tours Internacionales
                    </Link>
                    <Link
                        href="/"
                        className="text-white hover:text-primary-green"
                    >
                        Tours de Fútbol
                    </Link>
                    <Link
                        href="/"
                        className="text-white hover:text-primary-green"
                    >
                        Conócenos
                    </Link>
                    <Link
                        href="/"
                        className="text-white hover:text-primary-green"
                    >
                        Contáctanos
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar
