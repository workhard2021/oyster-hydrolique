import Link from "next/link"

export const ListMetier=({data}:any)=>{
    return (<div className="w-full  relative m-auto py-8 px-4">
          <div className="w-full py-2 text-center">
              <h2 className="text-[#231942] py-4">NOS MÉTIERS</h2>
          </div>
          <div className="w-full flex justify-center items-center flex-wrap">
            {data && data.map((value:any,index:number)=>{
             return <Link href={`/${value.slug}`} key={index} className="hover_scale_nos_idee  md:w-[300px] w-full bg-white md:h-[440px] block shadow-xl m-4">
                    <div className="md:h-[200px] h-[180px] w-full bg-url filter_image" style={{backgroundImage:`url(${value.image})`}} />
                    <div className="w-full p-4">
                         <h2 className="py-3 text-[#231942] uppercase font-light text-2xl">{value.name}</h2>
                         <p>{value.sub_title}</p>
                    </div>
              </Link>
           })}
          </div>
    </div>)
}