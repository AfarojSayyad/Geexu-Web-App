export default function TechExperties(props)
{
    return(
        <>
        
            <div className={props.class}>
              <div
                className="info relative xl:w-full md:w-full h-auto 2xl:py-[12.25rem] xl:py-[8.063rem] lg:py-[6.1rem] lg:px-28 md:py-[5rem] sm:pt-32 sm:pb-6 pt-32 pb-[6.20rem]"
                
                // style={{
                //   "background-image": "url('/secound-section/laravel.jpg')",
                //   "background-repeat": "no-repeat",
                //   "background-size": "cover",
                // }}
                //  style={``
                //    "background-image": "url('${props.src}')",
                //    "background-repeat": "no-repeat",
                //   "background-size": "cover",
                //  }} style={{"background-repeat": "no-repeat", "background-size": "cover",}}

              >
                  <div  >
                      <img
                        src={props.src} 
                        style={{width :1000}}              
                  
                        />

                  </div>
                 
                <div className="absolute top-0 left-0 flex items-end bg-gradient-to-t from-black to-transperent w-full h-full">
                  <h4 className="absolute font-[signifier] font-[300] text-white 2xl:bottom-[2.125rem] 2xl:left-9 xl:bottom-8 xl:left-9 lg:bottom-5 lg:left-6 md:bottom-5 md:left-6 bottom-5 left-6 2xl:text-[2.25rem] 2xl:leading-[2.5rem] xl:text-[2.25rem] xl:leading-[2.5rem] md:text-3xl sm:text-[1.875rem] sm:leading-[2.25rem] text-4xl">
                    {props.title} 
                    
                  </h4>
                </div>
              </div>

              <div className=" mt-3.5 sm:mt-[0.875rem] md:mt-6 lg:mt-[1.313rem] xl:mt-10 2xl:mt-9">
                <p className="text-[#C0C0C1] 2xl:text-lg 2xl:leading-loose lg:text[1rem] lg:leading-[1.875rem] md:text-[0.975rem] md:leading-[1.688rem] sm:text-[0.875rem] sm:leading-[1.688rem] text-[1rem] leading-[1.875rem] font-[400] px-4  sm:w-[8.6rem] md:w-[10.5rem] lg:w-[13rem] xl:w-[20rem] xl: lg:m-auto 2xl:w-[25rem] 2xl:m-auto ">
                  {props.para}
                </p>
              </div>
            </div>
        
        </>
    )
}