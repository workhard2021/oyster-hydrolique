import Link from "next/link"
import {BsLinkedin,BsTwitter,BsFacebook} from 'react-icons/bs';

export const ReseauAndContact=({data}:any)=>{
    return (<div className=" z-5 hidden md:flex justify-end flex-col fixed top-[30%] shadow-sm  bg-gray-100 right-[0%] p-1 m-8">
            <Link className="h-[50px] w-[50px] text-blue-800 mx-1 m-2 flex justify-items-center items-center" target={'_blank'} href={'https://twitter.com'}>
                 <BsLinkedin className="inline-block m-auto" size={30}/>
            </Link>  
            <Link className="h-[50px] w-[50px] text-blue-800 mx-1 m-2 flex justify-items-center items-center" target={'_blank'} href={'https://twitter.com'}>
                  <BsTwitter className='inline-block m-auto' size={30}/>
            </Link>  
            <Link className="h-[50px] w-[50px] text-blue-800 mx-1 m-2 flex justify-items-center items-center" target={'_blank'} href={'https://twitter.com'}>
                 <BsFacebook className='inline-block m-auto' size={30}/> 
            </Link>  
    </div>)
}