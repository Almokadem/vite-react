import { Link } from "react-router-dom"
const FooterItems=()=>{
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
const Footer = () => {
    return (
        <footer className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <p className="text-lg">&copy; 2024 Your Security Company. All rights reserved.</p>
                </div>
                <div className="flex justify-center gap-8">
                    <FooterItems/>
                </div>
            </div>
        </footer>

    )
}

export default Footer