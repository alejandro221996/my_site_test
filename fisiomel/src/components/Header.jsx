import Link from "next/link";

export default function Header() {
    return (
        <header className="border-2 border-gray-400 bg-white text-gray-700">
            <nav class="border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://metropolitanhost.com/themes/templatemoster/html/physiorapy/assets/img/logo.png" class="h-14 mr-6 sm:h-9 transition-transform duration-150 ease-out hover:scale-150" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-black font-serif">Fisiomel</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="#" class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Agendar</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-black" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-black">Portafolio</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-black">Testimonios</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-black">Servicios</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-black">Equipo</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 hover:text-black">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}