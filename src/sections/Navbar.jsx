import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { Link } from "react-router-dom";
const NavItems=()=>{
    const items = [
        {Name:"Home", link:"/"},
        {Name:"About", link:"/About"},
        {Name:"Products", link:"/Products"},
        {Name:"Contact", link:"/Contact"},
        {Name:"FAQs", link:"/FAQs"},
    ]
    return(
        <ul className="nav-ul"> 
            {items.map((item,index)=>{
                return(
                <li key={index} className="font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 text-white hover:text-neutral-400">
                    <Link className="nav-ul_a" to={item.link}>{item.Name}</Link>
                </li>
            )})}
        </ul>
    )
}

function Navbar() {
    const [isOpen,setIsOpen]= useState(false);
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-slate-900' >
            <div className="max-w-7xl ">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-white font-bold text-xl hover:text-neutral-400 transition-colors">Berimbolo</a>
                    <button onClick={()=>{setIsOpen(!isOpen)}} className="text-white hover:text-neutral-400 focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <FontAwesomeIcon icon={isOpen ? faX:faBars}  className={isOpen? 'w-4 h-4':'w-6 h-6'}/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen':'max-h-0'}` }>
                <nav className="p-5">
                    <NavItems/>
                </nav>
            </div>
        </header>
    )
}

export default Navbar