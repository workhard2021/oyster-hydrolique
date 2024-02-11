
export const ContactSociete=({data}:any)=>{
     return (<div className="relative w-full md:p-6 p-auto m-auto md:mt-[65px] mt-[30px]">
         <h2 className="w-full m-auto text-center mb-[65px]">Nous contacter</h2>
         <div className="relative w-full flex justify-center flex-wrap m-auto space-y-1">
             <div className="relative md:w-[35%] w-full h-[600px] bg-gray mx-3 shadow-xl">
                <div className="relative w-full left-0 top-0 h-full item_opportunites_image_detail" style={{backgroundImage:`url(${'../images/secteur-2.jpg'})`}}/>
                <div className="absolute left-0  top-0 w-full h-full p-8">
                   <h4 className="font-bold text-3xl py-2 text-blue-700">Nos informations</h4>
                    <p className="py-1 text-[17px] text-gray-50">Nous sommes profondément convaincus que vous serez nos meilleurs collaborateurs.</p>
                  <div className="w-full py-2">
                       <h5 className="py-2 text-[17px] text-blue-700 font-bold">Addrese</h5>
                       <p className="py-1 text-[17px] text-gray-50">Rue 8675,Bm Casablanca , Maroc</p>
                  </div>
                  <div className="w-full  py-2">
                  <h5 className="py-2 text-[17px] text-blue-700 font-bold">Contact</h5>
                      <p className="py-1 text-[17px] text-gray-50">+212 689 757 867</p>
                      <p className="py-1 text-[17px] text-gray-50">+212 688 756 868</p>
                  </div>
                  <div className="w-full  py-2">
                      <h5 className="py-2 text-[17px] text-blue-700 font-bold">Email</h5>
                      <p className="py-1 text-[17px] text-gray-50">oystertech@gmail.com</p>
                  </div>
                </div>
             </div>
             <form className="md:w-[35%] w-full h-[600px] mx-3 p-8 text-gray-700 shadow-xl">
                <div className="w-full mx-auto py-4 flex justify-center flex-wrap">
                    <label className="w-full block text-[#122480] text-[18px]" htmlFor="email"></label>
                    <input placeholder="Entrez votre email" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="email" name="email" id="email"/>
                 </div>
                 <div className="w-full mx-auto py-4 flex justify-center flex-wrap">
                    <label className="w-full block text-[#122480] text-[18px]" htmlFor="name"></label>
                    <input placeholder="Entrez votre nom" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="name" id="name"/>
                 </div>
                 <div className="my-8 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-[#122480] text-[18px]" htmlFor="message"></label>
                      <textarea id="message" rows={8} className="outline-none w-full border-b-[1px] border-blue-900 p-1" placeholder="Votre message"></textarea>
                 </div>
                 <div className="mb-3 w-full flex justify-center items-center">
                    <button className="h-[45px] text-white w-full m-auto bg-[#122480] rounded-md">Soumission</button>
                 </div>
             </form>
         </div>
     </div>)
}