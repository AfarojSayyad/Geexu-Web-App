import Link from 'next/link';

export default function BlogCard(props)
{
    return(
        <>
        {/* <li>
            <Link to={props.heading}> */}
               <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">

                  <div className="flex-shrink-0">
                    <a href={props.href}>
                        <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                data-bg={props.data_bg}>
                                
                                {/* style={{ 'background':"url(`${(props)=>props.background}`)"  ,
                                        'width': "100%",
                                        'height':"[HEIGHT OF THE IMAGE]",
                                        'backgroundRepeat': "no-repeat",
                                        'backgroundSize': "cover"
                                }}> */}
                                    <img src= {props.background}/>
                                    

                            </div>
                            
                        </div>
                    </a>
                  </div>


                  <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                    <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                        <a href={props.href}>
                            <div>{props.title}</div>
                            </a>
                    </div>
  
                    <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                      <div className="flex flex-col space-y-2 pr-2">
                        <div className="flex items-center space-x-3">
                          <div className="flex -space-x-1">
                            <a href="/authors/daniel-coulbourne">
                              <img alt="Photo of Daniel Coulbourne" className="object-cover rounded-full h-7 w-7" src={props.src}/>
                            </a>
                            {/* <a href="/authors/cenitoria-melton">
                              <img alt="Photo of Cenitoria Melton" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/blog-1-img-1.jpg"/>
                            </a> */}
                          </div>
  
                          <div >
                            <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href={props.href}>{props.auth}</a>&nbsp;                                    
                            {/* <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/cenitoria-melton">Cenitoria Melton</a>                            */}
                         </div>
                        </div>
                      </div>
   
  
                      <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                          <div><time dateTime="2022-02-04">{props.date}</time></div>
      
      
                          <div>{props.time}</div>
      
                      </div>
                   </div>
  
                    <a href={props.href} className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                        <div>
                                {props.para}
                        </div>
                    </a>
                 </div>

                </div>
              </div>

            
            {/* </Link>
            </li> */}
         </>
    );

}