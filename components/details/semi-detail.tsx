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

const SemiDetail=({data}:any)=>{
    return <div className="semi-detail">
          <div className="item">
              <div className="item-list">
                <h1 className='title'>{data.title}</h1>
                <div className="list-style-circle ml-[50px]">
               {
                  data.list.map((val:any,index:number)=><span key={index}>{val.title}</span>)
                }
             </div>
              </div>
          </div>
          <div className="item-2 item">
              <Image src={data.image} alt="..."  fill/>
          </div>
    </div>
}
SemiDetail.defaultProps={
    data:DATA.expertises.data[0],
}
export default SemiDetail;