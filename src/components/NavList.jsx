import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoContainer from "./LogoContainer";

function NavList() {
    return (
        <ul className="text-black my-2 pdl:bg-[#f6f36c] rounded-lg drop-shadow-lg p-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-Lora">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#home" className="flex text-[#46500b] font-bold items-center hover:text-[#aba73c] transition-colors">
                    Beranda
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#catalog" className="flex text-[#46500b] font-bold items-center hover:text-[#aba73c] transition-colors">
                    Katalog
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#contact" className="flex text-[#46500b] font-bold items-center hover:text-[#aba73c] transition-colors">
                    Kontak
                </a>
            </Typography>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () => {
        if (window.innerWidth >= 960) {
            setOpenNav(false); // Close nav on large screens
        }
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="tnl:max-w-[768px] bg-transparent border-none items-center content-center backdrop-blur-md shadow-md z-50 fixed top-0 pdl:max-w-[425px] w-full mx-auto pdl:justify-center max-w-screen-xl h-20 px-8 py-3">
            <div className="flex items-center justify-between flex-row">
                <LogoContainer/>

                {/* NavList for desktop view */}
                <div className="hidden lg:block">
                    <NavList />
                </div>

                {/* Hamburger menu button for mobile view */}
                <IconButton
                    variant="text"
                    className="ml-auto pdl:mt-[-33px] tnl:mt-[-33px] h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            {/* Mobile navigation with smooth open/close transition */}
            <div
                className={`lg:hidden transition-all ease-in-out duration-300 transform ${openNav ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <NavList />
            </div>
        </Navbar>
    );
}
