import Link from "next/link";
import {useCallback, useEffect, useState} from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const LogoSection=({data}:any)=>{
    const [logo,setLogo]=useState({value:data?data[0]:'',position:0});
    const [time,setTime]=useState('');
    const [count,setCount]=useState(0);
    const [up,setUp]=useState(false); 
     const changeLogo=(e:any,data:any)=>{
        e.preventDefault();
        const {position,value}=data;
        const el=document.getElementById('carrousel');
        const text=document.getElementById('text_logo');
        if(text){
            text.style.opacity='0.5';
            text.style.transition='all 0.5s ease-out';  
         let t:any=setTimeout(()=>{
                text.style.opacity='1';
            },500)
            setTime(t);
        }
        if(el){
            el.style.opacity='0.5';
            el.style.transition='all 0.5s ease-out';  
            setTimeout(()=>{
                el.style.opacity='1';
                setLogo(()=>{return {position,value}});
            },400)
        }
     }
     const autoChange= useCallback(async()=>{
        const el=document.getElementById('carrousel');
        const text=document.getElementById('text_logo');
        setUp(true);
        if(count>=2){
            setCount(0);  
        }else{
            setCount(v=>v+1);
        }
        if(!up){
            return null;
        }
        if(text){
            text.style.opacity='0.5';
            text.style.transition='all 0.5s ease-out';  
            let t:any=setTimeout(()=>{
                text.style.opacity='1';
            },500)
            setTime(t);
        }
        if(el){
            el.style.opacity='0.5';
            el.style.transition='all 0.5s ease-out';  
            let t:any=setTimeout(()=>{
                el.style.opacity='1';
                setLogo(()=>{return {position:count,value:data[count]}});
            },400)
        }
     },[count]);

     const next=(e:any|null)=>{
        if(e){
           e.preventDefault();
        }
        const el=document.getElementById('carrousel');
        if(el){
            el.style.opacity='0.5';
            el.style.transition='all 0.5s ease-out';
            let t:any=setTimeout(()=>{
                let position=logo.position+1;
                let value=data[0];
                el.style.opacity='1';
                if(position<=2){
                   value=data[position];
                  setLogo((val:any)=>{return {position,value}});
                }else{
                    position=0;
                    setLogo(()=>{return {position,value}});
                }
            },200)
            setTime(t);
        }
     }

     const prev=(e:any)=>{
        e.preventDefault();
        const el=document.getElementById('carrousel');
       if(el){
           el.style.opacity='0.5';
           el.style.transition='all 0.5s ease-out';
           const t:any=setTimeout(()=>{
               let position=logo.position-1;
               let value=data[0];
               el.style.opacity='1';
               if(position<0){
                   position=2;
                   value=data[position];
                   setLogo(()=>{return {position,value}});
               }else{
                  if(position===3){
                   return setLogo((val:any)=>{return {position:0,value:data[0]}});
                  }
                  value=data[position];
                  setLogo((val:any)=>{return {position,value}});
               }
           },500);
           setTime(t);
       }
    }
    useEffect(()=>{
       const el=document.getElementById('home-logo');
            if(el){
               el.style.top='0%';
               el.style.transition="all 0.9s ease-in-out";
            }
        return ()=>{
             clearTimeout(time);
        }
     },[]);
     
     useEffect(():any=>{
        const v=setTimeout(()=>{
             autoChange();
         },8400);
         return ()=>clearTimeout(v);
     },[autoChange]);
 
    return (<div className="w-full relative mb-4 overflow-hidden">
             <div className="absolute left-0 md:block hidden h-full w-[60%] trasnparent_logo_first">
             </div>
             <div className="w-[98%] px-2 absolute z-10 top-[40%] left-[1%] flex justify-between">
                 <div className="w-[70px] md:inline-block hidden p-4 cursor-pointer" onClick={(e)=>next(e)}><AiOutlineLeft className="inline-block text-gray-50 font-light" size={50}/></div>
                 <div className="w-[70px] md:inline-block hidden p-4 cursor-pointer" onClick={(e)=>prev(e)}><AiOutlineRight className="inline-block text-gray-50 font-light" size={50}/></div>
             </div>
             <div  id='carrousel' className="relative w-full h-[70vh] md:overflow-hidden">
                <div id="home-logo" className="absolute top-[15%] left-0 w-full h-full item_opportunites_image_detail bg-black" style={{backgroundImage:`url(${logo.value.image})`}}/>
                <div id="text_logo" className="relative w-full md:top-[140px] z-10 top-[100px]">
                    <h2 className="text-center uppercase text-white md:text-[25px] text-[20px] py-4 text-title-shadow">{logo.value.sub_title}</h2>
                    <h1 style={{fontWeight:'600'}} className="text-center uppercase text-white md:text-[3vw] text-[30px] text-title-shadow">{logo.value.title}</h1>
                    <div className="w-full flex justify-center items-center  h-0">
                        <Link href={`${logo.value.slug}`} legacyBehavior><a className="px-9 mt-9 py-3 text-white text-[16px] hover:bg-blue-800 border-gray-800 border-[1px]  bg-blue-900 rounded-lg m-auto">Savoir plus</a></Link>
                    </div>
                </div>
             </div>
             <div className="absolute z-10 left-0 bottom-7 w-full my-2 flex justify-center items-center">
                 {data&&data.map((value:any,position:number)=>{
                    return <div key={position} className='py-2 w-[60px] cursor-pointer' onClick={(e)=>changeLogo(e,{position,value})}>
                         <div className={`w-[50px] h-1 ${position===logo.position?'bg-blue-900':'bg-gray-300'} m-3`}></div>
                    </div>
                 })}
            </div>
    </div>)
}

LogoSection.defaultProps={
     data:[
     {slug:'/expertise/gestion-de-l-eaux',title:'Gestion de l’eau',image:'../images/expertise/traitement-4.png',sub_title:"savoir faire confirmé"},
     {slug:'/expertise/industrie',title:'Industrie',image:'../images/expertise/traitement-5.png',sub_title:"savoir faire confirmé"},
     {slug:'/expertise/irregation',title:"Irrigation",image:'../images/expertise/traitement-6.png',sub_title:"savoir faire confirmé"},
  ]
}

