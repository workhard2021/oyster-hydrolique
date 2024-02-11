import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {BsChevronDown,BsListNested,BsX,BsChevronRight} from 'react-icons/bs';

export const HeaderMobile=({data,logo}:any)=>{
      const route=useRouter();
      const [isOpenMenu,setIsOpenMenu]=useState(false);
      const displaySubMenu=(e:any,id:string)=>{
            e.preventDefault();
            const el:any=document.getElementById(id);
            if(el){
                el.classList.toggle('menu_mobile');
            }
      }
      return (<nav className="md:hidden flex justify-around w-full h-auto py-3">
      <div className="w-[20%] flex items-center">
          <div onClick={()=>route.push(process.env.NEXT_PUBLIC_HOME||'/')}  className="relative w-full h-full bg-url-logo" style={{backgroundImage:`url(${logo})`}} />
      </div>
      <div className="w-[50%] flex justify-end items-center">
          <span  onClick={()=>setIsOpenMenu(!isOpenMenu)} className="inline-block cursor-pointer p-2">
              {!isOpenMenu? <BsListNested className="inline" size={40} /> :<BsX className="inline" size={45} />}
          </span>
      </div>
      {isOpenMenu?
      <div className="absolute  left-0 top-[82px] w-full overflow-y-auto z-50 p-4 md:h-auto h-[450px] bg-gray-100">
             {data && data.map((value:any,index:number)=>{
                return <div id={`menu_mobile_${index+1}`} onClick={(e)=>displaySubMenu(e,`menu_mobile_${index+1}`)}  key={index} className="w-auto h-auto p-2 m-2 text-[#231942] hover:text-red-600 transition-all ease-in-out duration-75">
                       <div  style={{fontWeight:"400"}}  className="leading-8 font-fontWeightSmall text-[20px] w-full my-1">
                               {value.url!=='/'?<Link className="px-2 uppercase" href={value.url}>{value.title}</Link>
                                :<Link className="px-2 uppercase" href={value.url}>{value.title}</Link>    
                               }
                               {(value.sous_menu && value.sous_menu.length>0)?<BsChevronDown className="inline" size={20}/>:null}
                       </div>
                       <div  className="sub_menu_mobile hidden mx-5 leading-8 font-fontWeightBig text-[#231942] text-[20px]">
                          {(value.sous_menu && value.sous_menu.length>0) && value.sous_menu.map((val:any,key:number)=>{
                              return <div key={key} className="w-full hover:text-red-400 transition-all ease-in-out duration-75">
                                   <BsChevronRight className="inline text-gray-400" size={20}/>
                                   {val.url!=='/'?
                                      <Link className="px-2 inline-block my-1 first-letter:capitalize" href={val.url}>{val.title}</Link>
                                      :
                                      <span className="px-2 inline-block my-1 first-letter:capitalize cursor-pointer">{val.title}</span>
                                    }
                               </div>
                          })}
                       </div>
                   </div>
             })}
      </div>:null}
  </nav>)
}