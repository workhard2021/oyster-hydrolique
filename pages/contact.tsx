import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { Wrapper } from "../containers/wrapper";
import { ContactSociete } from "../components/contact-societe";
import { LogoCandidature } from "../components/logoCandidature";
import { Contact } from "../components/contact";
export default function ContactPage({data}:any){
    return (<>
            <Header/> 
               <Container>
                   <LogoCandidature sub_title={'Oyster-technology'} image={'../images/societe-1.jpg'} title={'Contact'}/>
                   <Wrapper>
                    {/* <ContactSociete/> */}
                    <Contact data={data}/>
                  </Wrapper>
            </Container>
    </>)
}
ContactPage.defaultProps={
      data:{
          email:process.env.EMAIL,
          tel:process.env.TEL,
          site_name:process.env.SITE_NAME,
          address:process.env.ADDRESS
      }
}
