import DATA from '../../constants/data';
import Image from 'next/image';
type typeProps = {
     data: any[],
     title: string,
}
const Expertises=({data,title}:typeProps)=>{
    return <div className="expertise">
            <h1 className='title'>{title}</h1>
            <div className='items'>
                 {data.map((value,index)=>{
                    return <div key={index} className='item'>
                          <div className='shadow-lg shadow-black image'>
                              <Image src={value.image} alt="..." fill/>
                          </div>
                          <div className='item'>
                              <h2 className='title'>{value.title}</h2>
                              <p className='description'>{value.description}</p>
                          </div>
                    </div>
                 })}

            </div>
     </div>
}

Expertises.defaultProps={
     title: DATA.expertises.title,
     data:DATA.expertises.data,
}
export default Expertises;