import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import Cookies from 'js-cookie';
export const CookiesSite=({data}:any)=>{
    const [disable,setDesable]=useState(false);
    const [up,setUp]=useState(false);
    const cookieName='Oyster-tech-ckie';
    const cancelCooke=(e:any)=>{
          e.preventDefault();
          setDesable(true);
    }
    const accept=(e:any,x:boolean)=>{
        e.preventDefault();
         //expire in 24 hours
        const expires=new Date(new Date().getTime() + 86400000);
        const expire_domain={expires, path: '/' };
        if(x){
            Cookies.set(cookieName,'accepté',expire_domain);
            setDesable(true);
        }else{
            Cookies.get(cookieName);
            Cookies.set(cookieName,'réfusé',expire_domain);
            setDesable(true);
        }
    }
    useEffect(()=>{
        const t=setTimeout(()=>{
          const a=Cookies.get(cookieName);
         if(!(a===null || a===undefined)){
             setDesable(true);
          }else{
            setDesable(false);
         }
         if(!up){
            setUp(true);
         }
       },10000);
       return ()=>clearTimeout(t);
    });
    if(!up) return null;
    return (!disable)? (<div className="pb-32  bg-[rgba(0,0,0,0.5)] fixed  left-0 top-0 flex justify-center items-end h-full w-full z-[9999]">
    <div className="md:w-[50%] w-[95%] mx-auto h-auto bg-gray-50 p-4 shadow-md rounded-sm">
         <div className="w-full h-auto flex justify-start">
               <div className="relative mr-auto rounded-full w-[130px] h-[130px] bg-url" style={{backgroundImage:`url(${data.image})`}}/>
               <div className="w-[50%] ml-auto">
                   <BiX onClick={(e)=>cancelCooke(e)} className="inline float-right  cursor-pointer p-2" size={40}/>
               </div>
         </div>
         <p className="w-full text-md text-black font-bold mb-4">
            {data.title}
         </p>
         <p className="w-full text-sm text-gray-700 my-4">
            {data.description}
         </p>
         <div className="flex justify-around  items-center">
             <button onClick={(e)=>accept(e,false)} className="px-6 py-2 rounded-md capitalize hover:bg-red-700 transition-all duration-75 ease-linear bg-red-500 text-white">réfuser</button>
             <button onClick={(e)=>accept(e,true)} className="px-6 py-2 rounded-md capitalize hover:bg-blue-900 transition-all duration-75 ease-linear bg-blue-500 text-white">accepter</button>
         </div>
    </div>
  </div>):null;
}

CookiesSite.defaultProps={
    data:{
         title:'Ce site utilise des cookies pour vous fournir la meilleure expérience de navigation possible.',
         description:'cliquant sur " Accepter ", vous acceptez que Oyster technology, stocker des cookies sur votre appareil et divulguer des informations conformément à notre politique en matière de cookies.',
         image:'../images/cookie.png'
    }
}