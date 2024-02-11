import Link from "next/link"
import { Fragment } from "react"
import {BsTwitter,BsLinkedin,BsFacebook} from 'react-icons/bs';
import { FOOTER_MENU, HEADER_MENU } from "../constants/headers-menu";
export const Footer=({newtwork,right,page}:any)=>{

    return (<footer className="w-full pt-4 text-white bg-[#122480]">
        <div className="justify-start flex flex-wrap mb-2">
               {FOOTER_MENU.map((value:any,index:number)=>{
                 return (value.title!=='CONTACT' && value.title!=='REALISATION') 
                     && <div key={index} className="md:w-auto w-full md:m-5 mx-auto">
                         <div className="w-full">
                              <span className="m-2 block p-1">{value.title}</span>
                            {value.sous_menu && value.sous_menu.map((val:any,key:number)=>
                              <Link key={key} href={`${val.url}`} legacyBehavior>
                                 <a className="mx-2 block p-1 opacity-60 hover:opacity-100">{val.title}</a>
                              </Link>
                            )}
                        </div>
                  </div>
                })}
        </div>
        <div className="w-full text-md flex justify-evenly flex-wrap bg-[#183e74]">
           <div className="w-full flex md:justify-center items-center md:my-auto my-4 py-2 flex-wrap">
               {page && page.map((value:any,key:number)=>
                 <Link className="first-letter:capitalize inline-block m-3 hover:text-blue-100 " key={key} href={value.url}>{value.title}</Link>
               )}
               <span className="md:inline hidden">|</span>
               <p className="first-letter:capitalize m-3"> &copy; 2022 - {right}</p>
           </div>
        </div>
    </footer>)
}

Footer.defaultProps={
    right:'Oyster technology, tous droits réservés',
    page:[{url:'mentions-legales',title:'Mentions légales'},
          // {url:'privacy policy',title:'privacy policy'},
          // {url:'security',title:'security'},
          // {url:'sitemap',title:'sitemap'},
         ],
    newtwork:[{name:'twitter',url:'https://www.twitter.com'},
          {name:'facebook',url:'https://www.twitter.com'},
         {name:'linkedin',url:'https://www..com'}
    ]
}