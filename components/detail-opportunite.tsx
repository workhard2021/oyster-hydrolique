import {BsFlagFill} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {HiOutlineDocumentText, HiUserGroup} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import {FaTeamspeak} from 'react-icons/fa';
import { avatarFn } from '../libs/utils';
import { BiMessageRounded } from 'react-icons/bi';

export const DetailOpportunite=({data,list_mission}:any)=>{
    return (<div className="relative w-full mb-30 md:p-6 p-auto m-auto md:my-[65px] my-[30px]">
      <div className='flex flex-wrap justify-center w-full'>
         {/* one block */}
         <div className='md:w-[25%] w-full md:mx-8 md:-order-1'>
              <div className='relative w-full h-[550px]'>
                   <div className="relative h-full w-full rounded-md item_opportunites_image_detail" style={{backgroundImage:`url(${avatarFn('../images/secteur-2.jpg')})`}} />
                   <div className='w-full h-full flex justify-center items-center  absolute top-0 left-0 text-white'>
                      <div className='relative my-auto w-full'>
                         <BiMessageRounded className="m-auto text-blue-900" size={120}/>
                         <h3 className='text-gray-200 text-center py-6 font-light'>Besoin d'aide? contactez</h3>
                         <p className='text-gray-200 text-center mb-3  font-light text-xl'>+212 736 752 753</p>
                         <p className='text-gray-200 text-center  font-light text-xl'>oystertech@gmail.com</p>
                       </div>
                   </div>
              </div>
         </div>
         <div className="relative md:w-[60%] w-full md:mx-8 -order-1">
             <div className='w-full'>
                <div className='text-3xl text-blue-900 font-bold capitalize'>description : {data.title}</div>
                <p className='text-md text-[#545454] py-4'>{data.description}</p>
             </div>
             <div className='relative flex-wrap flex w-full'>
                  {list_mission && list_mission.map((value:any,key:number)=>{
                     return (<div key={key} className='relative md:w-[50%] w-full bg-white  p-4 my-2'>
                                 <div className='w-full flex space-x-4 whitespace-nowrap'>
                                     {value.id===1? 
                                        <FaTeamspeak className='inline text-blue-900' size={30}/>
                                        :value.id===2? 
                                           <FiUsers className='inline text-blue-900' size={30}/>:
                                      value.id===3? <AiOutlineMail className='inline text-blue-900' size={30}/>
                                      : <HiUserGroup className='inline text-blue-900' size={30}/>
                                     }
                                     <div className='text-xl text-blue-900 first-letter:capitalize'>{value.title}</div>
                                 </div>
                                 <div className='text-md text-[#545454] py-4'>{value.description}</div>
                     </div>)
                  })
                  }
             </div>
             <div className='relative w-full flex flex-wrap py-4'>
                <div className='w-full md:w-[50%]'>
                  <h3 className='w-full mb-4 text-2xl md:pr-1 p-auto text-blue-900'>The Best Aquarist You Can Make is In Your Self</h3>
                  <div className='w-full pl-4 pb-4'>
                    {data.list && data.list.map((val:any,index:number)=>{
                      return (<li style={{listStyle:'disc'}} key={index} className='w-full leading-6'>
                          {val}
                      </li>)
                     })}
                  </div>
                </div>
                <div className="relative h-[300px] w-full md:w-[50%] rounded-md item_opportunites_image" style={{backgroundImage:`url(${avatarFn(data.image)})`}} />
             </div>
             <p className='my-4'>{data.description_2}</p>
         </div>
    </div>
   </div>)
}
DetailOpportunite.defaultProps={
    list_mission:[
       {
         id:1,
         title:'Water & Soil Quality',
         description:'Insuffler le changement par l’enthousiasme, l’écoute et le consensus'
       },
       {   id:2,
           title:'Water & Soil Quality',
           description:'Accompagner la réflexion stratégique et définir conjointement une approche pilotée par la valeur'
       },
       {   id:3,
           title:'Water & Soil Quality',
           description:'Rendre autonome en devenant un relais de connaissance et d’expertise, mobilisable à tout moment'
       },
       {   id:4,
          title:'Water & Soil Quality',
          description:'Animer un dispositif cohérent impliquant l’ensemble de l’environnement et des équipes'
       }
    ]
}
