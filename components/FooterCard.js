import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image'

// const FooterSection = styled.div`
//     background : #000;
//     color: #fff;
//     height:60px;
//     display: flex;
//     justify-content:center;
//     align-items:center;
// `;
const FooterCard = () =>
{
    return(
        <>
<div className="bg-[#ffe7c7]">
                    <div className="flex flex-col sm:flex-row">

                    <div className="lg:w-6/12 md:w-6/12 sm:w-3/5 w-full 2xl:py-72 xl:py-[12.25rem] lg:py-[9.5rem] py-[5.9rem] h-auto relative" style={{"background-image":"url('/lets-tallk/footer.jpg')","background-size":"cover"}}>
                        <div className="absolute top-0 right-0 w-full h-full flex justify-end">
                          <div className="w-16 h-full bg-[#fbe6cb] opacity-10 z-10"></div>
                          <div className="w-16 h-full bg-[#fce6ca] opacity-30 z-10"></div>
                          <div className="w-16 h-full bg-[#fde6c9] opacity-70 z-10"></div>
                          <div className="w-16 h-full bg-[#fee7c8] opacity-80 z-10"></div>
                          <div className="w-16 h-full bg-[#ffe7c7] opacity-90 z-10"></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center flex-1 max-w-2xl bg-cream">
                            <div className="flex flex-col px-5 py-20 space-y-4 sm:py-0 2xl:pl-20">
                                <div className="font-serif font-extralight text-7xl sm:text-5xl lg:text-7xl xl:text-8xl">
                                    Let's talk, <br/>shall we?
                                </div>
                    
                                <div className="flex">
                                  <Link  href="/contact">
                                  <a className="rounded-full" aria-label="Contact us">
                                    <div className="text-sm md:text-base box-border transition-colors duration-300 font-mono word-spacing-tight font-bold tracking-widest rounded-full py-3 px-6 uppercase leading-none
                                        bg-[#65b722] hover:bg-white text-white hover:text-black">
                                        Drop us a line
                                    </div>
                                  </a>
                                  </Link>
                                </div>
                    
                          </div>
                      </div>

                    </div>                    
                  </div>
                  </>
    );
};

export default FooterCard;