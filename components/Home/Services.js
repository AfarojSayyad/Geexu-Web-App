export default function Service(props)
{
    return(
        <>
        <div className="grid sm:grid-cols-3 grid-cols-2 grid-gap-4 mt-16 sm:mt-16 2xl:mt-[4.25rem] xl:mt-[4.7rem] lg:mt-[4.2rem] md:mt-[4.5rem]">
              <div className="technology col-span-2 md:col-span-1 sm:col-span-1 lg:col-span-1">
                <h3 className="text-[#65b722] font-[Pitch Sans] font-bold 2xl:text-[1.25rem] 2xl:leading-[1.75rem] xl:text-[1rem] xl:leading-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] md:text-[1rem] md:[1.5rem] sm:text-[0.875rem] sm:leading-[1.25rem] tracking-[4px] text-[0.875rem] leading-[1.25rem] sm:mb-0 mb-9">
                  {props.title}
                </h3>
              </div>
              <div className="2xl:pl-10 xl:pl-10 lg:pl-14 md:pl-12 sm:-ml-10 sm:pl-0 xl:pt-0 lg:pt-1">
                <ul>
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-[#e6e6e6] 2xl:text-[1.25rem] 2xl:leading-[1.563rem] 2xl:w-[93%] xl:w-[90%] xl:ml-6 lg:w-[96%] md:w-[95%] sm:w-[85%] w96%] 2xl:font-[400] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2">
                   {props.tech1}
                  </li>
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 2xl:w-[93%] xl:w-[90%] xl:ml-6 lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2">
                    {props.tech2}
                  </li>
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 2xl:w-[93%] xl:w-[90%] xl:ml-6 lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2">
                    {props.tech3}
                  </li>
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 2xl:w-[93%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] xl:ml-6 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 pb-2">
                    {props.tech4}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="ml-4 2xl:pl-5 xl:pl-5 lg:pl-2 xl:pt-0 lg:pt-1">
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 md:w-[95%] lg:w-[100%] 2xl:pb-5 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2">
                    {props.tech6}
                  </li>
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 md:w-[95%] lg:w-[100%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2">
                    {props.tech7}
                  </li>
                  <li className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 md:w-[95%] lg:w-[100%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:mb-0 lg:mb-0 md:pb-4 pb-2">
                    {props.tech8}
                  </li>
                   
                  <li className={props.class}>
                   {props.tech9}
                  </li>
                </ul>
              </div>
            </div>
        </>
    )
}