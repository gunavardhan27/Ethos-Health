import { Menu,X } from "lucide-react"
import { useState } from "react"
const Header = ()=>{
    const data = [
        'Home',
        'Stories',
        'Donations',
        'Subscribe',
        'About us'
    ]
    const [menu,menuOpen] = useState(false)
    function toggle(){
        menuOpen(!menu)
    }
    return (
        <div className="w-full top-0 sticky flex flex-row p-4 z-[90] shadow-sm shadow-black">
            <h1 className="flex basis-1/2 ml-12 text-xl font-bold">Ethos Health</h1>

            <nav className="hidden md:flex basis-1/2 flex-row  items-center justify-around w-[90%]">
                {data.map(link=>(
                    <p className="hover:underline font-[400] hover:underline-offset-4 hover:decoration-[#677EFE]">{link}</p>
                ))}
            </nav>
            <button className="flex basis-1/2 justify-end  md:hidden" onClick={toggle}>
                {menu?<X />:<Menu />}
            </button>
            {menu && <nav className="flex flex-col items-center justify-center md:hidden">
                {data.map(link=>(
                    <p className="hover:underline font-[400] hover:underline-offset-4 hover:decoration-[#677EFE]">{link}</p>
                ))}
                </nav>}
        </div>
    )
}

export default Header