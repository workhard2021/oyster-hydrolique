import Link from "next/link"
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

export const Contact=({data}:any)=>{
      // Variables
     const {register,handleSubmit, formState: { errors } } = useForm()
     const initLocalData={name:'',reply_to:'',message:''};
     const [message,setMessage]=useState({success:'',error:''});
     const [localData,setLocalData]=useState<{name:string,reply_to:string,message:string}>(initLocalData)
     const [labelError,setLabelError]=useState<{name:string,reply_to:string,message:string}>(initLocalData)
     const form=useRef<HTMLFormElement>(null);
     
     const saisir=(e:any)=>{
           e.preventDefault();
           const {value,name}=e.target;
           setLocalData((v)=>{return {...v,[name]:value}});
     }
     const scrollPage=()=>{
          window.scrollTo(({
               left:0,
               top:200,
               behavior: 'smooth'
              }))
     }

     const send=(e:Event)=>{
          e.preventDefault();
          setLabelError(initLocalData);
          setMessage({success:'',error:''});
          let test=false,error_message='Veuillez verifier les champs',label='*';
          if(!localData.name){
             setLabelError((v:any)=>{return{...v,name:label}});
             setMessage(()=>{return {success:'',error:error_message}});
             test=true;
          }
          if(!localData.message){
               setLabelError((v:any)=>{return{...v,message:label}});
               setMessage(()=>{return {success:'',error:error_message}});
               test=true;
          }
          if(!localData.reply_to){
               setLabelError((v:any)=>{return{...v,reply_to:label}});
               setMessage(()=>{return {success:'',error:error_message}});
               test=true;
          }
          if(test){
               scrollPage();
               return null;
          }
          const data:any=form.current;
          emailjs .sendForm('service_r1m3gur', 'template_8i9emas',data,'rTjSc67d6KtvrRglk')
          .then((result) => {
               if(result.text==='OK'){
                   setMessage(()=>{return{success:'Votre message a été envoyé',error:''}});
                   setLocalData(initLocalData);
                   setLabelError(initLocalData);
                   scrollPage();
               }
          }, (error) => {
              setMessage(()=>{return{success:'',error:"Impossible d'envoyer le message"}});
              scrollPage();
          });
         

     }
     return (<div className="w-full py-[60px] h-auto z-0 flex m-auto justify-center flex-wrap">
          <h2 className="w-full m-auto text-center mb-[50px]">Nous contacter</h2>
          {message.success &&<p className="w-full py-4 text-xl text-center text-blue-800">{message.success}</p>}
          {message.error &&<p className="w-full py-4 text-xl text-center text-red-500">{message.error}</p>}
          <div className="w-full flex justify-center flex-wrap m-auto md:w-[70%]">
             <form className="w-full m-auto" ref={form} onSubmit={(e:any)=>send(e)}>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px]" htmlFor="reply_to">{labelError.reply_to || ''}</label>
                          <input placeholder="Votre email" className="outline-none p-2 w-full inline-block h-[40px] border-b-[1px] border-blue-900" value={localData.reply_to||''} onChange={saisir} type="email" name="reply_to" id="reply_to"/>
                    </div>
                    <div className="w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px]" htmlFor="name">{labelError.name || ''}</label>
                        <input placeholder="Votre nom complet" className="outline-none p-2 w-full inline-block h-[40px] border-b-[1px] border-blue-900" value={localData.name}  onChange={saisir} type="text" name="name" id="name"/>
                     </div>
                 </div>
                 <div className="mb-1 w-full flex justify-between flex-wrap">

                    <div className="w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px]" htmlFor="site_name"></label>
                          <input placeholder="site name" defaultValue={data.site_name||''} className="outline-none p-2 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="hidden" name="site_name" id="site_name"/>
                    </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-red-400 text-[18px]" htmlFor="message">{labelError.message || ''}</label>
                      <textarea id="message" name="message" value={localData.message||''}  onChange={saisir}  rows={8} className="outline-none w-full border-b-[1px] border-blue-900 p-2" placeholder="Message"></textarea>
                 </div>
                 <div className="mb-3 w-full flex justify-center items-center">
                    <button className="h-[45px] text-[17px] text-white w-full m-auto bg-[#122480] hover:bg-[#1d39ca] rounded-md">Soumission</button>
                 </div>
             </form>
             <div className="w-full m-auto py-5">
                <p className="py-2 text-[#838181]">Votre vie privée est importante pour nous. En envoyant ce formulaire, vous acceptez les conditions de notre <Link href={'/mentions-legales'} className="underline ">Politique de confidentialité</Link>. Veuillez la lire attentivement afin de comprendre comment nous veillons à ce que vos droits soient respectés</p>
             </div>
         </div>
          {/* item contacts */}
         <div className="relative py-8 w-full md:w-[70%] flex justify-center items-center flex-wrap">
              <div className="w-full z-0 h-[125px] absolute top-0 left-0 bg-[#122480] shadow-md"></div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <HiOutlineLocationMarker size={40} className="inline-block text-[#122480]"/>
                     <div className="text-md font-bold w-full py-2 text-[#122480]">Notre bureau principal</div>
                     <p className="w-full text-gray-500">{data.address}</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <BsTelephone size={40} className="inline-block text-[#122480]"/>
                     <div className="text-md font-bold w-full py-2 text-[#122480]">Numéro de téléphone</div>
                     <p className="w-full text-gray-600">{data.tel}</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <AiOutlineMail size={40} className="inline-block text-[#122480]"/>
                     <div className="text-md  font-bold w-full py-2 text-[#122480]">Email</div>
                     <p className="w-full text-gray-600">{data.email}</p> 
                </div>
              </div>
         </div>
     </div>)
}