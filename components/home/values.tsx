import DATA from '../../constants/data';
import Image from 'next/image';
type typeProps = {
     data: any[],
     title: string,
     image: string | null,

}
const UsValues=({data,image,title}:typeProps)=>{
    return <div className="usValue">
            <h1 className='title'>{title}</h1>
            <div className='usValue-image-mobile'><Image src={image|| ''} alt="..." fill /></div>
            <div className='item-1 item'>
                <h3 className='title'>{data[0].title}</h3>
                <p className='description'>{data[0].description}</p>
            </div>
            <div className='item-2 item'>
                 <div className='sub-item'>
                    <h3 className='title'>{data[1].title}</h3>
                    <p className='description'>{data[1].description}</p>
                 </div>
                 <div className='item-image'><Image src={image|| ''} alt="..." fill /></div>
                 <div className='sub-item'>
                     <h3 className='title'>{data[2].title}</h3>
                     <p className='description'>{data[2].description}</p>
                 </div>
            </div>
     </div>
}

UsValues.defaultProps={
     title: DATA.usValues.title,
     image:DATA.usValues.image,
     data:DATA.usValues.data,
}
export default UsValues;