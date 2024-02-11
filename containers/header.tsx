
import { HEADER_MENU } from "../constants/headers-menu"
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header=({logo,data}:any)=>{
    return (<header className="w-full z-20 sticky top-0 bg-white shadow-sm shadow-gray-100">
           <HeaderDesktop logo={logo} data={data}/>
           <HeaderMobile logo={logo} data={data}/>
    </header>)
}

Header.defaultProps={
    logo:'../images/logo.png',
    data:HEADER_MENU
}