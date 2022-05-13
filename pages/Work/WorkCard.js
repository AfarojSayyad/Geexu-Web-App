export default function WorkCard(props) {
  return (
      <>
      <div className="w-full">
            <div  className=" hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 hover:scale-105 duration-300 relative h-64 lg:h-80 xl:h-80 w-full flex items-end justify-start text-left bg-cover bg-center">
                <img src={props.image}  className=" hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 hover:scale-105 duration-300 relative h-64 lg:h-80 xl:h-80 w-full flex items-end justify-start text-left bg-cover bg-center"/>
              <div  className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>

              <div className="absolute flex flex-col justify-end inset-0 p-4 sm:p-6">
                <div className="text-white hidden sm:block flex font-serif font-light text-shadow tracking-wide text-2xl xs:text-3xl lg:text-4xl">
                  {props.title}
                </div>

                <div className="text-white hidden sm:flex flex-wrap">
                  <div className=" font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">{props.label1}</div>
                  <div className="font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">{props.label2}</div>
                </div>
              </div>
            </div>

            <div className="leading-loose sm:leading-loose lg:leading-loose text-white mt-4 sm:mt-8 text-base sm:text-lg">
              {props.text}
            </div>
            <div className="flex items-center font-mono word-spacing-tight font-bold text-xs sm:text-base text-[#65b722] uppercase tracking-widest mt-2">
              {props.learn}
              <svg className="h-4 w-6 text-[#65b722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
      </>
  )
}