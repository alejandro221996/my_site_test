//Footer with social media links using tailwindcss with no icons

import React from 'react'

export default function Footer() {
    return (
        <div className="bg-white text-gray-700 text-center py-2 border-2 border-gray-400">
            <div className="flex justify-center">
                <a
                    href="https://www.facebook.com/fisiomel/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4  font-bold hover:text-black"
                >
                    Facebook
                </a>
                <a
                    href="https://www.instagram.com/fisiomel/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4  font-bold hover:text-black"
                >
                    Instagram
                </a>
                <a
                    href="https://www.youtube.com/channel/UCV9Jc3k3r3bqZ6JcZ6Q2aYQ"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4  font-bold hover:text-black"
                >
                    Youtube
                </a>
                <a
                    href="https://wa.me/5493516150000"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-4  font-bold hover:text-black"
                >
                    Whatsapp
                </a>

            </div>
            <p className="mt-4  font-bold">
                © {new Date().getFullYear()} Fisiomel. Todos los derechos reservados.
            </p>
        </div>
    );
}
