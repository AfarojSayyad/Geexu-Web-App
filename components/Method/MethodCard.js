export default function MethodCard(props)
{
    return(
        <>
                <div className="text-white 2xl:w-[24.5rem] xl:w-[15rem] lg:w-[35rem]">
                <div>
                  <h4
                    className="text-[#65b722] font-Pitch-Sans tracking-widest 2xl:text-[1.125rem] 2xl:leading-[1.75rem] 2xl:pb-3 sm:text-[1rem] sm:leading-[1.5rem] pb-2"
                  >
                    {props.title}
                  </h4>
                </div>
                <div>
                  <p
                    className="text-[#c0c0c0] 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.25rem] xl:leading-[2.125rem] lg:text-lg md:text-base md:leading-loose sm:text-[1rem] sm:leading-[1.5rem] leading-[1.875rem]"
                  >

                    {props.para}
                  </p>
                </div>
              </div>
        </>
    )
}