import React from 'react'

function Header() {
    return (
        <header className="w-full h-[4.4vw] flex justify-between items-center px-25 bg-white/45 backdrop-blur-3xl fixed top-0 z-50">
            <p className="text-[2vw]">tej</p>
            <nav className="w-[25.1vw] ">
                <ul className="flex justify-between">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#work">Work</a></li>
                    <li><a href="/about">About me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header