import React from 'react';
import {MdNightsStay, MdWbSunny} from "react-icons/md";

function Header({darkMode, setDarkMode}) {
return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="flex justify-between items-center px-5 pt-3 pb-2">
            <h1 className="text-xl">PORTFOLIO</h1>

            <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
                <MdWbSunny className="text-3xl cursor-pointer duration-300 ease-in-out hover:scale-110"/>
            ) : (
                <MdNightsStay className="text-3xl cursor-pointer duration-300 ease-in-out hover:scale-110"/>
            )}
            </div>
            

        </nav>
    </header>
);
}

export default Header;