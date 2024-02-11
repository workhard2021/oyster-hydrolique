import Head from 'next/head';
import { avatarFn } from '../libs/utils';
const dataInit={
          title_home: "Oyster technology",
          sub_title:"",
          created_at:"01-12-2022",
}
export function Seo({data=dataInit,defaultData}:any){
    const keywords ="éducation, formations, enseignement, autocad, conakry, bamako, universités";
     return <Head>
         <title>{defaultData.title}</title>
         {/* Twitter card  */}
         <link rel="icon" href={defaultData.url_file}/>
         <link rel="apple-touch-icon" href={defaultData.url_file}/>
         <meta name="type" content={'site-web'}/>
         <meta name="locale" content="fr_md"/>
         <meta name="site_name" content="Oyster-technology"/>
         <meta name="image" content={data.url_file?avatarFn(`${data.url_file}`):defaultData.url_file}/>
         <meta name="keywords" content={keywords} />
         <meta name="title" content={data.title ||''}/>
         <meta name="description" content={data.sub_title || ''} />
         <meta property="og:type" content={'site-web'}/>
         <meta property="og:locale" content="fr_ma"/>
         <meta property="og:site_name" content="Oyster-technology"/>
         <meta property="og:image" content={data.url_file? avatarFn(`${data.url_file || defaultData.url_file}`) : defaultData.url_file}/>
         <meta property="og:image:height" content={'40'}/>
         <meta property="og:image:width" content={'40'}/>
         <meta property="og:title" content={data.title||''} />
         <meta property="og:description" content={data.title_home || data.title} />
         <meta name="twitter:image" content={data.url_file?avatarFn(`${data.url_file}`):defaultData.url_file}/>
         <meta name="twitter:locale" content="fr_ma"/>
         <meta name="twitter:site_name" content="Oyster-technology"/>
         <meta name="twitter:card" content="summary"/>
         <meta name="twitter:title" content={data.title|| data.sub_title}/>
         <meta name="twitter:description" content={data.sub_title || data.title}/>
    </Head>
}
Seo.defaultProps={
      defaultData:{
        url_file:'../images/logo.png',
        title: "Oyster technology",
      }
}