export const Content=({data}:any)=>{
    return (<div className="relative w-full md:w-[90%] m-auto mb-16 bg-white">
       <div className="relative w-full m-auto md:ml-3">
               <h2 className="text-blue-900 mb-0 md:text-4xl text-2xl font-fontWeightBig leading-snug text-justify w-full m-auto">
                  {data.sub_title}
               </h2>
               <div className="w-full">
                  {data && data.body.map((text:any,key:number)=>
                    <p key={key} className="text-gray-700  leading-6 w-full pt-3">
                      {text}
                    </p>
                  )}
                 
               {/* <div className="md:w-[40%] w-full rounded-md h-[320px] md:h-[500px] bg-url" style={{backgroundImage:`url(${data.image_2})`}} /> */}
               </div>
        </div>
        <div className="w-full m-auto py-6 flex justify-between items-start flex-wrap">
              {data.data.map((val:any,index:number)=>{
                 return <div key={index} className="md:w-[45%] w-full md:m-2 min-h-[200px] bg-white">
                           <h3 className="w-full mb-2 mt-6 text-blue-900">{val.name}</h3>
                           <ListData name={val.name} arrrayValue={val.value} />
                 </div>
              })

              }
        </div>
        {/* <div className="md:p-16 p-8 shadow-2xl md:m-auto my-4 m-auto flex justify-center items-stretch flex-wrap">
              <p className="w-full md:text-[30px] text-[20px] font-bold text-center text-[#231942]">Notre champ d’intervention</p>
              <p className="m-auto py-6 w-full md:w-[80%] md:text-[24px] text-[18px] text-[#983098] font-bold text-center">{data.title_description_2}</p>
              <div className="w-full pb-8 text-[#545454]">
              {data.list_description_2.map((value:any,key:number)=>{
                 return (<div className="text-[16px] leading-10" key={key}>
                           <span className="pr-1 font-extrabold">{value.title}:</span>
                           <span>{value.description}</span>
                 </div>)
               })}
              </div>
        </div> */}
    </div>)
}
export const ListData=({name,arrrayValue}:any)=>{
   return (<div className="w-full  pl-1">
         {arrrayValue && arrrayValue.map((value:any,index:number)=>{
               return <p style={{listStyle:'initial'}} key={index} className="w-full md:pb-3 pb-3 leading-6 text-[16px] text-gray-700">
                      {value}
               </p>
              })
         }  
   </div>)
}
