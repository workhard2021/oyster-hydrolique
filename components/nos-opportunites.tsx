import Link from "next/link"
import { useState } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

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
                       return <div key={index} className="sm:w-[45%] p-8 md:w-[45%] w-[95%] md:min-h-[230px] white m-4 flex bg-gray-50 flex-wrap shadow-md hover:shadow-xl transition-all duration-75 ease-linear item_opportunites">
                                 <div className="relative w-full mx-auto">
                                      <h4 className="py-3 font-bold first-letter:capitalize text-[20px] text-blue-900">
                                         <Link href={`/candidature-spontanee`}>{val.title}</Link>
                                      </h4>
                                      <p className="text-[15px] mb-3 leading-6">{val.sub_title}</p>
                                      <Link href={`/candidature-spontanee`} legacyBehavior>
                                          <a className="text-[15px] font-bold text-blue-900">Postuler</a>
                                      </Link>
                             </div>
                       </div>
                     })
                   }
                </div>
    </div>)
}