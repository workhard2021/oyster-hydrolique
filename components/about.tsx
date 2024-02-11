import {BsFlagFill} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import {FaTeamspeak} from 'react-icons/fa';


export const About=({data,list_mission}:any)=>{
    return (<div className="relative w-full mb-30 md:p-6 p-auto m-auto md:my-[65px] my-[30px]">
         {/* first block */}
         <div className="flex flex-wrap justify-between">
           <div className="md:w-[45%] w-full">
                <h1 className="text-3xl text-blue-900 font-bold">{data.first_title}</h1>
                <p className="text-md text-[#545454] py-4">{data.first_description}</p>
            </div>
            <div className="md:w-[45%] w-full">
               <div className="w-full rounded-md h-[320px] bg-url" style={{backgroundImage:`url(${data.first_image})`}} />
            </div>
         </div>
         {/* two block */}
         <div className="relative w-full mt-[30px] flex md:flex-nowrap flex-wrap justify-between items-center py-16 md:space-x-2 space-x-0">
            <div className="absolute md:block hidden top-[16%] left-5 w-full h-[1px] bg-gray-400"></div>
             <div className="w-full px-1 h-auto md:h-[400px]">
                  <div className="relative">
                       <div className='relative flex z-10 w-[45px] h-[45px] rounded-full  bg-blue-900 '>
                          <BsFlagFill className='m-auto relative inline-block text-gray-200' size={20} />
                       </div>
                  </div>
                  <div className='text-2xl text-blue-900  py-3 font-bold first-letter:capitalize mt-4'>{data.two_title}</div>
                  <div className='text-md text-[#545454] py-4 text-justify'>{data.two_sub_title}</div>
             </div>
             <div className="w-full px-1 h-auto md:h-[400px]">
                  <div className="relative">
                       <div className='relative flex z-10 w-[45px] h-[45px] rounded-full  bg-blue-900 '>
                          <HiOutlineDocumentText className='m-auto relative inline-block text-gray-200' size={20} />
                       </div>
                  </div>
                  <div className='text-2xl text-blue-900  font-bold py-3 first-letter:capitalize mt-4'>{data.tree_title}</div>
                  <div className='text-md text-[#545454] py-4 text-justify'>{data.tree_sub_title}</div>
             </div>
             <div className="w-full px-1 h-auto md:h-[400px]">
                  <div className="relative">
                       <div className='relative flex z-10 w-[45px] h-[45px] rounded-full bg-blue-900'>
                          <FiUsers className='m-auto relative inline-block text-gray-200' size={20} />
                       </div>
                  </div>
                  <div className='text-2xl text-blue-900 font-bold py-3 first-letter:capitalize mt-4'>{data.four_title}</div>
                  <div className='text-md text-[#545454] py-4 text-justify'>{data.four_sub_title}</div>
             </div>
         </div>
         {/* tree block */}
         <div className="relative w-full flex md:flex-nowrap flex-wrap justify-between items-stretch py-16 md:space-x-2 space-x-0">
             <div className='md:w-[45%] w-full'>
                <div className='text-3xl text-blue-900 font-bold first-letter:capitalize'>{data.block_tree_title}</div>
                <p className='text-md text-[#545454] py-4'>{data.block_tree_description}</p>
                <p className='text-md text-[#545454] py-4'>{data.block_tree_description}</p>
             </div>
             <div className='relative md:w-[45%] w-full'>
                  {list_mission && list_mission.map((value:any,key:number)=>{
                     return (<div key={key} className='relative w-full bg-white shadow-md p-4 my-4'>
                                 <div className='w-full flex space-x-4'>
                                     {value.id===1? 
                                        <FaTeamspeak className='inline text-blue-900' size={18}/>
                                        :value.id===2? 
                                           <FiUsers className='inline text-blue-900' size={18}/>:
                                      value.id===3? <AiOutlineMail className='inline text-blue-900' size={18}/>
                                      :null
                                     }
                                     <div className='text-xl text-blue-900 first-letter:capitalize'>{value.title}</div>
                                 </div>
                                 <div className='text-md text-[#545454] py-4'>{value.description}</div>
                     </div>)
                  })
                  }
                    
             </div>
         </div>
    </div>)
}
About.defaultProps={
    data:{
     first_title:'NOTRE ADN',
     first_description:"Animés par la conviction que le conseil ne se résume pas au consulting, ni à la consultation, nous accompagnons nos clients dans la recherche et la mise en œuvre de solutions exécutables, car consensuelles.",
     first_image:'../images/about.jpeg',
     two_title:'Founded',
     two_sub_title:"A sa création à Paris en 1999, Oyster technology était une petite agence web à fort focus technologique. Depuis lors, sa forte croissance, entièrement d’origine organique, l’a transformé en groupe fédérant plus de 600 personnes réparties sur 3 pays et 7 implantations. Ayant pleinement atteint l'objectif stratégique qu'il s'était fixé, Oyster technology a décidé, au début de l'année 2020, d'apporter une nouvelle impulsion à son développement d'activités en rejoignant le Groupe Technology & Strategy",
     tree_title:'50M montly enrichments',
     tree_sub_title:'La route commença à s’enfoncer. On ne voyait plus les grillages sur les cotés, mais juste des rochers. Et soudain, les voitures s’arrêtèrent devant une énorme porte en métal entourée de béton.',
     four_title:'4K users',
     four_sub_title:'La route commença à s’enfoncer. On ne voyait plus les grillages sur les cotés, mais juste des rochers. Et soudain, les voitures s’arrêtèrent devant une énorme porte en métal entourée de béton.',
     block_tree_title:'Notre mission',
     block_tree_description:'Je m’en rappellerais si j’avais créé un programme capable de parler. Et puis tiens, je suis en train de taper la causette avec un ordinateur ! Je deviens vraiment cinglé ! C’est fini, j’arrête l’informatique. Toutes les connaissances que les hommes avaient mises sur Internet lui étaient accessibles.',
    },
    list_mission:[{
          id:1,
          title:'Expertise',
          description:'Insuffler le changement par l’enthousiasme, l’écoute et le consensus'
        },
        {   id:2,
            title:'Approche mission',
            description:'Accompagner la réflexion stratégique et définir conjointement une approche pilotée par la valeur'
        },
        {   id:3,
            title:'Collaboration',
            description:'Rendre autonome en devenant un relais de connaissance et d’expertise, mobilisable à tout moment'
        },
        {   id:4,
           title:'Place de l’humain',
           description:'Animer un dispositif cohérent impliquant l’ensemble de l’environnement et des équipes'
        }
    ]
}
