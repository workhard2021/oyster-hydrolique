import { ItemsContacts } from "../components/ItemsContacts"
import { ScrollCloud } from "../components/scrollCloud"
import { Footer } from "./footer"
type propsConaitner={
      children:JSX.Element|JSX.Element[],
}
export const Wrapper=({children}:propsConaitner)=>{
    return (<>
        <div className={`w-full md:w-[90%] m-auto md:p-8 p-4`}>
            {children}
        </div>
    </>)
}
