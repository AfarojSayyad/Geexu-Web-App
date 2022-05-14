export default function Community(props)
{
    return(
        <>
        <div className="group cursor-pointer flex flex-col mb-8 text-white">
            <div className={props.class}>
            <a
              href={props.href}>
              
            
              <div
                className="flex flex-col justify-end relative overflow-hidden aspect-w-1 aspect-h-1"
              >
                <img
                  src={props.src}
                  alt=""
                />
                <div
                  className="absolute top-auto bottom-0 left-0 right-0 h-2/3 opacity-40 bg-gradient-to-b from-transparent to-black"
                ></div>
                <div
                  className="absolute flex flex-col justify-end mx-1 p-5 sm:p-3 lg:p-5 xl:p-8 z-10"
                >
                  <p
                    className="font-[signifier] font-[300] text-white 2xl:text-[2.25rem] 2xl:leading-[2.813rem] text-4xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight"
                  >
                     {props.text1} <br className="2xl:hidden block" />
                     {props.text2}
                  </p>
                </div>
              </div>
            </a>
            </div>


            <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-9 px-4">
              <a
                href={props.href}
                className="block text-[#c0c0c0] font-[400] 2xl:text-[1.225rem] 2xl:leading-[2.125rem] xl:text-[1.063rem] xl:leading-[1.875]"
              >
                {props.para}
              </a>
            </div>
          </div>
        </>
    )
}