import { Menu,X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = ()=>{
    const data = [
        {
            title: "support",
            link: "/support",
          },
          {
            title: "Stories",
            link: "/story",
          },
          {
            title: "donations",
            link: "/donations",
          },
      
          {
            title: "About",
            link: "/about",
          },
    ]
    const [menu,menuOpen] = useState(false)
    function toggle(){
        menuOpen(!menu)
    }
    return (
        <div className="w-full top-0 sticky flex flex-row p-4 z-[90] shadow-sm shadow-black">
            <h1 className="flex basis-1/2 ml-12 text-xl font-bold">Ethos Health</h1>

            <nav className="hidden md:flex basis-1/2 flex-row  items-center justify-around w-[90%]">
                {data.map(({title,link})=>(
                    <Link to={link} className="hover:underline font-[400] hover:underline-offset-4 hover:decoration-[#677EFE] cursor-pointer">{title}</Link>
                ))}
            </nav>
            <button className="flex basis-1/2 justify-end  md:hidden" onClick={toggle}>
                {menu?<X />:<Menu />}
            </button>
            {menu && <nav className="flex flex-col items-center justify-center md:hidden">
                {data.map(({title,link})=>(
                    <Link to={link} className="hover:underline font-[400] hover:underline-offset-4 hover:decoration-[#677EFE] cursor-pointer">{title}</Link>
                ))}
                </nav>}
        </div>
    )
}

export default Header