import { LogoSection } from "../components/logo"
import { MentionLegales } from "../components/mentionLegales"
import { Container } from "../containers/container"
import { Header } from "../containers/header"
import { Wrapper } from "../containers/wrapper"

const PageMentionLegales=({data,dataList}:any)=>{
    return (<><Header/>
    {/* <LogoSection/> */}
    <Container>
       <Wrapper>
           <MentionLegales/>
       </Wrapper>
    </Container>
</>)
}

export default PageMentionLegales