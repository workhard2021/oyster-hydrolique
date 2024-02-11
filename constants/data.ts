const DATA={
       missionRaison:{
          image:"/images/home-1.png",
          data:[
            {title:"Notre raison d’être",description:"Animés par la conviction que l’accès à l’eau est un levier essentiel de santé publique et de qualité de vie, nous contribuons à l’amélioration de la vie des populations et des industriels en assurant l’accès et la gestion de cette ressource vitale avec une approche globale."},
            {title:"Notre mission",description:"Fournir des solutions innovantes, respectueuses de l'environnement, et à promouvoir la sécurité de l'eau dans toutes nos installations, contribuant ainsi au bien-être des communautés et à la préservation des ressources hydriques."},
         ]
        },
        usValues:{
           title: "Nos valeurs",
           image: "/images/value.png",
           data:[
              {
                title: "confiance",
                description: "Construire une relation de confiance avec nos clients, être à l’écoute, rester accessible et réactif, tels sont les engagements sur lesquels nous bâtissons nos partenariats.",
              },
              {
                title: "engagement",
                description: "Nous assumons pleinement nos engagements envers les différentes parties prenantes, en respectant nos obligations et en valorisant nos collaborateurs."
             },
             {
                title:"audace",
                description: "L’audace est une valeur vitale pour notre entreprise, elle nous permet d‘évoluer et de se renouveler constamment face au changement permanant de notre environnement."
             }
           ]
        },
        expertises:{
           title: "Nos Expertises",
           data:[
             {  id: 1,
                image:"/images/home-2.png",
                imageDetail: "/images/test.jpg",
                title: "Gestion de l’eau",
                slug: "gestion-de-l-eaux",
                description: "Approche holistique pour la gestion des ressources hydriques, couvrant la captation, la distribution, le traitement et la surveillance.",
                list:[{
                    id: 1,
                    image: "/images/3.jpeg",
                    title:"Captage de l’eau",
                    subtitle: "L'extraction des eaux de source et des eaux souterraines à partir de puits et de forages, ainsi que les barrages, est une base essentielle pour notre sécurité d'approvisionnement en eau.",
                    description: "Oyster Technology propose des solutions clé en main, qu'il s'agisse de solutions pour les puits ou barrage en intégrant des technologies de pompage avancées pour garantir un débit optimal tout en optimisant la consommation énergétique."
                },{
                    id: 2,
                    image: "/images/3.jpeg",
                    title:"Traitement de l’eau",
                    subtitle: "Les solutions pour le traitement de l’eau peuvent être fort diverses selon le secteur et le cas d’application.",
                    description: "Oyster Technology, grâce à son équipe, propose des solutions de pompage, de dosage et de désinfection pour tous les process de traitement. Nous analysons méticuleuse les exigences de nos partenaires et nous sélectionnons les produits adéquats afin d’apporter la sécurité et l’efficacité à chaque projet réalisé.",

                },{
                    id: 3,
                    image:"/images/3.jpeg",
                    title: "Distribution de l’eau",
                    subtitle: "L'objectif de la distribution d'eau est d'acheminer l'eau potable de manière fiable et hygiénique partout où elle est nécessaire.",
                    description: "Que ce soit en termes de débit, de distances, de différences de hauteur ou de la pression, Oyster Technology propose des solutions complètes et intelligentes pour satisfaire toutes les exigences. Nous réalisons des stations de pompage pour les réseaux distributeurs nécessitant des débits élevés, mais aussi pour des petits et moyens débits, ainsi que pour différentes zones de pression.",
                },{
                    id: 4,
                    image: "/images/3.jpeg",
                    title: "Stations d’épuration",
                    subtitle: "Les contraintes auxquelles sont confrontées les stations d'épuration ne cessent d'augmenter : les eaux chargées ou les eaux usées contiennent toujours plus d'impuretés tandis que les exigences imposées augmentent en permanence concernant la qualité de l'eau après traitement.",
                    description: "Oyster Technology accompagne ses partenaires pour le traitement des eaux chargées : de l'entrée à la sortie de la station d'épuration, nous assurons un résultat d'épuration optimal grâce à nos installations complètes liés aux procédés d'agitation, d'aération et de pompage."
                }]
            },
            {   id: 2,
                image:"https://cdn.ca.emap.com/wp-content/uploads/sites/9/2023/10/Anglian_Water_2-1024x683.jpg",
                title: "Industrie",
                slug: "industrie",
                description: "Adaptation de nos compétences aux besoins spécifiques de l'industrie, avec des solutions clés en main garantissant fiabilité et performance.",
                list:[{
                     id: 1,
                     image:"",
                     title:"Exploitation minière",
                     subtitle:"Lors du développement de nos solutions, nous prenons en considération les normes de l'industrie minière ainsi que les exigences et circonstances. Une large gamme de pressions et de débits, une conception à haut rendement et une sécurité extrême sont une évidence pour Oyster Technology.",
                     description: "Nous disposons de compétences en ingénierie et en gestion de projets et vous assistons dans toutes les phases de votre projet."
                },
                {
                    id: 2,
                    image:"",
                    title:"Industrie chimique",
                    subtitle:"Oyster Technology contribue au rendement de vos installations de production, notamment par un dosage efficace d’additifs ainsi que par le pompage et le traitement des eaux de lavage et des eaux acides.",
                    description: "Oyster Technology vous propose des solutions spécialisées pour le dosage et le pompage des substances chimiques et produits requis. Nous proposons des pompes et des systèmes adaptés à vos besoins et vous offrons une assistance totale dans toutes les phases de votre projet."
                },
                {
                    id: 3,
                    image:"",
                    title:"Automobile",
                    subtitle:"Diluer, tremper, refroidir, laver, rincer, évacuer, transformer, ou chauffer : selon le procédé, les finalités des eaux de production dans l’industrie sont multiples. Et pour chacun de ces usages, ce sont des qualités d’eau bien spécifiques qui doivent être obtenues.",
                    description: "Oyster Technology propose des solutions conformes aux normes de qualité et de sécurité spécifiques au secteur automobile et en intégrant des technologies visant à optimiser l'utilisation de l'eau dans les processus de fabrication, avec un accent sur l'efficacité opérationnelle."
                },
                {
                    id: 4,
                    image:"",
                    title:"Agroalimentaire",
                    subtitle:"L’intégrité du processus, le respect des formulations et l’élaboration de produits sûrs sont essentiels dans l’industrie agroalimentaire. Les aspects hygiéniques et l’aptitude au nettoyage jouent un rôle important : toute contamination des fluides de procédés doit être exclue à chaque phase de la production.",
                    description: "Oyster Technology propose des systèmes précis conformément aux exigences de l’industrie agroalimentaire pour les processus tels que l’homogénéisation, le mélange et le remplissage."
                },
               ]
            },
            {   id: 3,
                image:"https://media.istockphoto.com/id/1329613778/photo/worker-take-water-from-the-wastewater-treatment-pond-to-check-the-quality-of-the-water-after.jpg?s=612x612&w=0&k=20&c=sLoXQV-lG1VjQQ0zA9y3zASQaY1cX-0oaURdYiRTBpg=",
                title: "Irrigation",
                slug: "irregation",
                description: "Utilisation de technologies avancées pour maximiser l'efficacité de l'irrigation, réduire les pertes d'eau et promouvoir une agriculture durable.",
                list:[
                    {
                        id: 1,
                        image:"",
                        title:"conseil et etude",
                        subtitle:"Nous mettons en place les moyens humains et techniques nécessaire pour étudier votre projet : Étude technique, choix du matériel et étude budgétaire, notre bureau d’étude est à votre disposition pour vous accompagner et vous guider durant toute cette phase avant-projet.",
                        description: ""
                    },
                    {
                        id: 2,
                        image:"",
                        title:"selection des equipements",
                        subtitle:"Nous insistons sur le choix des équipements et partenaires pour la réussite des projets, Un bon partenaire doit avoir des compétences techniques importantes, faire preuve d’innovation et être capable de définir la bonne solution pour chaque situation.",
                        description: "Grace à nos partenaire nationaux et internationaux, nous proposons une gamme très complète d'équipements de haute technicité, conçus pour répondre à tous les besoins de nos clients."
                    },
                    {
                        id: 3,
                        image:"",
                        title:"installation et maintenance",
                        subtitle:"Assurer une installation des équipements dans les règles de l’art est le cœur de notre savoir-faire. Grace à notre équipe pluridisciplinaire nous assurons une bonne installation des équipements et une parfaite mise en service afin de garantie un bon fonctionnement de votre installation.",
                        description: "Nous assurons un service de maintenance préventive pour chaque installation réalisée pour assurer le bon fonctionnement continu des systèmes d'irrigation et minimiser les temps d'arrêt."
                    }
                ]
            }
         ]
       },
       contact:{
          title: "contactez-nous",
          firstImage:"/images/contact.png",
          lastImage:"",
          description: "Pour des solutions sur mesure dans le domaine de l'irrigation, du traitement d'eau, de la gestion hydraulique, ou tout autre service spécialisé, n'hésitez pas à nous contacter. Notre équipe d'experts est prête à discuter de vos besoins et à élaborer des solutions adaptées à votre secteur d'activité. Contactez-nous dès aujourd'hui pour entamer une collaboration fructueuse",
          list:[
            {
                id:1,
                icon: "phone",
                title: "+212-6 61 05 02 28",
                url:""
            },
            {
                id:2,
                icon: "globe",
                title: "www.oyster.com",
                url:"www.OYSTER.com"
            },
            {
                id:3,
                icon: "map",
                title: "123 Anywhere St., Any City",
                url:""
            }
          ]
       }
}

export default DATA;