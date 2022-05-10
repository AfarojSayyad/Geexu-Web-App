import React,{useState, useEffect} from 'react';
const Toggle = () =>
{
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        
        
        
      };
    return(
        <>
        <nav className="navbar lg:flex md:flex h-full opacity-100">
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
        <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-black hover:text-white '>
              <li className="h-full md:mt-0 mt-7">
                <a href="/method" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">Method</a>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <a href="/work" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">WORK</a>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <a href="/blog" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">BLOG</a>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <a href="/team" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">TEAM</a>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <a href="/about" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">ABOUT</a>
              </li>
            </div>
            </div> 
            </nav>
        </>
        )
}
export default Toggle;