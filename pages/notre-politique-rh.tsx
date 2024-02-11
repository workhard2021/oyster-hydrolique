import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { NosValeur } from "../components/nos-valeur";
import { Wrapper } from "../containers/wrapper";
import { NotrePolitiqueRh } from "../components/notre-polique-rh";
import { LogoSecteur } from "../components/logoSecteur";
export default function PageNotrePolitiqueRh({data}:any){
    return (<>
            <Header/> 
            <Container>
            <LogoSecteur sub_title={data.sub_title} image={data.image} title={data.expertise}/>
               <Wrapper>
                 <NotrePolitiqueRh/>
              </Wrapper>
          </Container> 
      </>)
}
PageNotrePolitiqueRh.defaultProps={
       data:{ 
         title:'',
         sub_title:'',
         image:'../images/nous-rejoindre/candidature-spontanee.png'
       }
}
