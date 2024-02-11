
export const NotrePolitiqueRh=({data}:any)=>{
        return (<div className="relative w-full md:p-6 p-auto m-auto md:my-[5px] mt-[30px]">
            <div className="w-full m-auto flex justify-between items-start space-y-2 flex-wrap">
                  <div className='w-full'>
                       <h1 className='w-full text-3xl font-bold py-4 text-blue-900'>{data.title}</h1>
                       <p className='w-full text-700 mb-2 leading-6 text-justify'>{data.description_1}</p>
                       <p className='w-full text-700 leading-6 text-justify'>{data.description_2}</p>
                  </div>
                  {/* <div className="md:w-[50%] w-full rounded-md h-[320px] bg-url" style={{backgroundImage:`url(${data.image})`}} /> */}
            </div>
            <div className="w-full flex justify-between mb-4 flex-wrap bg-url">
               <div className="w-full mx-auto pt-10 mb-4">
                  <div className='w-full'>
                       <h1 className='w-full text-3xl font-bold py-4 text-blue-900'>{data.sub_title}</h1>
                       <p className='w-full text-700 leading-6 text-justify'>{data.description_3}</p>
                  </div>
                  {/* <div className="md:w-[50%] w-full rounded-md h-[320px] bg-url" style={{backgroundImage:`url(${data.image})`}}/> */}
               </div>
               <div className="w-full mx-auto p-4 flex justify-between items-center mb-4 flex-wrap">
                 {data.nos_valeurs.map((value:any,index:number)=>{
                    return (<div key={index} className='w-full m-2'>
                           <div className='flex items-center'>
                              <div className='bg-blue-900 rounded-full w-[30px] h-[30px] flex justify-center items-center'>
                                   <span className='text-md m-auto text-white text-justify'>{value.number}</span>
                              </div>
                              <span className='text-[16px] first-letter:capitalize px-2 w-[80%] font-bold text-blue-900 leading-6'>{value.title}</span>
                           </div>
                           <p className='py-4 text-gray-700 leading-6 text-justify'>{value.description}</p>
                    </div>)
                 })}
               </div>
            </div>
  </div>)
}

NotrePolitiqueRh.defaultProps={
     data:{
        title:"Notre Politique RH",
        sub_title:'Nous valorisons nos talents',
        image:'../images/p3.jpeg',
        image_tree:'../images/p4.jpeg',
        description_1:"Chez Oyster technology, la vision de la réussite est avant tout globale et ne se limite pas uniquement aux aspects économiques. Dans l’optique d’atteindre la performance globale, nous sommes engagés dans une démarche, pour créer de la valeur à long terme, principalement pour nos collaborateurs",
        description_2:"Nous sommes profondément convaincus que « nos meilleurs ambassadeurs sont nos collaborateurs ». Partant de ce principe, nous travaillons à développer la motivation en interne afin que nos talents soient fiers d’appartenir à Oyster technology. Cette démarche favorise également l’attractivité de notre entreprise et facilite l’intégration de nouveau talent. En tant qu’employeur responsable, nous avons initié une politique de responsabilité sociétale et environnementale adaptée.",
        description_3:"Dans cet esprit, et à travers notre politique RH, la stratégie de Oyster technology est d’être une entreprise où les conditions sont optimisées pour l’épanouissement de l’ensemble de ses collaborateurs. Chez Oyster technology, travailler prend alors d’autres dimensions érigées comme priorités",
        nos_valeurs:[
          {  number:1,
             title:'travailler en sécurité est fondamental',
             description:'Enjeu majeur de notre stratégie et notre politique des ressources humaines, la santé et la sécurité de nos collaborateurs est au cœur nos activités. Ayant pour objectif le « zéro accident », nous nous sommes engagés dans une démarche de Santé et Sécurité au Travail profondément ancrée dans notre culture afin d’offrir un environnement de travail sain et sécuritaire.',
          },
          { number:2,
            title:'travailler dans le respect de l’éthique, des droits humains et de l’environnement est structurel',
            description:'A travers plusieurs guides de référence, la Charte éthique et comportement, le guide des droits humains, le code de conduite anticorruption et le référentiel environnement…, notre travail au quotidien est réalisé dans la transparence, en s’assurant de respecter les droits humains et en veillant à réduire notre impact environnemental lors de l’exécution de nos projets.',
         },
         { number:3,
          title:'travailler dans le respect de la diversité et l’égalité des chances est challengeant',
          description:'Oyster technology mise sur la diversité et la mixité de ses équipes. Nous luttons contre toutes formes de discrimination entre nos talents, que ce soit en termes d’origine, de genre, d’handicap... Nous prônons l’égalité des chances notamment en matière d’accès à l’emploi, à la formation, à la rémunération, en termes d’évolution de carrière. Nous faisons de la diversité un véritable levier de performance.',
         },
         { number:4,
          title:'se partager les fruits de la performance de notre entreprise est juste normal',
          description:"Travailler chez Oyster technology signifie pour nous que chaque collaborateur puisse bénéficier des fruits de la performance atteinte chaque année. A travers des mécanismes adaptés de partage des profils, chaque collaborateur devient ainsi actionnaire au sein de l'entreprise. Individuellement aussi, la performance de chacun est également mise en valeur à travers une reconnaissance concrète du travail réalisé.",
         },
         { number:5,
            title:'disposer de parcours professionnels durables est vital',
            description:'Le développement des compétences de notre capital humain est une de nos grandes priorités. En effet, des parcours professionnels ciblés par métier visent à spécialiser nos équipes, à renforcer leurs acquis dans leur domaine de compétence et à développer leur réseau.Dans sa volonté d’assurer au plus près l’accompagnement des compétences de nos collaborateurs, notre politique RH accorde une place particulière à deux rendez-vous incontournables à savoir : l’entretien annuel et la « people review ». Ces entretiens constituent des outils essentiels de dialogue sur le parcours professionnel de chaque collaborateur.',
         },
         
        ],
     },
   
}