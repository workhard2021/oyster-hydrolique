import Link from 'next/link';
import { useEffect, useState } from 'react';
import {BiChevronRight} from 'react-icons/bi';
import { EXPERTISE } from '../constants/data-expertise';

export const ItemOffres=({data,title}:any)=>{
  const [scroll,setScroll]=useState(0);
  useEffect(()=>{
      const el=document.getElementsByClassName('visible-transition') as HTMLCollectionOf<HTMLElement>;
      let a:number=0;
      if(window){
        window.addEventListener('scroll',function(){
            a= window.pageYOffset;
            setScroll(a);
        });
      }
      if(el){
          for(let e of el){
             if(e.offsetTop<=scroll){
                  e.style.opacity="1";
                  e.style.transition="opacity 0.8s ease-in-out";
             }
          }
      }
  },[scroll]);
  return (<div className="relative w-full m-auto mb-[65px]">
               <h2 className="relative w-full text-center mb-[65px] font-fontWeightBig opacity-0 visible-transition">{title}</h2>
               <div className="relative w-full flex justify-center items-start flex-wrap">
                 {data && data.map((value:any,index:number)=>
                  <div key={index} className="relative md:w-[45%] w-full bg-white shadow-xl shadow-gray-300 pb-8 md:m-4 my-4 mx-auto opacity-0 md:h-[500px] h-auto visible-transition">
                          <div className="w-full bg-[#122480] px-8 py-8">
                                <p className="text-white  capitalize py-1 md:text-[16px] text-[15px]">{value.name}</p>
                                <h3 className="text-white md:text-[25px] text-[20px]">{value.title}</h3>
                                <div className='absolute top-[2%] md:block md:top-[4%] right-8 md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-url rounded-full' style={{backgroundImage:`url(${value.icon})`}}/>
                          </div>
                          <div className='w-full py-9'>
                            {value.list && value.list.map((val:any,index:number)=>
                               <p key={index} className="w-full py-2 px-6 font-[400]">
                                   <BiChevronRight size={20} className="inline"/>
                                   <span className='px-2'>{val.text}</span>
                               </p>
                            )}
                          </div>
                          <div className='w-full px-8'>
                             <Link href={`expertise/${value.slug}`} legacyBehavior><a className='py-2 hover:text-blue-700 text-[#122480] font-bold'>En savoir plus</a></Link>
                          </div>
                     </div>
                 )}
               </div>
    </div>)
}

ItemOffres.defaultProps={
     title:'Expertises',
     data:EXPERTISE
}