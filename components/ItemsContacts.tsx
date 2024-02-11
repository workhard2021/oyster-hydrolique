import Link from "next/link";

export const ItemsContacts=({data}:any)=>{
    return (<div className="w-full relative bg-blue-900 flex justify-center items-center flex-wrap mt-[30px] p-3 py-4">
          <div className='bg-url_teams absolute w-full h-full' style={{backgroundImage:`url(${data.image})`}}/>
          <div className="relative md:w-[45%] w-full md:h-[500px] h-[300px] flex justify-evenly items-center">
              <div className="w-full m-auto">
                  <p className="w-full md:text-start uppercase text-center text-white">{data.title}</p>
                  <h2 className="w-full md:text-start text-center text-white md:text-[30px] text-[24px] py-[25px]" style={{fontWeight:'600'}}>{data.sub_title}</h2>
                  <p className="w-full md:text-start text-center text-white md:text-[24px] text-[18px]" style={{fontWeight:'300'}}>{data.title_question}</p>
              </div>
          </div>
          <div className="relative md:w-[45%] w-full md:h-[500px] h-[50px] flex justify-center items-center">
              <Link className="py-2 px-4 uppercase bg-white rounded-xl font-medium" href={`mailto:${data.email}`}>{data.email_title}</Link>
          </div>
    </div>)
}

ItemsContacts.defaultProps={
    data:{
       title:'FAIRE PARTIE DE NOTRE ÉQUIPE',
       sub_title:'Nous croyons au croisement des expertises, à l’intelligence collective et à la singularité des talents.',
       title_question:'Vous aussi ? Nous sommes faits pours nous entendre.',
       email:'email@gmail.com',
       email_title:'Rejoignez-nous',
       image:'../images/teams.jpeg',
    }
};