import { Content } from "../../components/content";
import { Container } from "../../containers/container";
import { Header } from "../../containers/header";
import { Wrapper } from "../../containers/wrapper";
import { LogoSecteur } from "../../components/logoSecteur";
import { NosOpportunites } from "../../components/nos-opportunites";
import { DATAOPPORTUNITES } from "../../constants/data-opportunites";

const PageNosOpportunites=({data,opportunites}:any)=>{
    return <>
    <Header/>
       <Container>
         <LogoSecteur sub_title={data.title} image={data.image} title={data.sub_title}/>
         <Wrapper>
             <NosOpportunites data={opportunites}/>
          </Wrapper>
       </Container>
       
   </>
}
PageNosOpportunites.defaultProps={
     data:{title:"Nos opportunites",
     sub_title:'Nous valorisons nos talents',
     image:'../images/nous-rejoindre/opportunite.png'}
     ,
     opportunites:DATAOPPORTUNITES
}
export default  PageNosOpportunites;