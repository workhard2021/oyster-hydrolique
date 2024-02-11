export const CloudLogo=({data,title,sub_title}:any)=>{
    return (<div className="w-full bg-gray-100 py-8">
            <div id="partenaire"></div>
            <div className="w-full text-center md:text-4xl text-3xl  font-bold py-2">{title}</div>
            <div className="md:w-[50%] text-sm w-full text-center text-gray-500 m-auto p-4">{sub_title}</div>
            <div className="w-full flex justify-center items-center space-x-10 space-y-2 py-2 flex-wrap">
                {data.map((value:any,index:number)=>{
                    return <div key={index} className="md:w-[200px] w-[32%] h-[90px] bg-url" style={{backgroundImage:`url(${value.image})`}} /> 
                })}
            </div>
    </div>)
}
CloudLogo.defaultProps={
     data:[{image:'../images/microsoft.png'},
           {image:'../images/microsoft.png'},
           {image:'../images/microsoft.png'},
           {image:'../images/microsoft.png'},
     ],
     title:'Ils nous font confiance',
     sub_title:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise, des inquiétudes quant à la sécurité doivent être soulevées'
}