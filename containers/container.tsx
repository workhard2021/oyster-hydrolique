import { BiX } from "react-icons/bi"
import { CookiesSite } from "../components/cookies-site"
import { ItemsContacts } from "../components/ItemsContacts"
import { ScrollCloud } from "../components/scrollCloud"
import { ScrollTop } from "../components/scrollTop"
import { Footer } from "./footer"
import { Seo } from "./Seo"
import Contact from "../components/home/contact"
type propsConaitner={
      children:JSX.Element|JSX.Element[],
}
export const Container=({children}:propsConaitner)=>{
    return (<><Seo/>
        <div className={`relative w-full m-auto`}>
            {children}
            <Contact/>
            {/* <ItemsContacts/> */}
            {/* <Footer/> */}
        </div>
        <CookiesSite />
        <ScrollTop />
    </>)
}
