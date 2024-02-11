import { Container } from "../../containers/container";
import {GetServerSideProps } from 'next'
import { Header } from "../../containers/header";
import { Wrapper } from "../../containers/wrapper";
import { LogoSecteur } from "../../components/logoSecteur";
import { DATAOPPORTUNITES } from "../../constants/data-opportunites";
import { DetailOpportunite } from "../../components/detail-opportunite";
import { NosOpportunites } from "../../components/nos-opportunites";

export default function Article({data,opportunites}:any){
    return (<>
         <Header/>
             <Container>
                 <LogoSecteur title={data.title} image={'../images/secteur-2.jpg'} sub_title={'Opportunité'}/>
                 <Wrapper>
                 <DetailOpportunite data={data}/>
                 <NosOpportunites data={opportunites}/>
                </Wrapper>
         </Container>
    </>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let slug:string|string[]|undefined;
    if(context.params!==undefined){
       slug=context.params.slug;
    }
    let data:any=DATAOPPORTUNITES.find(value=>value.slug===slug);
    data=data?data:null;
    if(!data){
        return {
            notFound: true,
        }
    }
    return {
        props: {data,slug,opportunites:DATAOPPORTUNITES}
    }
  }

