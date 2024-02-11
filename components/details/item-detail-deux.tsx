import DATA from "../../constants/data";
import Image from "next/image";
type TypeListProps={
       id: number,
       title : string,
       image: string,
       description: string,
       subtitle: string, 
}
type TypeProps={
    id: number,
    title : string,
    image: string,
    description: string,
    list: TypeListProps[], 
}

const ItemDetailDeux=({data,title}:any)=>{
    return  <div className="itemDetail itemDetail-deux">
     {title ?<h1 className='title'>{title}</h1>:''}
     <div className="items">
     {
      data.map((val:any,index:number)=><div className="item" key={index}>
           <div className="image-block-deux border-[2px] border-blue-900 rounded-md"><Image alt="..." src={val.image} fill/></div>
           <div className="description-block pr-3 border-[2px] border-blue-900 rounded-md">
               <h2 className="title">{val.title}</h2>
               <p className="description">{val.subtitle}</p>
               <p  className="description">{val.description}</p>
           </div>

      </div>)
     }
     </div>
  </div>
}
ItemDetailDeux.defaultProps={
    title:DATA.expertises.data[0].title,
    data:DATA.expertises.data[0].list,
}
export default ItemDetailDeux;