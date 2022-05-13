import Link from 'next/link';

export default function TeamCard(props)
{
    return(
        <>
        {/* <li>
            <Link to={props.heading}> */}
                <div className="relative group cursor-pointer">

                <div className="img">
                <img
                  src={props.image}
                  alt={props.alt}
                  title={props.title}
                  className="sm:w-11/12 w-full grayscale hover:grayscale-0 cursor-pointer"
                />
              </div>

              <div className="info">
                <div className="flex justify-end mr-14 absolute top-4 right-0">
                  <img
                    src="/header-img/favicon.png"
                    alt="favicon img"
                    className="w-8"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
                >
                  <h4
                    className="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                  >
                    {props.head}
                  </h4>
                  <p
                    className="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                  >
                    {props.para}
                  </p>
                </div>
              </div>

              <div className="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 sm:w-[93%] w-full h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block">
                <div className="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden">
                  <h5>{props.head2}</h5>
                </div>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    className="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                  >
                    <div
                      className="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                        {/* <i className="fa-solid fa-pen-to-square"></i> */}
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="py-2 text-black pl-2">
                      <h5 className="font-[pitch-sans] font-semibold tracking-widest">
                        {props.head3}
                      </h5>
                      <p className="uppercase text-xs text-gray-700">{props.para2}</p>
                    </div>
                  </div>
                </a>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    className="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                  >
                    <div
                      className="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                      {/* <i className="fa-solid fa-pen-to-square"></i> */}
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="py-2 text-black pl-2">
                      <h5 className="font-[pitch-sans] font-semibold tracking-widest">
                        {props.head4}
                      </h5>
                      <p className="uppercase text-xs text-gray-700">{props.para3}</p>
                    </div>
                  </div>
                </a>
                {/* <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    className="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                  >
                    <div
                      className="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                      <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="py-2 text-black pl-2">
                      <h5 className="font-[pitch-sans] font-semibold tracking-widest">
                        {props.head5}
                      </h5>
                      <p className="uppercase text-xs text-gray-700 tracking-widest">
                        {props.para4}
                      </p>
                    </div>
                  </div>
                </a> */}
                <div className="mt-4 ml-8">
                  <h4
                    className="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100]"
                  >
                    {props.head6}
                  </h4>
                  <p
                    className="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                  >
                    {props.para5}
                  </p>
                </div>
            </div>

              </div>
              {/* </Link>
              </li> */}
              </>
    );

}