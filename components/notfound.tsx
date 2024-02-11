import { useRouter } from "next/router"
export const NotFound404=()=>{
    const route=useRouter();
    return (<div className="bg-white w-full h-screen relative flex justify-center items-center">
               <div className="w-full font-extrabold absolute text-center top-[9%] left-0 z-10  text-gray-400 opacity-20">
                     <div className="w-full md:text-[10em] text-[5em]">ERROR</div>
                     <div className="w-full md:text-[15em] text-[8em]">404</div>
               </div>
               <div className="w-full m-auto text-center z-20">
                  <div className="text-black font-semibold md:text-[3em] text-[2em] mb-2">404 - Looks like you&apos;re lost</div>
                  <div className="w-full text-gray-800 md:text-lg text-sm">Maybe this page used to exist or you just spelled something wrong.</div>
                  <div className="w-full text-gray-800 md:text-lg text-sm">Chances are you spelled something wrong, so you can double check the url?</div>
                  <div className="w-full py-4">
                       <button onClick={()=>route.push('/')} className="text-white px-8 rounded-sm p-2 cursor-pointer bg-blue-500 hover:bg-blue-800">Return home</button>
                </div>
               </div>
    </div>)
}