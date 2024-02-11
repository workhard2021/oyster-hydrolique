import Link from "next/link"
import { useState } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import { avatarFn } from "../libs/utils"

export const NosOpportunites=({data}:any)=>{
    const [localData,setLocalData]=useState([data[0],data[1],data[2],data[3]]);
    const nextArticle=(e:any)=>{
            e.preventDefault();
    }
    return (<div className="w-full">
                <div className="md:w-[92%] w-full flex flex-wrap justify-around m-auto mb-8">
                    <h2 className="my-auto md:w-[50%] w-full text-4xl text-blue-900">We Understand Needs</h2>
                    <div className="my-auto md:w-[50%] w-full flex justify-end flex-wrap">
                        <p className="md:w-[70%] w-full m-2 text-700">We Understand Needs A process that involves everything from identifying, attracting, shortlisting, interviewing, selecting, hiring, screening & onboarding employees.</p>
                        <div className="m-2">
                            <span onClick={(e)=>nextArticle(e)} className="border-gray-300 hover:bg-blue-700 transition all duration-75 p-1 rounded-md inline-block border-2 mx-2 cursor-pointer">
                                <AiFillCaretLeft className="inline text-gray-400" size={30}/>
                            </span>
                            <span onClick={(e)=>nextArticle(e)}  className="border-gray-300 hover:bg-blue-700 transition all duration-75 p-1 rounded-md inline-block border-2 mx-2 cursor-pointer">
                                <AiFillCaretRight className="inline text-gray-400" size={30}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="full flex justify-center flex-wrap">
                   {localData && localData.map((val:any,index:number)=>{
                       return <div key={index} className="sm:w-[45%] md:w-[45%] w-[95%] md:min-h-[230px] white m-4 flex bg-gray-50 flex-wrap shadow-md hover:shadow-xl transition-all duration-75 ease-linear item_opportunites">
                                 <div className="relative md:w-[40%] w-full md:h-full h-[250px] overflow-hidden">
                                     <div className="relative h-full w-full rounded-md  item_opportunites_image" style={{backgroundImage:`url(${avatarFn(val.image)})`}} />
                                 </div>
                                 <div className="relative md:w-[60%] w-full flex justify-center items-center">
                                  <div className="absolute md:block hidden -left-6 top-[20%]">
                                     <AiFillCaretLeft className="inline text-white text-5xl"/>
                                  </div>
                                   <div className="m-auto w-full p-8">
                                      <h4 className="py-3 font-bold text-[20px] text-blue-900">
                                         <Link href={`/nos-opportunites/${val.slug}`}>{val.title}</Link>
                                      </h4>
                                      <p className="text-[15px] mb-3  leading-6">{val.sub_title}</p>
                                      <Link href={`/nos-opportunites/${val.slug}`} legacyBehavior>
                                          <a className="text-[15px] text-blue-900">Lire plus !</a>
                                      </Link>
                                   </div>
                             </div>
                       </div>
                     })
                   }
                </div>
    </div>)
}