import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { avatarFn } from "../libs/utils";

export const ScrollCloud = ({data,title,sub_title}:any) => {
    const nextImage = (e:any)=>{
        e.preventDefault();
        const el=document.getElementById('scroll-partener');
        if(el){
            el.scrollBy({
              top:0,
              left:300,
              behavior: 'smooth'
           });
        }
    }
    const prevImage = (e:any) => {
        e.preventDefault();
        const el = document.getElementById('scroll-partener');
        if(el){
            el.scrollBy({
                top:0,
               left:-300,
               behavior: 'smooth'
            });
        }
    }
    if(data && data.length===0) return null;
    return (<div className="w-full mb-[65px]">
         <div id="partenaire"></div>
        <h2 className="w-full text-center mb-[35px] text-[35px] m-auto">{title}</h2>
        <div className="md:w-[50%] w-full text-center m-auto mb-[10px]">{sub_title}</div>
        <div className="relative py-4 m-auto md:w-[100%] w-full">
        <div className="relative md:w-[80%] w-full m-auto">
             <div className="absolute w-full top-[50%] h-0 m-auto flex z-20 rounded-md justify-between items-center">
                <button onClick={(e) => prevImage(e)} className="p-1 rounded-md outline-none relative"><BiChevronLeft className="inline text-gray-900" size={70}/></button>
                <button onClick={(e) => nextImage(e)} className="p-1 rounded-md outline-none relative"><BiChevronRight className="inline text-gray-900" size={70}/></button>
             </div>
             <div id='scroll-partener' className="container-carousel-scroll">
                 {data && data.map((value:any, index:any) => {
                 return <Link href={'/'} target={'_blank'} key={index} className='bg-white mx-4 p-2 item-partener'>
                      <div className="relative h-full w-full bg-url-partenaire" style={{backgroundImage:`url(${avatarFn(value.image)})`}} />
                  </Link>
               })}
            </div>
        </div>
    </div>
 </div>)
}

ScrollCloud.defaultProps={
        data:[
           {id:1,image:'../images/partenaires/carrefour.png'},
           {id:2,image:'../images/partenaires/orange-bank.png'},
           {id:3,image:'../images/partenaires/ista.png'},
           {id:4,image:'../images/partenaires/rsi.png'},
           {id:5,image:'../images/partenaires/orange.png'},
           {id:6,image:'../images/partenaires/telecom.png'},
        ],
        title:'Ils nous font confiance',
        sub_title:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise, des inquiétudes quant à la sécurité doivent être soulevées'
}