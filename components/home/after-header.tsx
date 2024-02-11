
import Image from 'next/image';
import DATA from '../../constants/data';
type typeProps = {
     data: any[],
     image: string | null
}
const AfterHeader=({data,image}:typeProps)=>{
    return <div className="afterHeader">
          <div className='description'>
           {data.map((val,index)=>{
               return <div key={index} className='item'>
                   <h2 className='item-title'>{val.title}</h2>
                   <p className="item-description">{val.description}</p>
               </div>
          })}
          </div> 
          <div className='image'>
            <Image className="src-image" src={image||''} alt="..." fill/>
          </div> 
     </div>
}

AfterHeader.defaultProps={
     image:DATA.missionRaison.image,
     data:DATA.missionRaison.data,
}
export default AfterHeader;