import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { Wrapper } from "../containers/wrapper";
import { NosAdn } from "../components/adn-nos";
import { NosValeurSociete } from "../components/nos-valeur-societe";
import { Teams } from "../components/teams";
export default function AdnPage(){
    return (<>
              <Header/>
              <Container>
                <Wrapper>
                   <NosAdn/>
                   <NosValeurSociete/>
                   {/* <Teams /> */}
                </Wrapper>
              </Container>  
    </>)
}
