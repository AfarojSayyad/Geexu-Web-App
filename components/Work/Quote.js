export default function Quote(props) {
  return (
      <>
      <div className="container-fluid px-6 md:px-16 lg:px-28  text-white  bg-zinc-900">
        <div className="container mx-auto py-36 md:py-40 lg:py-40 2xl:py-[11.80rem] ">
          <h3 className="font-[signifier] font-[100] italic text-[2.25rem] leading-[2.813rem] lg:text-6xl lg:leading-[4.688rem] md:text-[3.75rem] md:leading-[4.688rem]">

            {props.text}

          </h3>
          <div className="flex flex-col justify-start items-end">
            <div className="mt-8 mr-0 md:mr-28">
              <h4 className="text-[#65b722] font-mono sm:text-left text-right font-semibold tracking-widest md:text-[0.875rem] text-[0.875rem] leading-[1.25rem]">
                {props.writer}
              </h4>
              <p className="font-mono text-[#b3b3b3] tracking-widest text-[0.875rem] leading-[1.25rem]">
                {props.position}
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}