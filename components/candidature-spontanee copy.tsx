import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
type formType={
       firt_name:string,
       last_name:string,
       country:string,
       city:string,
       cv:string,
       phone_number:string,
       reply_to:string,
       message:string,    
}

export const CandidatureSpontanee=({listCountry,paraph}:any)=>{
    const limitCaracterMessage=600;
    const initLocalData={firt_name:'',last_name:'',country:'',city:'',cv:'',phone_number:'',reply_to:'',message:''};
     const [message,setMessage]=useState({success:'',error:''});
     const [localData,setLocalData]=useState<formType>(initLocalData)
     const [labelError,setLabelError]=useState<formType>(initLocalData);
     const [isLimiteMessage,setIsLimiteMessage]=useState<boolean>(false);
     const form=useRef<HTMLFormElement>(null);
     const saisir=(e:any)=>{
        e.preventDefault();
        const {value,name,}=e.target;
        if(name==='cv'){
              const file=e.target.files[0];
              const listExtensions=['pdf','jpg','png','docx','jpeg'];
              const extension=file.type? file.type.split('/')[1]:'';
              if(file.size > 600000){
                return setLabelError((v)=>{return {...v,[name]:'la taille de fichir doit être inférieur à 600 ko'}})
              }else{
                 setLabelError((v)=>{return {...v,[name]:''}})
              }
              if(!listExtensions.includes(extension)){
                  return setLabelError((v)=>{return {...v,[name]:`Fichier doit être de type: ${listExtensions.toString()}` }})
              }else{
                 setLabelError((v)=>{return {...v,[name]:''}})
              }
              return setLocalData((v)=>{return {...v,[name]:e.target.files[0]}});
        }
        if(name==="message"){
            if(value.length-1>=limitCaracterMessage){
                return setIsLimiteMessage(v=>!v);
            }else{
                setIsLimiteMessage(()=>false);
                setLocalData((v)=>{return {...v,[name]:value}}); 
            }
            setLabelError((v)=>{return {...v,[name]:`${value.length}/${limitCaracterMessage}`}})
        }
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
        if(!localData.firt_name){
           setLabelError((v:any)=>{return{...v,firt_name:label}});
           setMessage(()=>{return {success:'',error:error_message}});
           test=true;
        }
        if(!localData.last_name){
            setLabelError((v:any)=>{return{...v,last_name:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        if(!localData.country){
            setLabelError((v:any)=>{return{...v,country:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        if(!localData.city){
            setLabelError((v:any)=>{return{...v,city:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        if(!localData.cv){
            setLabelError((v:any)=>{return{...v,cv:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        // if(!localData.message){
        //      setLabelError((v:any)=>{return{...v,message:label}});
        //      setMessage(()=>{return {success:'',error:error_message}});
        //      test=true;
        // }
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
     return (<div className="w-full md:w-[60%] m-auto px-4">
            <div className="w-full px-auto md:my-16 my-8">
                <p className="py-2 md:text-[18px] text-gray-500 w-full md:text-center text-center">{paraph}</p>
             </div>
             {message.success &&<p className="w-full py-4 text-xl text-center text-blue-800">{message.success}</p>}
            {message.error &&<p className="w-full py-4 text-xl text-center text-red-500">{message.error}</p>}
             <form className="w-full md:my-8 my-4" ref={form} onSubmit={(e:any)=>send(e)}>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px]" htmlFor="firt_name">{labelError.firt_name||''}</label>
                          <input placeholder="Entrez votre nom" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="firt_name" value={localData.firt_name}  onChange={saisir}  id="firt_name"/>
                    </div>
                    <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px]" htmlFor="last_name">{labelError.last_name||''}</label>
                        <input placeholder="Entrez votre prénom" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="last_name" value={localData.last_name}  onChange={saisir} id="last_name"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px]" htmlFor="reply_to">{labelError.reply_to||''}</label>
                          <input placeholder="Entrez votre email" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="email" name="reply_to" value={localData.reply_to}  onChange={saisir} id="reply_to"/>
                    </div>
                    <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px]" htmlFor="phone_number">{labelError.phone_number || ''}</label>
                        <input placeholder="Entrez votre numéro de téléphone" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="phone_number" value={localData.phone_number}  onChange={saisir}  id="phone_number"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px]" htmlFor="country">{labelError.country || ''}</label>
                          <select placeholder="Entrez votre nom" className="outline-none bg-white p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" name="country" value={localData.country}  onChange={saisir} id="country">
                               <option value=''>Pays</option>
                               {listCountry.map((value:any,index:number)=>{
                                 return (<option key={index} value={value.name}>{value.name}</option>)
                               })}
                          </select>
                    </div>
                    <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px]" htmlFor="city">{labelError.city || ''}</label>
                        <input placeholder="Entrez votre ville" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="city" value={localData.city}  onChange={saisir} id="city"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                    <div className="w-full my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px]" htmlFor="cv">{labelError.cv || ''}</label>
                        <input className="outline-none p-1 w-full inline-block h-[40px]"  type="file" name="cv"  onChange={saisir} id="cv"/>
                    </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-[18px]" htmlFor="message">Message: (facultatif) : <span className={`${isLimiteMessage?'text-red-500':''}`}>{labelError.message|| ''}</span></label>
                      <textarea id="message" name='message' value={localData.message||''}  onChange={saisir} rows={8} className="outline-none w-full border-b-[1px] border-blue-900 p-1" placeholder="Votre message"></textarea>
                 </div>
                 <div className="mb-3 w-full flex justify-center items-center">
                    <button className="h-[45px] text-white w-full m-auto bg-[#122480] hover:bg-blue-800 rounded-md">Soumission</button>
                 </div>
             </form>
    </div>)
}
