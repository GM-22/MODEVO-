import { Link } from "react-router";
import search from "../assets/search.svg";
import man from "../assets/man.svg";
import love from "../assets/love.svg";
import lock from "../assets/lock.svg";
import menu from "../assets/menu.svg";
import arrow from "../assets/down_arrow.svg";
import gray from "../assets/gray_arrow.svg";
import white from "../assets/white_search.svg";


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
    <header className="bg-white">
        <nav className="container  py-7.5">
            <div className="flex items-center justify-between mb-3.25">
                {/* Logo */}
                <div className="w-39.75 h-10 text-[black] flex items-center text-[24px] leading-9 font-jost font-semibold tracking-[0.46%]">
                    <h3>Modevo</h3>
                </div>

                {/* Links */}
                <div>
                    <ul className="flex w-101.5 h-6 justify-between ">
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
                            {/* SEARCH */}
            <div className="flex h-10 gap-2.5 mb-8">

                {/* Menu */}
                <button className="w-10.25 p-2 bg-[#F3F3F3] flex items-center justify-center">
                    <img src={menu} alt="" />
                </button>

                {/* Departments */}
                <div className="w-49.5 px-4.75 py-2.5 flex gap-1 bg-[#F3F3F3] items-center">
                    <p className="max-w-36.75 text-[12px] leading-5.25 font-medium">
                    ALL DEPARTMENTS 
                    {/* this will me select tag */}
                    </p>
                    <img src={arrow} alt="" className="w-4.5 h-4.5" />
                </div>

                {/* Search Bar */}
                <div className="w-full flex items-center border border-[#E7E7E7] text-[#757575]">

                    {/* Input */}
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-254.25 h-9.5 pl-7.5 pr-0 py-2 border-none outline-none"
                        />
                    </div>

                    {/* Category */}
                    <div className="h-[23.5px] w-33 flex items-center gap-1 border-l border-[#E7E7E7] pl-4.75">
                        <p className="max-w-25 text-[14px] leading-5.25 font-medium text-[#757575]">
                            All Category
                        </p>
                        <img src={gray} alt="" />
                    </div>

                    {/* Search Button */}
                    <div className="w-19.25 h-10 px-[26.5px] py-2 flex items-center justify-center bg-[#222222] ml-3.75">
                        <img src={white} alt="" />
                    </div>

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
                count && (<span className=" bg-red-400 text-[white] size-4 rounded-full flex items-center justify-center absolute -top-1 -right-2 text-[10px] ">0</span>)
            }


            
        </button>
    )
}

export default Header