import Link from 'next/link';
import { EXPERTISE } from '../constants/data-expertise';
import { DATASOCITE } from '../constants/data-socite';
export const ItemSectionSociete=({data,sub_title,title}:any)=>{
        return (<div className="w-full mt-4">
            {title?<div className="w-full relative flex justify-center items-center">
                <h2 className='inline z-10 text-center p-4 text-uppercase text-blue-900 font-bold bg-white'>{title}</h2>
                {/* <div className='absolute top-[50%] md:w-[95%] h-1 bg-black'></div> */}
            </div>:null} 
            {sub_title?<div className="w-full text-center text-3xl font-bold py-2">{sub_title}</div>:null}
            <div className="w-full md:w-[90%] m-auto flex justify-evenly items-center pt-16 mb-8 flex-wrap">
                {data.map((value:any,index:number)=>{
                    return <div key={index} className="relative md:w-[330px] w-[95%] h-[450px] shadow-xl rounded-sm my-16 bg-white item_section_societe_home">
                              <div className="relative -top-[19%] m-auto  w-full rounded-t-md h-[200px] bg-url" style={{backgroundImage:`url(${value.image})`}}/>
                              <div className='relative w-full -top-[10%] h-auto p-3'>
                                 <div className="w-full text-center text-2xl font-bold py-4 leading-8 text-blue-900">{value.title}</div>
                                 <div className="w-full text-justify py-1 leading-6">{value.sub_title}</div>
                                 <div className="w-full flex justify-center place-items-center space-x-6 py-4">
                                 <div className='w-full flex justify-center items-center my-3'>
                                    <Link href={`/expertise/${value.slug?value.slug:'/'}`} legacyBehavior>
                                      <a className='inline-block bg-blue-800 hover:bg-blue-900  px-8 py-3 text-white rounded-sm'>En savoir plus</a>
                                    </Link>
                                </div>
                              </div> 
                          </div>
                    </div>
               })}
            </div>
  </div>)
}
ItemSectionSociete.defaultProps={
      // sub_title:'Notre les membre de notre quipe',
      data:EXPERTISE
}