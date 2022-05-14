export default function Clients(props)
{
    return(
        <>
        <div className="cursor-pointer group">
              <div className="relative group-hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 group-hover:scale-105 duration-300">
                <img
                  src={props.src}
                  className="w-full object-cover h-64"
                />
                <div className="absolute bottom-4 left-4 flex flex-wrap sm:hidden md:hidden lg:flex lg:flex-wrap lg:gap-1 hidden">
                  <a
                    href="#"
                    className="bg-[#61af21] text-[12px] text-white uppercase px-4"
                  >
                    {props.label1}
                  </a>

                  <a
                    href="#"
                    className="bg-[#65b722] text-[12px] text-white uppercase px-4 lg:mx-3 mx-2"
                  >
                    {props.label2}
                  </a>
                  <a
                    href="#"
                    className="bg-[#65b722] text-[12px] text-white uppercase px-4"
                  >
                    {props.label3}
                  </a>
                  <a
                    href="#"
                    className={props.class}
                  >
                    {props.label4}
                  </a>
                </div>
              </div>
              <div className="sm:mt-10 mt-4">
                <h5 className="lg:text-[30px] md:text[24px] sm:text-[20px] text-2xl mb-5 group-hover:text-[#65b722] font-serif">
                  {props.title}
                </h5>
                <p className="lg:text-[16px] md:text-[16px] sm::text-[16px] text-[16px] mb-4">
                 {props.para}
                </p>
                <a href="#" className="uppercase text-[#65b722] font-mono">
                  learn more <i className="fa-solid fa-angle-right"></i>
                </a>
                
              </div>
            </div>
        </>
    )
}