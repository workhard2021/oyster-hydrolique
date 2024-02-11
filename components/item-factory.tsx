import { AiFillCheckCircle } from "react-icons/ai";
import { ListMetier } from "./listeMetier";
export const ItemFactory=({data,title}:any)=>{
    if((!data) || (data && data.length===0)){return null}
    return (<div className="relative w-full mx-auto">
                {title? <p className="w-full m-auto text-justify mb-8">{title}</p>:null}
                <div className="z-0 w-1 flex justify-center items-center relative top-[3%] left-[50%] bg-blue-900 rounded-t-full h-[60px]">
                     <div className=" absolute w-[15px] h-[15px] m-auto rounded-full bg-blue-600">
                     </div>
                </div>
                 <div className="z-10 relative flex flex-wrap md:w-[75%] w-[95%] m-auto p-5 py-8 my-0 bg-white rounded-md shadow-xl">
                     {data && data.map((value:any, index:number)=>{
                         return <div key={index}  className="w-full h-auto p-2">
                                <div className="w-full leading-snug flex">
                                       <AiFillCheckCircle className="inline text-[#122489]" size={25}/> 
                                       <p className="first-letter:capitalize">
                                           <span className="pl-2 inline">{value.title}</span>
                                       </p>
                                </div>
                         </div>
                     })}
                  </div>
                  <div className="z-0 w-1 flex justify-center items-center relative top-[3%] left-[50%] bg-blue-900 rounded-b-full h-[60px]">
                     <div className=" absolute w-[15px] h-[15px] m-auto rounded-full bg-blue-600">
                     </div>
                  </div>
    </div>);
}

export const FactoryContainer=({metier,data,title,title_2,data_2,image,name}:any)=>{
    return(<div className="w-full m-auto pb-[30px]">
            {/* <h2  className="auto text-center w-full uppercase text-[#231942] mb-[65px]">{name}</h2> */}
            <div className="w-full flex justify-between flex-wrap">
               <div className="md:w-[50%] w-full mx-auto">
                   <ItemFactory data={data} title={title}/>
                   <ItemFactory data={data_2} title={title_2}/>
               </div>
               <div className="md:w-[50%] h-auto w-full flex justify-center items-start mx-auto">
                   <div className="mx-auto rounded-full w-[450px] h-[450px] bg-url" style={{backgroundImage:`url(${image})`}}/>
               </div>
            </div>
            <ListMetier data={metier}/>
    </div>)
}
