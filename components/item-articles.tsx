import Link from "next/link"

export const Articles=({data}:any)=>{
    return (<div className="relative m-auto py-8 px-4">
          <div className="w-full py-2 text-center">
              <div className="font-light text-lg text-gray-500">NOS IDÉES</div>
              <div className="text-4xl">Découvrez les dernières tribunes</div>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {data && data.map((value:any,index:number)=>{
             return <Link href={`/detail/${value.slug}`} key={index} className="hover_scale_nos_idee  md:w-[360px] w-full bg-white border-2 border-gray-500  md:h-[440px] block shadow-sm m-4">
                    <div className="md:h-[200px] h-[240px] w-full bg-url" style={{backgroundImage:`url(${value.image})`}} />
                    <div className="w-full p-4">
                         <div className="py-3 tex-gray-300 font-light text-sm">{value.title}</div>
                         <div className="tex-blue-500 text-md font-bold">{value.sub_title}</div>
                    </div>
              </Link>
           })}
          </div>
    </div>)
}

Articles.defaultProps={
    data:[
         {
          title:'Carousel - Bootstrap',
          sub_title:'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images',
          image:'../images/2.jpeg',
          slug:'carousel-bootstrap'
         },
         {
           title:'Carousel - Bootstrap',
           sub_title:'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images',
           image:'../images/2.jpeg',
           slug:'carousel-bootstrap'
         },
         { title:'Carousel - Bootstrap',
           sub_title:'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images',
           image:'../images/2.jpeg', 
           slug:'carousel-bootstrap'
         },
    ]
}