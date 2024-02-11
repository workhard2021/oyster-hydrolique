export const NosValeurSociete=({data}:any)=>{
        return (<div className="relative w-full md:p-6 p-auto m-auto md:my-[5px] mt-[30px]" id="notre-valeur">
            <div className="w-full m-auto flex justify-between items-start space-y-2 flex-wrap">
                  <div className='md:w-[50%] w-full'>
                       <h1 className='w-full text-3xl font-bold py-4 text-blue-900 '>{data.title}</h1>
                       <p className='w-full text-[#545454] leading-6'>{data.sub_title}</p>
                  </div>
                  {/* <div className="md:w-[50%] w-full rounded-md h-[320px] bg-url" style={{backgroundImage:`url(${data.image})`}} /> */}
            </div>
            <div className="w-full m-auto flex justify-between items-center pt-16 mb-4 flex-wrap">
                 {data.nos_valeurs.map((value:any,index:number)=>{
                    return (<div key={index} className='md:w-[45%] w-full md:m-2 m-2'>
                           <div className='flex items-center'>
                              <div className='bg-blue-900 rounded-full w-[30px] h-[30px] flex justify-center items-center'>
                                   <span className='text-md m-auto text-white'>{value.number}</span>
                              </div>
                              <span className='text-md px-2 font-bold text-blue-900 first-letter:capitalize'>{value.title}</span>
                           </div>
                           <p className='py-4 text-[#545454] leading-6'>{value.description}</p>
                    </div>)
                 })}
            </div>
            {/* <div className='w-full m-auto flex justify-between items-start pt-4 md:pt-16 mb-4 space-y-2 flex-wrap'>
                  <div className="md:w-[45%] md:m-auto mb-4 w-full rounded-md h-[320px] bg-url" style={{backgroundImage:`url(${data.image_tree})`}} />
                  <div className='w-full md:w-[45%]'>
                    <p className='text-xl font-bold text-blue-900 pb-3'>{data.title_tree}</p>
                    <p className='text-[#545454]'>{data.description_tree}</p>
                  </div>  
            </div> */}
  </div>)
}

NosValeurSociete.defaultProps={
      data:{
        title:"Nos valeurs",
        sub_title:"Confiance, engagement et audace  : ces 3 valeurs de Oyster Technology sont ancrées au cœur de notre culture d’entreprise. Dans tous nos projets, elles guident nos actes et nos décisions.",
        image:'../images/p3.jpeg',
        nos_valeurs:[
         {  number:1,
            title:'CONFIANCE',
            description:"Construire une relation de confiance avec nos clients, être à l’écoute, rester accessible et réactif, tels sont les engagements sur lesquels nous bâtissons nos partenariats.",
         },
         {  number:2,
            title:"ENGAGEMENT",
            description:"Nous assumons pleinement nos engagements envers les différentes parties prenantes, en respectant nos obligations et en valorisant nos collaborateurs.",
         },
         {  number:3,
            title:"AUDACE",
            description:"L’audace est une valeur vitale pour notre entreprise, elle nous permet d‘évoluer et de se renouveler constamment face au changement permanant de notre environnement.",
         }
        ],
      //   title_2:"Faux-Texte est une réalisation du studio de création de sites internet indépendant Prélude Prod.",
      //   image_tree:'../images/p4.jpeg',
      //   title_tree:"Nos consultants sont reconnus pour leur curiosité, leur adaptabilité et leur écoute.",
      //   description_tree:"Leur conduite constructive et leur engagement sans faille, au service de vos besoins et de vos objectifs offre à vos projets la fluidité et la fiabilité attendues. La créativité, l’esprit d’analyse, les convictions sont nécessaires, mais n’amènent au changement que par la confrontation à la réalité de votre quotidien et au ressenti de vos équipes."
     },
   
}