import Link from 'next/link'
import { ItemOffres } from '../components/item-offre'
import { LogoSection } from '../components/logo'
import { Container } from '../containers/container'
import { Header } from '../containers/header'
import { Wrapper } from '../containers/wrapper'
import AfterHeader from '../components/home/after-header'
import UsValues from '../components/home/values'
import Expertises from '../components/home/expertises'
export default function Home() {
  return (<><Header/>
            <LogoSection/>
            <Container>
               <Wrapper>
                    {/* <Entreprise/> */}
                    {/* <ItemOffres/> */}
                     <AfterHeader/>
                     <UsValues/>
                     <Expertises/>

               </Wrapper>
               {/* <CarouselScroll data={EXPERTISES_TWO} title="Nos expertises" target_id='carousel-scroll'/> */}
               {/* <CarouselScroll order={'md:order-1 md-0'} data={EXPERTISES_FIRST} target_id='carousel-scroll-2'/> */}
            </Container>
  </>)
}

const Entreprise=({presentation}:any)=>{
      if(!presentation) return  null;
      return (<div className='relative w-full mb-[35px] flex justify-between md:flex-nowrap flex-wrap'>
      <div className='xl:pl-[40px] my-[20px]  px-auto w-full'>
           <p className='w-full leading-6'>{presentation.title}</p>
      </div>
      <div className='xl:px-[40px]  my-[20px] px-auto text-center w-full'>
         <Link href={presentation.slug} className='inline font-bold text-sm text-md m-auto w-[100px] px-6 text-center py-2 rounded-2xl bg-[#231942] text-white uppercase'>Je découvre</Link>
      </div>
      <div className='xl:pl-[40px] my-[20px] px-auto w-full'>
           <h3 className='text-[#231942] pb-[15px] font-fontWeightBig'>{presentation.name}</h3>
           <p className='leading-6 w-full'>{presentation.sub_title}</p>
      </div>
  </div>)
}
Entreprise.defaultProps={
  presentation:{
    title:"L’accès à la ressource, la consommation, la réutilisation et le traitement des eaux usées sont autant de défis auxquels doivent faire face le monde aujourd'hui. Avec Oyster Technology, vous bénéficiez d’une offre agile et constante évolution, un partenaire qui réponde à vos enjeux et vos besoins, disposant de moyens et d’installations à l'épreuve du temps.",
    slug:'/notre-adn',
    name:'Notre mission',
   sub_title:'Parce que nous considérons que nos réalisations sont d’utilité publique, Nous agissons au quotidien pour être exemplaire et pour redonner à l’eau la valeur qu’elle mérite.',
  },
}
