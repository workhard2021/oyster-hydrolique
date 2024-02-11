import Link from 'next/link';
import { Fragment } from 'react';
import {BsTwitter,BsLinkedin,BsFacebook} from 'react-icons/bs';

export const Teams=({data,sub_title,title}:any)=>{
        return (<div className="w-full py-8 px-4 mt-4 bg-gray-50">
            {title?<div className="w-full text-center text-sm uppercase text-blue-900 font-bold py-2">{title}</div>:null}
            {sub_title?<div className="w-full text-center text-3xl font-bold py-2">{sub_title}</div>:null}
            <div className="w-full md:w-[90%] m-auto flex justify-center items-center pt-16 mb-8 flex-wrap">
                {data.map((value:any,index:number)=>{
                    return <div key={index} className="m-3 relative md:w-[400px] w-[95%] h-[450px] shadow-md  rounded-sm my-16 bg-white p-3">
                              <div className="relative -top-[19%] m-auto rounded-full w-[130px] h-[130px] bg-url" style={{backgroundImage:`url(${value.image})`}}/>
                              <div className='relative w-full -top-[10%] h-auto'>
                                 <div className="w-full text-center text-2xl font-bold py-4">{value.full_name}</div>
                                 <div className="w-full text-center text-md py-4">{value.post}</div>
                                 <div className="w-full text-center text-sm text-gray-500  py-1">{value.description}</div>
                                 <div className="w-full flex justify-center place-items-center space-x-6 py-4">
                                  {value.newtwork && value.newtwork.map((value:any,key:number)=>{
                                     return <Fragment key={key}>
                                         {value.name==='twitter'?
                                            <Link href={value.url}><BsTwitter className='inline' size={21}/></Link>
                                             :
                                               value.name==='linkedin'? 
                                               <Link href={value.url}><BsLinkedin className='inline' size={21}/></Link>
                                             :
                                               value.name==="facebook"?
                                               <Link href={value.url}><BsFacebook className='inline' size={21}/></Link>
                                             :null
                                           }
                                     </Fragment>
                                  })}
                              </div> 
                          </div>
                    </div>
               })}
            </div>
  </div>)
}

Teams.defaultProps={
     sub_title:'Notre les membre de notre quipe',
     data:[{id:1,image:'../images/p1.jpeg',full_name:'Andres Berlin',post:'Product Design Head',
             description:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
             newtwork:[{name:'twitter',url:'https://www.twitter.com'},
                       {name:'facebook',url:'https://www.twitter.com'},
                       {name:'linkedin',url:'https://www..com'}
                       ]
           },
           {id:2,image:'../images/p5.jpeg',full_name:'Andres Berlin',post:'UX Designer',
            description:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
            newtwork:[{name:'twitter',url:'https://www.twitter.com'},
                       {name:'facebook',url:'https://www.twitter.com'},
                       {name:'linkedin',url:'https://www..com'}
                    ]
           },
           {id:3,image:'../images/p2.jpeg',full_name:'Andres Berlin',post:'Principal Software Engineer',
             description:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
             newtwork:[{name:'twitter',url:'https://www.twitter.com'},
                       {name:'facebook',url:'https://www.twitter.com'},
                       {name:'linkedin',url:'https://www..com'}
                    ]
           },
           {id:4,image:'../images/p4.jpeg',full_name:'Andres Berlin',post:'Manager Development',
             description:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
             newtwork:[{name:'twitter',url:'https://www.twitter.com'},
                       {name:'facebook',url:'https://www.twitter.com'},
                       {name:'linkedin',url:'https://www..com'}
                    ]
           },
           {id:4,image:'../images/p3.jpeg',full_name:'Andres Berlin',post:'Manager Development',
             description:"The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
             newtwork:[{name:'twitter',url:'https://www.twitter.com'},
                       {name:'facebook',url:'https://www.twitter.com'},
                       {name:'linkedin',url:'https://www..com'}
                    ]
           }
     ]
}