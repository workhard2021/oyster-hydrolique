import { Content } from "../../components/content";
import { Container } from "../../containers/container";
import {GetServerSideProps } from 'next'
import { Header } from "../../containers/header";
import { Wrapper } from "../../containers/wrapper";
import { LogoSecteur } from "../../components/logoSecteur";
import { EXPERTISE } from "../../constants/data-expertise";
import { ItemSectionSociete } from "../../components/item-section-societe";
import SemiDetail from "../../components/details/semi-detail";
import ItemDetailUn from "../../components/details/item-detail-un";
import DATA from "../../constants/data";
import ItemDetailDeux from "../../components/details/item-detail-deux";
import ItemDetailTrois from "../../components/details/item-detail-trois ";
// import { ItemOffres } from "../../components/item-offre";
export default function Article({data,slug}:any){
    return (<>
         <Header/>
             <Container>
                <SemiDetail data={data} />
                 {/* <LogoSecteur sub_title={data.title} image={data.image} title={'Expertise'}/> */}
                 <Wrapper>
                    { slug === "gestion-de-l-eaux" ?
                        <>
                          <ItemDetailUn title={data.title} data={data.list.slice(0,2)}/>
                          <ItemDetailDeux title='' data={data.list.slice(2,4)}/>
                        </>
                        : slug === "industrie" ?
                            <ItemDetailTrois background='bg-blue-500' borderColor="bg-blue-500" title={data.title} data={data.list} />
                           :  <ItemDetailTrois background='bg-blue-500' borderColor="bg-blue-500" title={data.title} data={data.list} />
                    }
                    {/* <Content data={data}/>
                    <ItemSectionSociete title="Expertises"/> */}
                    {/* <ItemOffres data={EXPERTISE}/> */}
                </Wrapper>
         </Container>
    </>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let slug:string|string[]|undefined;
    if(context.params!==undefined){
       slug=context.params.slug;
    }
    // let data:any=EXPERTISE.find(value=>value.slug===slug);
    let data:any= DATA.expertises.data.find(value=>value.slug===slug);
    data=data?data:null;
    if(!data){
        return {
            notFound: true,
        }
    }
    return {
        props: {data,slug}
    }
  }

