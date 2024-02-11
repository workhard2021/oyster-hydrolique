export const MentionLegales=({data,dataList}:any)=>{
    return (<div className="w-full md:w-[80%] m-auto py-[60px]">
               <h2 className="text-center py-6 text-[3.5em] text-[#193f75]">{data.title}</h2>
               <p className="text-center py-6 text-[#193f75]">{data.title_description}</p>
               <h3 className="text-center py-3 text-[19px] text-[#193f75]">{data.sub_title}</h3>
               <h2 className="text-center py-3 text-[#193f75]">{data.sub_title_2}</h2>
               <h5 className="text-center font-[400]">{data.sub_title_2_1}</h5>
               <h5 className="text-center mb-2 font-[400]">{data.sub_title_2_3}</h5>
               <h5 className="text-center mb-2 font-[400]">{data.addresse}</h5>
               {/* <h2>CONCEPTION - RÉALISATION - HÉBERGEMENT</h2> */}
               {dataList.map((value:any,index:number)=>{
                   return (<div className="w-full py-4">
                       <h3 className="text-center py-3 text-[19px] text-[#193f75]">{value.title}</h3>
                       <p className="leading-6 text-justify">{value.description}</p> 
                   </div>)
               })}
               
    </div>)
}
MentionLegales.defaultProps={
    data:{
        title:'Mentions légales',
        title_description:"Ce site https://www.Oyster technology .com est l'entière propriété de Oyster technology.",
        sub_title:'PROPRIÉTAIRE ET ÉDITEUR DU SITE',
        sub_title_2:"Oyster technology",
        sub_title_2_1:'Oulfah marché',
        sub_title_2_3:'18 Boulevard Casablanca',
        addresse:'Adresse e-mail : contact@ostertech.com',
    },
    dataList:[
         {title:"DONNÉES PERSONNELLES",description:"Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent (rectification, actualisation, suppression des données), que vous pouvez exercer en vous adressant à contact@ostertech.com"},
         {title:"PARAMÈTRAGES DES COOKIES",description:"Lorsque vous naviguez sur notre site internet, des informations sont susceptibles d'être enregistrées, ou lues, dans votre terminal, sous réserve de vos choix."},
         {title:"CONTENU DU SITE",description:"L'entreprise Oyster technology décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site."},
         {title:"PROPRIÉTÉ INTELLECTUELLE",description:"Ce site, ainsi que tous les éléments le composant (notamment textes, photographies, vidéos, marques, …), constituent une œuvre au sens des articles 112-2 et suivants du code de la Propriété Intellectuelle, relevant en tant que telle de la législation française et internationale sur la Propriété Littéraire et Artistique. La copie de pages du site sur quelque support que ce soit (y compris disque dur), est autorisée à des fins privées uniquement. En conséquence, toute représentation ou reproduction, même partielle, qui pourrait être faite du site ou des éléments le composant, à des fins commerciales, sans le consentement préalable et écrit de Oyster technology  , est illicite et susceptible de constituer un acte de contrefaçon engageant les responsabilités civile et pénale du contrefacteur."},
         {title:"LIENS HYPERTEXTES",description:"Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres sites présents sur le réseau Internet, ne sauraient engager la responsabilité de l'entreprise Oyster technology  en ce qui concerne leur contenu ou les liens qu'ils contiennent, ainsi que leurs conditions d'exploitation (notamment gestion des données personnelles,...) La possibilité d'établir des liens hypertextes simples vers le site https://www.Oyster technology .com est soumise à l'accord préalable de Oyster technology  . Tout lien hypertexte profond, ou utilisant la technique du framing (affichage d'une page dans un cadre au sein d'un autre site), est interdit."},
         {title:"EXONÉRATION DE LA RESPONSABILITÉ TECHNIQUE",description:"Oyster technology s'engage à faire ses meilleurs efforts pour que le site internet https://www.Oyster technology .comsoit accessible à tout moment. Néanmoins, Oyster technology décline toute responsabilité en cas de difficulté d'accès à son site ou d'interruptions dans la connexion, quelles qu'en soient les causes. Notamment, Oyster technology se réserve le droit de procéder à toute modification du site qu'il jugera utile, et cela sans avertissement préalable et même si l'accès au site en est conséquemment interrompu. De plus, Oyster technology ne saurait être tenu responsable des éventuels dommages directs ou indirects, y compris l'inaccessibilité au site, les pertes de données, détériorations, destructions qui pourraient affecter votre équipement informatique."},
    ]
}