import Link from 'next/link';

export default function AboutCard(props)
{
    return(
        <>
        {/* <li>
            <Link to={props.heading}> */}
                <div className="py-6 lg:py-8">
                    <h3 className="text-3xl lg:text-4xl text-[#65b722] font-[signifier] font-[100] pb-4 lg:pb-8">
                    <span className="hidden sm:inline font-[Pitch-Sans] word-spacing-tight font-semibold text-base text-gray-400 w-12">{props.no}</span>
                    
                    {props.heading}
                    </h3>
                    <p className="text-[#D1D1D1] md:pl-8 lg:pl-12 xl:pl-20 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.125rem] xl:leading-[2.125rem] lg:text-[1.125rem] lg:leading-[2.125rem] md:text-[1.125rem] md:leading-[2.125rem]">
                    
                    {props.Info}

                    </p>
                </div>
              {/* </Link>
              </li> */}
              </>
    );

}