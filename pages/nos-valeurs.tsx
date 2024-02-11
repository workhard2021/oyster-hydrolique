import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { NosValeur } from "../components/nos-valeur";
import { Wrapper } from "../containers/wrapper";
export default function NosValeurPage(){
    return (<>
            <Header/> 
            <Container>
               <Wrapper>
                 <NosValeur/>
              </Wrapper>
          </Container> 
      </>)
}
