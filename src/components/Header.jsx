import { Link } from "react-router";
import search from "../assets/search.svg";
import man from "../assets/man.svg";
import love from "../assets/love.svg";
import lock from "../assets/lock.svg";


const menuItems = [
    
    {
        id : 1,
        text : "HOME",
        link : "/",
    },
    {
        id : 2,
        text : "SHOP",
        link : "/shop",
    },
    {
        id : 3,
        text : "PRODUCT",
        link : "/product",
    },
    {
        id : 4,
        text : "PAGES",
        link : "/pages",
    },
    {
        id : 5,
        text : "BLOG",
        link : "/blog",
    },
]

const Header = () => {
  return (
    <header>
        <nav className="container  py-7.5">
            <div className="flex items-center justify-between mb-[13px]">
                {/* Logo */}
                <div className="w-[159px] h-[40px] text-[black] flex items-center text-[24px] leading-[36px] font-jost font-semibold tracking-[0.46%]">
                    <h3>Modevo</h3>
                </div>

                {/* Links */}
                <div>
                    <ul className="flex w-[406px] h-[24px] justify-between ">
                        { menuItems.map((item) => {
                                return(
                                    <li key={item.id}>
                                        <Link className="text-[blackDOA] text-[14px] font-jost font-medium" to= {item.link}>
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                        })}                     
                    </ul>
                </div>

                {/* Icons */}
                <div className="flex justify-end gap-4">
                    <IconBox icon={search} />
                    <IconBox icon={man} />
                    <IconBox icon={love} count />
                    <IconBox icon={lock} count />
                </div>
            </div>
            
        </nav>

    </header>
  );
};

function IconBox({icon , count = false}){
    return(
        <button className="size-6 flex items-center justify-center cursor-pointer relative" >
            <img src={icon} alt="icon" />
            {
                count && (<span className=" bg-red-500 text-[white] size-4 rounded-full flex items-center justify-center absolute -top-1 -right-2 text-[10px] ">0</span>)
            }


            
        </button>
    )
}

export default Header