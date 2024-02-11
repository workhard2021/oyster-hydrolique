import DATA from "../../constants/data"
import Link from "next/link"
import Image from "next/image"
import IconContact from "../iconContact"

const Contact = ({data}:any)=>{
     return <div className="w-full h-[550px] md:pb-8 flex relative flex-col">
           <div className='absolute top-0 right-0 contact-image'>
               <Image src={data.firstImage} alt="..." fill />
           </div>
           <div className="w-full p-5 md:w-[60%] ml-0 md:ml-24 top-0 md:top-14">
             <h1 className='contact-title mb-12 text-start text-4xl text-blue-900 capitalize'>{data.title}</h1>
             <p className="text-xl mb-4">{data.description}</p>
           </div>
            <div className="bg-blue-900 mt-auto p-2 py-3 md:py-8 px-5 md:rounded-r-[80px] w-full md:w-[90%] flex flex-wrap md:flex-nowrap">{
                 data.list.map((val:any,index:number)=>{
                    return <div key={index} className="md:w-[30%] w-[100%] flex flex-wrap justify-center">
                       <span className="inline-block mb-4"><IconContact typeIcon={val.icon}/></span>
                       <div className="w-full text-center">{val.url?
                           <Link className="text-white text-xl" href={val.url} >{val.title}</Link>
                           :
                           <span className="text-white text-xl">{val.title}</span>
                        }</div>
                   </div>
                 })
               }
            </div>
       </div>
}
Contact.defaultProps={
   data:DATA.contact
}
export default Contact;