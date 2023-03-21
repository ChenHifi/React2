import React, {useState} from "react";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-extrabold mr-4 sm:text-4xl">JEMA.</h1>
                    <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>Acheter</li>
                    <li>A propos</li>
                    <li>Contact</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <h1 className="px-8 py-3 text-gray-700"><ShoppingBagIcon className="w-7"/></h1>
                    <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
                <div className="md:hidden hover:cursor-pointer flex items-center">
                    <div className="flex items-center">
                        <div className="px-8 py-3 text-gray-700">
                            <ShoppingBagIcon className="w-7" onClick={(e) => e.stopPropagation()} />
                        </div>
                        <div className="mx-2" onClick={(e) => e.stopPropagation()}>
                            {!nav ? <Bars3Icon className="w-6" onClick={handleClick}/> : <XMarkIcon className="w-6" onClick={handleClick}/>}
                        </div>
                    </div>
                </div>







            </div>

            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <li className="border-b-2 border-zinc-300 w-full">Home</li>
                <li className="border-b-2 border-zinc-300 w-full">Acheter</li>
                <li className="border-b-2 border-zinc-300 w-full">A propos</li>
                <li className="border-b-2 border-zinc-300 w-full">Contact</li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-700 px-8 py-3 mb-4">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>
           
        </div>
    )
}

export default Navbar