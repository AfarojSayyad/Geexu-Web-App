import styled from "styled-components"
import { useState } from "react";
import Footer from "../components/Footer";
import Script from 'next/script'
import FooterCard from "../components/FooterCard";

const Style = styled.div`
    background:#000;
`;

export default function Hero() {

  const [showMe, setShowMe] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [showServices, setShowServices] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

  function embededTeams(){
    setShowEmbed(!showEmbed);
  }

  function services(){
    setShowServices(!showServices);
  }

  // const handleClick = (e) =>
  // {
  //   console.log('Free pizza!');
  //   console.log(e);
  //   return(
  //     <>
  //     <div className="px-4 pb-8">
  //       We will take stock of your issues and goals,
  //       carefully assess your needs,
  //       and custom-tailor a route forward in 
  //       order for our embedded staff to accomplish the best
  //       for your organization.
  //     </div>
       
  //      </>
  //   );
     
  // }
    return (
      <div>
        {/* <h1 classNameName="text-3xl font-bold underline">
            Hello world!
        </h1>
        <div>
          <a href="./index.html">
            <img
              src="/assets/images/header-img/logo.png"
              alt="Tighten Logo"
              className="logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] md:pt-0 sm:pt-[0.125rem]"
            />
            <img
              src="/header-img/logo.png"
              alt="Tighten Logo"
              className="sticky-logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] "
            />
          </a>
        </div> */}
        <div className="w-min-screen w-full h-[682px] sm:h-[674px] md:h-[780px] lg:h-[990px] xl:h-[1027px] -mt-[100px] ">
          <div>
            <div className="absolute inset-0 flex -z-10">
                  <div className="w-2/5 h-full bg-emerald-500"  style={{backgroundColor:"rgb(116, 202, 232)"}} />
                  <div className="w-2/5 h-full bg-emerald-500 " style={{"background-color":"rgb(136, 200, 199)"}}/>
                  <div className="w-2/5 h-full bg-emerald-500"  style={{"background-color":"rgb(156 198 166)"}}/>
                  <div className="w-2/5 h-full bg-emerald-500"  style={{"background-color":"#b0c485"}}/>
                  <div className="w-2/5 h-full bg-emerald-500"  style={{"background-color":"#9bc276"}} />
                  <div className="w-2/5 h-full bg-emerald-500"  style={{"background-color":"#94cb70"}} />
                  <div className="w-2/5 h-full bg-emerald-500"  style={{"background-color":"#7fcf66"}} />
                  <div className="w-2/5 h-full bg-emerald-500"style={{"background-color":"#7fcf66"}} />
                  <div className="w-2/5 h-full bg-emerald-500 hidden lg:block" style={{"background-color":"#73d260"}} />
            </div>
            <div className="hidden md:flex absolute w-full h-[600px] sm:h-[580px] md:h-[770px] lg:h-[990px] xl:h-[1028px] flex boder:transparent"  style={{"opacity":"0.1875"}}>
              <div className="w-5/12 h-full bg-emerald-400 hover:bg-red-200" />
              <div className="w-2/5 h-full bg-emerald-500 hover:bg-red-300" />
              <div className="w-2/5 h-full bg-teal-500  hover:bg-red-400" style={{"color":"aliceblue"}} />
              <div className="w-2/5 h-full bg-teal-600  hover:bg-orange-300" />
              <div className="w-2/5 h-full bg-cyan-700  hover:bg-orange-400" />
              <div className="w-2/5 h-full bg-cyan-800  hover:bg-orange-500" />
              <div className="w-2/5 h-full bg-cyan-900  hover:bg-emerald-300" />
              <div className="w-2/5 h-full bg-cyan-800  hover:bg-emerald-400" />
            </div>
          </div>
                <div className="px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-44 pt-[212px]">
                    <div className="max-w-screen-2xl mx-auto md:pt-[114px]">
                    <h1 className="font-[signifier] 2xl:leading-[8.5rem] 2xl:font-[280] xl:text-[8rem] xl:leading-[8.5rem] xl:font-[280] 2xl:font-[100] lg:text-[8rem] lg:leading-[8.5rem] md:text-[6rem] md:leading-[6.375rem] sm:text-7xl text-[2.25rem] leading-[2.375rem] font-[100] mt-1 sm:mt-0">
                        Development <p/>in a better<p/>                  <span className="italic">perspective.</span>
                        </h1>
            
                        <div className="w-full text-sm sm:text-lg md:text-xl leading-loose md:leading-relaxed my-6 md:my-10">
                        Geexu's whole-business approach goes beyond engineering,
                            <div className="hidden sm:block"/>
                        {/* <br className="hidden sm:block"> */}
                            allowing software-driven companies to move forward with confidence and clarity.
                
                        </div>
            
                        <div>
                            <div className="flex">
                                <a className="rounded-full z-10" href="/method" >
                                    <div className="text-white text-sm md:text-base box-border transition-colors duration-300 font-Yantramanav word-spacing-tight font-bold tracking-widest rounded-full py-3 px-6 uppercase leading-none
                                            bg-[#65b722] text-white border border-transparent hover:bg-white hover:text-black hover:border hover:border-transparent">
                                            OUR UNIQUE APPROACH
                                    </div>
                                </a>
                            </div>
            
                        </div>
            
                        <div className="flex md:hidden justify-center items-center space-x-4 w-full mt-16 xs:mt-24 md:mt-16">
                        <div className="" aria-hidden="true">
                            <svg className="svg-inline--fa fa-angle-down border text-[0.75rem] leading-1 px-3.5 py-3 mr-2 border-black rounded-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>
                        </div>
        
                        <div className="font-Yantramanav font-semibold text-xs uppercase leading-4 text-black tracking-wide">
                            Get to scrollin'
                        </div>
                    </div>
                    </div>
                </div>

                {/* Hero section start here */}

        
         </div>
         {/* Hero section end here */}
         
         {/* Second (technical expert) section start here */}
         <div className="container-fluid">
            <div
              className="w-full bg-black md:flex xl:flex lg:flex 2xl:justify-evenly items-center block text-center px-6 pt-20 pb-[7.813rem] md:px-16 sm:pb-[7.9rem] md:pt-36 md:pb-[10.875rem] lg:px-28 lg:pt-40 lg:pb-[12.8rem] xl:pt-44 xl:pb-[13.688rem] 2xl:pt-[9.25rem] 2xl:pb-[13.100rem]"
            >
              <div className="mb-8 md:mb-0 2xl:mt-8 xl:pb-3">
                <h1
                  className="font-[signifier] text-white 2xl:text-7xl xl:text-[3.8rem] xl:leading-[4.5rem] lg:text-[3rem] lg:leading-[3rem] md:text-5xl md:leading-[3rem] text-[2.25rem] leading-[2.5rem] font-[100] text-left sm:mt-4 sm:mb-0 md:mt-0 xl:mt-2.5 2xl:mt-0 mt-4 lg:mt-0 lg:pl-0 2xl:pr-[3.75rem]"
                >
                  Technical expertise.
                </h1>
              </div>
              <div>
                <p
                  className="font-[Sans-serif] text-white tracking-wide text-left font-[450] text-[1rem] leading-[1.875rem] md:text-[1rem] md:leading-[1.875rem] lg:text-[1.125rem] lg:leading-[2.125rem] xl:text-[1.25rem] xl:leading-[2.4rem] 2xl:text-[1.25rem] 2xl:leading-[2.375rem] pr-0 pb-0 sm:pr-10 md:pr-0 lg:pl-24 lg:pr-0 xl:pr-0 xl:pl-[7.875rem] xl:pt-0 2xl:pl-[1rem] 2xl:pt-4 md:pl-36 md:w-[25rem] lg:w-[25rem] xl:w-[32rem] 2xl:w-[45rem]"
                >
                we’re ultra-focused and well-versed in the technology that drives today's most successful firms.
                </p>
              </div>
            </div>
          </div>

          {/* Third container (with images) start here */}
          <div
                className="container-fluid bg-[#1A1A1A] h-[auto] px-6 md:px-16 lg:px-28 -mt-1">
                  <div className="container mx-auto">
                  <div
                       className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 2xl:gap-16 xl:gap-16 lg:gap-[3rem] md:gap-8"
                    >
                      <div
            className="laravel 2xl:-mt-[3.95rem] xl:-mt-[4rem] lg:-mt-[4rem] md:-mt-8 -mt-14 h-auto mb-10 sm:mb-0"
          >
                <div
                  className="info relative xl:w-full md:w-full h-auto 2xl:py-[12.25rem] xl:py-[8.063rem] lg:py-[6.1rem] lg:px-28 md:py-[5rem] sm:pt-32 sm:pb-6 pt-32 pb-[6.20rem]"
                  // style="
                  //   background-image: url('./assets/images/secound-section/laravel.jpg');
                  //   background-repeat: no-repeat;
                  //   background-size: cover;
                  // "
                  style={{"background-image":"url('/secound-section/laravel.jpg')","background-repeat":"no-repeat","background-size":"cover"}}
                >
                  {/* <img
                  src="/header-img/logo.png"
                  alt="Tighten Logo"
                  className="logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] md:pt-0 sm:pt-[0.125rem]"
                /> */}
                  <div
                    className="absolute top-0 left-0 flex items-end bg-gradient-to-t from-black to-transperent w-full h-full"
                  >
                    <h4
                      className="absolute font-[signifier] font-[300] text-white 2xl:bottom-[2.125rem] 2xl:left-9 xl:bottom-8 xl:left-9 lg:bottom-5 lg:left-6 md:bottom-5 md:left-6 bottom-5 left-6 2xl:text-[2.25rem] 2xl:leading-[2.5rem] xl:text-[2.25rem] xl:leading-[2.5rem] md:text-3xl sm:text-[1.875rem] sm:leading-[2.25rem] text-4xl"
                    >
                      Web <p></p>
                      application
                    </h4>
                  </div>
                </div>

                <div className=" mt-3.5 sm:mt-[0.875rem] md:mt-6 lg:mt-[1.313rem] xl:mt-10 2xl:mt-9" >
                  <p className="text-[#C0C0C1] 2xl:text-lg 2xl:leading-loose lg:text[1rem] lg:leading-[1.875rem] md:text-[0.975rem] md:leading-[1.688rem] sm:text-[0.875rem] sm:leading-[1.688rem] text-[1rem] leading-[1.875rem] font-[400] px-4  sm:w-[8.6rem] md:w-[10.5rem] lg:w-[13rem] xl:w-[20rem] xl: lg:m-auto 2xl:w-[25rem] 2xl:m-auto ">
                  Geexu provides advanced web application development services. This service helps to design, build and evolve web based software. To deliver the successful projects to you, we have the experts in the field of web application. 
                  </p>
                </div>
              </div>

              <div
                className="vue-react 2xl:-mt-[3.95rem] xl:-mt-[4rem] lg:-mt-[4rem] md:-mt-8 sm:-mt-14 mt-2.5 h-auto mb-[3.1rem] sm:mb-10 md:mb-20"
              >
                <div
                  className="info relative md:w-full h-auto pt-32 pb-[6.20rem] 2xl:py-[12.25rem] xl:py-[8.063rem] lg:py-[6.1rem] lg:px-24 md:py-[5rem] sm:pt-32 sm:pb-6"
                  // style="
                  //   background-image: url('./assets/images/secound-section/vue-react.jpg');
                  //   background-repeat: no-repeat;
                  //   background-size: cover;
                  // "
                  style={{"background-image":"url('/secound-section/vue-react.jpg')","background-repeat":"no-repeat","background-size":"cover"}}
                >
                  <div
                    className="absolute top-0 left-0 flex items-end bg-gradient-to-t from-black to-transperent w-full h-full"
                  >
                    <h4
                      className="font-[signifier] text-white font-[300] absolute 2xl:bottom-[2.125rem] 2xl:left-9 xl:bottom-8 xl:left-9 lg:bottom-5 lg:left-6 md:bottom-5 md:left-6 bottom-5 left-6 2xl:text-[2.25rem] 2xl:leading-[2.5rem] xl:text-[2.25rem] xl:leading-[2.5rem] md:text-3xl sm:text-[1.875rem] sm:leading-[2.25rem] text-4xl"
                    >
                    Mobile <p></p>
                    application
                    </h4>
                  </div>
                </div>
                <div
                  className=" mt-3.5 sm:mt-[0.875rem] md:mt-6 lg:mt-[1.313rem] xl:mt-10 2xl:mt-9"
                >
                  <p
                    className="text-[#C0C0C1] 2xl:text-lg 2xl:leading-loose lg:text[1rem] lg:leading-[1.875rem] md:text-[0.975rem] md:leading-[1.688rem] sm:text-[0.875rem] sm:leading-[1.688rem] text-[1rem] leading-[1.875rem] font-[400] px-4  sm:w-[8.6rem] md:w-[10.5rem] lg:w-[13rem] xl:w-[20rem] xl: lg:m-auto 2xl:w-[25rem] 2xl:m-auto "
                  >
                  Using solid expertise in mobile apps development, our team will help you create practical and efficient experiences on any device, and allows you to get the most out of mobile technology for your organization. We build mobile applications on different platforms using top-notch technologies and proven approaches

                  </p>
                </div>
              </div>

              <div
                className="hybrid-mobile 2xl:-mt-[3.95rem] xl:-mt-[4rem] lg:-mt-[4rem] md:-mt-8 sm:-mt-14 h-auto"
              >
                <div
                  className="info relative md:w-full min-h-min 2xl:py-[12.25rem] xl:py-[8.063rem] lg:py-[6.1rem] lg:px-24 md:py-[5rem] sm:pt-32 sm:pb-6 pt-32 pb-[6.20rem]"
                  // style="
                  //   background-image: url('./assets/images/secound-section/hybrid.jpg');
                  //   background-repeat: no-repeat;
                  //   background-size: cover;
                  // "
                  style={{"background-image":"url('/secound-section/hybrid.jpg')","background-repeat":"no-repeat","background-size":"cover"}}
                >
                  <div
                    className="absolute top-0 left-0 flex items-end bg-gradient-to-t from-black to-transperent w-full h-full"
                  >
                    <h4
                      className="font-[signifier] text-white font-[300] absolute 2xl:bottom-[2.125rem] 2xl:left-9 xl:bottom-8 xl:left-9 lg:bottom-5 lg:left-6 md:bottom-5 md:left-6 bottom-5 left-6 2xl:text-[2.25rem] 2xl:leading-[2.5rem] xl:text-[2.25rem] xl:leading-[2.5rem] md:text-3xl sm:text-[1.875rem] sm:leading-[2.25rem] text-4xl"
                    >
                    Website  <p></p>development
                    </h4>
                  </div>
                </div>
                <div
                  className=" mt-3.5 sm:mt-[0.875rem] md:mt-6 lg:mt-[1.313rem] xl:mt-10 2xl:mt-9"
                >
                  <p
                    className="text-[#C0C0C1] 2xl:text-lg 2xl:leading-loose lg:text[1rem] lg:leading-[1.875rem] md:text-[0.975rem] md:leading-[1.688rem] sm:text-[0.875rem] sm:leading-[1.688rem] text-[1rem] leading-[1.875rem] font-[400] px-4  sm:w-[8.6rem] md:w-[10.5rem] lg:w-[13rem] xl:w-[20rem] xl: lg:m-auto 2xl:w-[25rem] 2xl:m-auto "
                  >
                  Geexu specializes in offering top-notch services in the area of web development. We work with important elements when developing a website for our clients. We make sure that the theme of the end

                  </p>
                </div>
              </div>
            </div>
                  <div
                    className="container mx-auto xl:mt-9 lg:mt-[4.25rem] md:mt-8 sm:mt-8 mt-[4.75rem]"
                  >
                  <h2
                      className="text-white text-4xl xl:text-[3rem] xl:leading-[3rem] lg:text-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] sm:text-[2.25rem] sm:text-[2.25rem] sm:leading-[2.5rem] font-[signifier] font-extralight mb-4 sm:mb-0"
                    >
                    Our complete list of services 
                    <br className="block sm:hidden" />
                    is available here.
                    </h2> 

                    {/* Technology Row */}
                    <div
                      className="grid sm:grid-cols-3 grid-cols-2 grid-gap-4 mt-16 sm:mt-16 2xl:mt-[4.25rem] xl:mt-[4.7rem] lg:mt-[4.2rem] md:mt-[4.5rem]"
                    >
                      <div
                        className="technology col-span-2 md:col-span-1 sm:col-span-1 lg:col-span-1"
                      >
                        <h3
                          className="text-[#65b722] font-[Pitch Sans] font-bold 2xl:text-[1.25rem] 2xl:leading-[1.75rem] xl:text-[1rem] xl:leading-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] md:text-[1rem] md:[1.5rem] sm:text-[0.875rem] sm:leading-[1.25rem] tracking-[4px] text-[0.875rem] leading-[1.25rem] sm:mb-0 mb-9"
                        >
                          TECHNOLOGIES
                        </h3>
                      </div>
                      <div
                        className="2xl:pl-10 xl:pl-10 lg:pl-14 md:pl-12 sm:-ml-10 sm:pl-0 xl:pt-0 lg:pt-1"
                      >
                        <ul>
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-[#e6e6e6] 2xl:text-[1.25rem] 2xl:leading-[1.563rem] 2xl:w-[93%] xl:w-[90%] xl:ml-6 lg:w-[96%] md:w-[95%] sm:w-[85%] w96%] 2xl:font-[400] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                          >
                            Laravel
                          </li>
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 2xl:w-[93%] xl:w-[90%] xl:ml-6 lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                          >
                            Vue.js + Nuxt
                          </li>
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 2xl:w-[93%] xl:w-[90%] xl:ml-6 lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                          >
                            React + Next.js
                          </li>
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 2xl:w-[93%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] xl:ml-6 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 pb-2"
                          >
                            JavaScript + <br className="lg:hidden md:block hidden" />
                            TypeScript
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="ml-4 2xl:pl-5 xl:pl-5 lg:pl-2 xl:pt-0 lg:pt-1">
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 md:w-[95%] lg:w-[100%] 2xl:pb-5 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                          >
                            Tailwind CSS
                          </li>
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 md:w-[95%] lg:w-[100%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                          >
                            Alpine + Livewire
                          </li>
                          <li
                            className="border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[#e6e6e6] text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] text-gray-300 md:w-[95%] lg:w-[100%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:mb-0 lg:mb-0 md:pb-4 pb-2"
                          >
                            Inertia
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Products Row */}
                    <div
                        className="grid sm:grid-cols-3 grid-cols-2 grid-gap-4 mt-10 sm:mt-24 md:mt-16 lg:mt-20 xl:mt-[5.375rem] 2xl:mt-24"
                      >
                        <div
                          className="Product col-span-2 md:col-span-1 sm:col-span-1 lg:col-span-1"
                        >
                          <h3
                            className="text-[#65b722] font-[Pitch Sans] font-bold 2xl:text-[1.25rem] 2xl:leading-[1.75rem] xl:text-[1rem] xl:leading-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] md:text-[1rem] md:[1.5rem] text-[0.875rem] leading-[1.25rem] sm:mb-0 mb-9 tracking-widest"
                          >
                            PRODUCTS
                          </h3>
                        </div>
                        <div>
                          <ul
                            className="2xl:pl-10 xl:pl-10 lg:pl-14 md:pl-12 sm:-ml-10 2xl:pt-0 xl:pt-0 lg:pt-2"
                          >
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[93%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] xl:ml-6 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Web Applications
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[93%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] xl:ml-6 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Hybrid Mobile Apps
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[93%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] xl:ml-6 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              APIs
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[93%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] xl:ml-6 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 lg:mb-0 pb-2"
                            >
                              SaaS
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul
                            className="2xl:ml-4 2xl:pl-5 xl:pl-10 lg:pl-6 lg:ml-0 md:ml-5 ml-4 2xl:pt-0 xl:pt-0 lg:pt-2"
                          >
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 text-white font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] md:w-[95%] lg:w-[100%] 2xl:w-full 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Code Audits
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 text-white font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] md:w-[95%] lg:w-[100%] 2xl:w-full 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Custom Packages
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 text-white font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] md:w-[95%] lg:w-[100%] 2xl:w-full 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              CMS Integrations
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 text-white font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] md:w-[95%] lg:w-[100%] 2xl:w-full 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 lg:mb-0 pb-2"
                            >
                              Rescues
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Displines Row */}
                      <div
                        className="grid sm:grid-cols-3 grid-cols-2 grid-gap-4 mt-[3rem] lg:mt-20 xl:mt-[5.5rem] 2xl:mt-[5.7rem]"
                      >
                        <div className="col-span-2 md:col-span-1 sm:col-span-1 lg:col-span-1">
                          <h3
                            className="text-[#65b722] font-[Pitch Sans] font-bold word-spacing-tight 2xl:text-[1.25rem] 2xl:leading-[1.75rem] xl:text-[1rem] xl:leading-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] lg:text-lg md:text-[1rem] md:leading-[1.5rem] text-[0.875rem] leading-[1.25rem] sm:mb-0 mb-9 tracking-widest"
                          >
                            DISCPLINES
                          </h3>
                        </div>

                        <div>
                          <ul className="2xl:pl-5 xl:pl-6 xl:ml-0 lg:pl-0 md:ml-3 sm:-ml-10">
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[96%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:w-[95%] md:pb-4 mb-3 pb-2"
                            >
                              Software Design + Architecture
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[96%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              UX + UI Design
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[96%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Discovery and Needs Assessment
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] 2xl:w-[96%] xl:w-[90%] lg:w-[96%] md:w-[95%] sm:w-[85%] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 md:mb-0 lg:mb-0 pb-2"
                            >
                              DevOps + Infrastructure-as-Code
                            </li>
                          </ul>
                        </div>

                        <div>
                          <ul
                            className="2xl:ml-4 2xl:pl-5 xl:pl-10 lg:pl-6 lg:ml-0 md:pl-5 ml-4"
                          >
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:pb-4 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] lg:leading-[1.438rem] text-gray-300 lg:w-[95%] 2xl:w-[98%] xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Technical Solution Evaluation
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:pb-4 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] lg:leading-[1.438rem] lg:w-[95%] 2xl:w-[98%] xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Development Process Consulting
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:pb-4 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] lg:leading-[1.438rem] lg:w-[95%] 2xl:w-[98%] xl:pb-4 lg:pb-4 md:pb-4 mb-3 pb-2"
                            >
                              Team Mentoring
                            </li>
                            <li
                              className="text-[#e6e6e6] border-b border-[#2B2B2B] border-b-2 font-mono 2xl:pb-4 2xl:text-[1.25rem] 2xl:leading-[1.563rem] text-[0.875rem] leading-[1.125rem] md:text-base lg:text-[1.125rem] lg:leading-[1.438rem] lg:leading-[1.438rem] lg:w-[95%] 2xl:w-[98%] xl:pb-4 lg:pb-4 md:pb-4 md:mb-0 lg:mb-0 pb-2"
                            >
                              Business Strategy Consulting
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>
                  
                  <div
                    className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 2xl:pt-0 2xl:pb-[10.7rem] xl:pb-[5rem] lg:pt-0 lg:pb-24 sm:pt-0 sm:pb-[5.875rem] pt-12 pb-24"
                  >
                    <div
                      className="lg:col-start-2 md:col-start-2 col-span-3 2xl:pl-[9.5rem] xl:pl-[6.8rem] lg:pl-[5.2rem] 2xl:mt-10 xl:mt-10 md:pl-14 sm:pl-[9.375rem]"
                    >
                      <div className="text-white">
                        <h5
                          className="font-[signifier] font-[100] 2xl:text-[2.25rem] 2xl:leading-[3.125rem] 2xl:font-[200] xl:text-[2.25rem] xl:leading-[3.125rem] lg:text-[1.875rem] lg:leading-[2.563rem] text-2xl md:text-3xl mb-10 2xl:mt-[3.995rem] 2xl:mb-10 xl:mt-12 lg:mt-24 sm:mt-20 md:mb-10 sm:mb-10"
                        >
                          Don’t see what you’re looking for?
                          <br className="hidden sm:block" />
                          We may still be able to assist you!
                        </h5>
                        <a
                          href="/contact"
                          className="uppercase text-sm md:text-base transition-colors duration-300 hover:bg-[#65b722] hover:text-white font-mono tracking-widest 2xl:px-8 2xl:py-3 xl:px-8 xl:py-3 py-3 px-7 border border-[#65b722] rounded-full"
                          >Send us a message 
                          </a>
                      </div>
                    </div>
                  </div>
                      
                  </div>      
                  </div>
                  {/* third container ends here */}

                  {/* fourth container starts here */}
                  <div className="bg-black text-white px-6 py-10 md:py-16 lg-py-60 lg:px-28 xl:px-28 overflow-hidden">
                  <div className="pt-16 sm:pt-16 md:pt-16 lg:pt-32 xl:pt-40  max-w-screen-2xl mx-auto">
                      
                      <div className="pb-0">
                        <h2
                          className="font-[signifier] text-[2.25rem] leading-[2.313rem] md:text-[3rem] md:leading-[3.125rem] xl:text-[4.5rem] xl:leading-[4.688rem] font-[100] 2xl:w-[70rem]"
                        >
                        Like these Geexu clients,
                          <br className="2xl:hidden xl:hidden lg:hidden md:block hidden" />
                          evolve your business with confidence.
                        </h2>
                      </div>
                      {/* try to soleve this error */}
                      {/*  */}
                      <div className="ml-[-21px] md:ml-0 mt-20 mb-8 center space-x-6 slick-slider flex">
                      <div className="cursor-pointer group">
                          <div
                            className="relative group-hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 group-hover:scale-105 duration-300"
                          >
                            <img
                              src="/slider-img/first.jpg"
                              className="w-full object-cover h-64"
                            />
                            <div className="absolute bottom-4 left-4 flex flex-wrap sm:hidden md:hidden lg:flex lg:flex-wrap lg:gap-1 hidden">
                              <a
                                href="#"
                                className="bg-[#61af21] text-[12px] text-white uppercase px-4"
                                >laravel For</a>
                              
                              <a
                                href="#"
                                className="bg-[#65b722] text-[12px] text-white uppercase px-4 lg:mx-3 mx-2"
                                >vanilla js
                              </a>
                              <a
                                href="#"
                                className="bg-[#65b722] text-[12px] text-white uppercase px-4"
                                >enterprise</a>
                              
                            </div>
                          </div>
                          <div className="sm:mt-10 mt-4">
                            <h5
                              className="lg:text-[30px] md:text[24px] sm:text-[20px] text-2xl mb-5 group-hover:text-[#65b722] font-serif"
                            >
                              Genentech + Roche
                            </h5>
                            <p
                              className="lg:text-[16px] md:text-[16px] sm::text-[16px] text-[16px] mb-4"
                            >
                              Over the past 15 years, we've partnered on a wide array of
                              groundbreaking digital projects.
                            </p>
                            <a href="#" className="uppercase text-[#65b722] font-mono"
                              >learn more <i className="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                        </div>
                      
                      {/*  */}
                      <div className="cursor-pointer group">
                      <div
                        className="relative group-hover:shadow-[0px_20px_40px_0px_rgba(159,90,253,0.1)] scale-100 group-hover:scale-105 duration-300"
                      >
                        <img
                          src="/slider-img/two.jpg"
                          className="w-full object-cover h-64"
                        />
                        <div
                          className="absolute bottom-4 left-4 flex flex-wrap sm:hidden md:hidden lg:flex lg:flex-wrap lg:gap-1 hidden"
                        >
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4"
                            >laravel</a>
                          
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4 mx-4"
                            >vue</a>
                          
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4 xl:mt-0"
                            >Technical leadership</a>
                          
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-10">
                        <h5
                          className="lg:text-[30px] md:text[24px] sm:text-[20px] text-2xl mb-5 group-hover:text-[#65b722]"
                        >
                          Sweetwtaer Sound
                        </h5>
                        <p
                          className="lg:text-[16px] md:text-[16px] sm::text-[16px] text-[16px] mb-4"
                        >
                          Our enduring partnership has helped solidify sweetwater as the
                          industry leader in music and pro audio gear.
                        </p>
                        <a href="#" className="uppercase text-[#65b722] font-mono"
                          >learn more <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                    {/*  */}
                    <div className="cursor-pointer group">
                      <div
                        className="relative group-hover:shadow-[0px_20px_30px_0px_rgba(159,90,253,0.1)] scale-100 group-hover:scale-105 duration-300"
                      >
                        <img
                          src="/slider-img/three.jpg"
                          className="w-full object-cover h-64"
                        />
                        <div
                          className="absolute md:bottom-4 bottom-10 left-4 flex flex-wrap sm:hidden md:hidden lg:flex hidden"
                        >
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4"
                            >laravel</a>
                          
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4 lg:mx-2 mx-1"
                            >react navtive
                          </a>
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4 mt-1 xl:mt-0 lg:mt-1 lg:mr-2"
                            >ux/ui design
                          </a>
                          <a
                            href="#"
                            className="bg-[#65b722] text-[12px] text-white uppercase px-4 inline-block sm:mt-1 sm:ml-1 lg:ml-0 ml-1 mt-1"
                            >statamic
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-10">
                        <h5
                          className="lg:text-[30px] md:text[24px] sm:text-[20px] text-2xl mb-5 group-hover:text-[#65b722] duration-300"
                        >
                          Chicago Botanic Garden
                        </h5>
                        <p
                          className="lg:text-[16px] md:text-[16px] sm::text-[16px] text-[16px] mb-4"
                        >
                          Tighten helped the garden give citizen scientists tools to
                          product rare species and act as stewards for our collective
                          future.
                        </p>
                        <a href="#" className="uppercase text-[#65b722] font-mono"
                          >learn more <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                    {/*  */}
                    <div className="cursor-pointer group">
                    <div
                      className="relative group-hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 group-hover:scale-105 duration-300"
                    >
                      <img
                        src="/slider-img/first.jpg"
                        className="w-full object-cover h-64"
                      />
                      <div className="absolute bottom-4 left-4 flex flex-wrap sm:hidden md:hidden lg:flex  lg:flex-wrap lg:gap-1 hidden">
                        <a
                          href="#"
                          className="bg-[#65b722] text-[12px] text-white uppercase px-4"
                          >laravel For</a>
                        
                        <a
                          href="#"
                          className="bg-[#65b722] text-[12px] text-white uppercase px-4 lg:mx-3 mx-2"
                          >vanilla js
                        </a>
                        <a
                          href="#"
                          className="bg-[#65b722] text-[12px] text-white uppercase px-4"
                          >enterprise</a>
                        
                      </div>
                    </div>
                    <div className="sm:mt-10 mt-4">
                      <h5
                        className="lg:text-[30px] md:text[24px] sm:text-[20px] text-2xl mb-5 group-hover:text-[#65b722] font-serif"
                      >
                        Genentech + Roche
                      </h5>
                      <p
                        className="lg:text-[16px] md:text-[16px] sm::text-[16px] text-[16px] mb-4"
                      >
                        Over the past 15 years, we've partnered on a wide array of
                        groundbreaking digital projects.
                      </p>
                      <a href="#" className="uppercase text-[#65b722] font-mono"
                        >learn more <i className="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  </div>
                  {/* Like these Geexu clients ends here  */}
                  {/* portfolio info button starts here */}
                  <div className=" md:px-16 lg:px-1 py-3 sm:py-10">
                      <div className="max-w-screen-2xl mx-auto">
                      <div className="flex justify-between items-center flex-wrap gap-4">

                          <div className="flex">
                              <a className="rounded-full" aria-label="See more projects" href="/work">
                              <div className="text-[10px] md:text-base box-border transition-colors duration-300 font-mono word-spacing-tight font-bold tracking-widest rounded-full py-3 px-2 uppercase leading-none
                                        hover:bg-white text-white hover:text-black bg-[#65B722] lg:py-3 lg:px-4"
                              >Portfolio information 
                              </div>
                              </a>
                          </div>

                          <div className="flex items-center swiper-navigation justify-center ml-auto" >
                               
                               <div className="swiper-scrollbar hidden sm:block sm:mr-10  bg-[#4d4d4d] rounded" x-ref="clientsScroll" xref="clientsScroll" style={{"width":"117px","background-color":"#4d4d4d"}}>
                                  <div className="swiper-scrollbar-drag" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","width":"60.5783px","-webkit-transition-duration":"0ms","transition-duration":"0ms","border":"2px solid #65b722","height":"8px","border-radius":"20px","background-color":"#65b722"}}>
                                  </div>
                              </div>

                              <div className="space-x-3 sm:space-x-5">
                                  <button className="bg-black  text-charcoal-20 border-charcoal-20
                                                        hover:bg-[#65b722] hover:text-white border hover:border-[#65b722] transition-colors rounded-full p-2 lg:p-3.5"  aria-label="Previous">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                  </button>
                                  <button className="bg-black  text-charcoal-20 border-charcoal-20
                                                      hover:bg-[#65b722] hover:text-white border hover:border-[#65b722] transition-colors rounded-full p-2 lg:p-3.5"  aria-label="Next">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                  </button>
                                </div>
                          
                          </div>

                      </div>
                      </div> 
                  </div>
                  {/* portfolio info button ends here */}

                  {/* after portfolio  */}
                  {/* partnership roles starts here */}
                  <div className="md:py-16 lg:py-24 text-white bg-black" x-data="partners">
                    <div className="max-w-screen-2xl mx-auto">

                      <div className="flex flex-wrap-reverse items-center">
                        <div className="py-8 md:py-0 md:w-1/2 xl:pr-4 2xl:pr-16">

                            <div className="hidden mb-12 font-serif text-4xl xl:block font-extralight leading-tight-1 md:text-5xl md:leading-tight-1">
                                At your service in three
                                <br className="hidden 2xl:block"/>
                                essential partnership roles.
                            </div>

                            <div className="mb-4">
                              <div className="flex flex-col w-full divide-y divide-charcoal-80 border-y border-y-[#333333] h-fit">


                              {/* button 1 starts here */}
                              <button   onClick={toggle}>
                              
                                  {/*The bottom code should toggle on and off when the button is pressed*/}
                                  {/* <div style={{
                                    display: showMe?"block":"none"
                                  }}>
                                    This should toggle my display
                                  </div> */}
                                <div className="flex text-left group"> 
                                  <div className="flex-grow pl-5 pr-3 transition-colors bg-charcoal"  >
                                        
                                  <div className="flex items-center justify-between w-full">
                                      <div className="px-4 py-8 font-mono text-xl leading-none word-spacing-tight sm:text-2xl sm:leading-none transition-colors text-[#5f6262] group-hover:text-charcoal-30 text-charcoal-60 text-white" >
                                        Technical Advising
                                      </div>
                                      {/* below code is for button syblol which we have added in web (v) */}
                                      <div className="mr-4 border rounded-full transition-colors text-[#585858] group-hover:text-[#585858] border-[#585858] group-hover:border-charcoal-30 text-charcoal-60 group-hover:text-charcoal-30 border-charcoal-60 text-charcoal-20 border-charcoal-20" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1.5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                            </svg>
                
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                      </div>
                                 </div>
                                 
                                 <div className="w-full">
                                 <div style={{
                                    display: showMe?"block":"none" }}className="text-sm leading-loose lg:text-base lg:leading-loose text-[#c0bab0]" >
                                    <div className="px-4 pb-8">
                                      We will take stock of your issues and goals,
                                      carefully assess your needs,
                                      and custom-tailor a route forward in 
                                      order for our embedded staff to accomplish the best
                                      for your organization.

                                    </div>
                                  </div>
                                  

                                 </div>


                                  </div>
                                  <div className="w-3 flex-none transition-opacity duration-200 bg-gradient-to-r from-teal-400 to-green-500 opacity-100" ></div>
                                </div>
                              </button>
                              {/* button 1 ends here */}
                              {/* button 2 starts here */}
                              <button onClick={embededTeams}>
                                  <div className="flex text-left group">
                                    <div className="flex-grow pl-5 pr-3 transition-colors bg-charcoal" >

                                      <div className="flex items-center justify-between w-full">
                                          <div className="px-4 py-8 font-mono text-xl leading-none word-spacing-tight sm:text-2xl sm:leading-none transition-colors text-[#5f6262] text-white text-charcoal-60 group-hover:text-charcoal-30" >
                                              Embedded Teams
                                          </div>
                                          {/* below code is for button syblol which we have added in web (>) */}
                                          <div className="mr-4 border rounded-full transition-colors text-[#585858] border-charcoal-20 text-charcoal-20 border-[#585858] text-charcoal-60 group-hover:text-charcoal-30 border-charcoal-60 group-hover:border-charcoal-30" >
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1.5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                                    
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                          </div>

                                          <div className="w-full">
                                              <div style={{
                                                    display: showEmbed?"block":"none" }}className="text-sm leading-loose lg:text-base lg:leading-loose text-[#c0bab0]" >
                                                <div className="px-4 pb-8">
                                                We'll be your expert development team 
                                                for as long as you need us. If you opt
                                                to form an internal team, we'll lay the
                                                framework for their success and help you 
                                                make the move as pleasant as possible.
                                                </div>
                                              </div>                               
                                          </div>

                                    </div>
                                    <div className="w-3 flex-none transition-opacity duration-200 bg-gradient-to-r from-teal-400 to-green-500  opacity-100 " >
                                  </div>
                                  </div>
                              </button>

                              {/* button 3 */}
                              <button onClick={services}>
                                <div className="flex text-left group">
                                <div className="flex-grow pl-5 pr-3 transition-colors bg-charcoal" >

                                  <div className="flex items-center justify-between w-full">
                                      <div className="px-4 py-8 font-mono text-xl leading-none word-spacing-tight sm:text-2xl sm:leading-none transition-colors text-[#5f6262] text-white text-charcoal-60 group-hover:text-charcoal-30" >
                                          Sustained Service
                                      </div>
                                      {/* below code is for button syblol which we have added in web (>) */}
                                      <div className="mr-4 border rounded-full transition-colors text-[#585858] border-charcoal-20 text-charcoal-20 border-[#585858] text-charcoal-60 group-hover:text-charcoal-30 border-charcoal-60 group-hover:border-charcoal-30" >
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                          </svg>
    
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1.5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                          </svg>
                                        </div>
                                      </div>

                                      <div className="w-full">
                                          <div style={{
                                                display: showServices?"block":"none" }}className="text-sm leading-loose lg:text-base lg:leading-loose text-[#c0bab0]" >
                                            <div className="px-4 pb-8">
                                                After our embedded team has completed their job,
                                                our sustained support team is available to provide
                                                guidance, work through a new feature, maintain your 
                                                app up to date, or resolve a problematic blog.
                                            </div>
                                          </div>                               
                                      </div>

                                  </div>
                                  <div className="w-3 flex-none transition-opacity duration-200 bg-gradient-to-r from-teal-400 to-green-500  opacity-100 " >
                                  </div>

                                </div>
                              </button>
                              {/* button 3 ends here */}
                                  
                                
                              </div>
                            </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  {/* partnership roles ends here */}
                    <br />
                    <div
                        className="flex flex-col items-center justify-center mb-12 xl:flex-row md:space-x-10 md:space-y-8 xl:space-y-0 sm:mb-0 md:mt-12 lg:mt-16"
                      >
                        <p className="hidden md:block lg:block text-[#65b722]">
                          MAKE THE MOST OF YOUR SOFTWARE. DO THE RIGHT THING FOR YOUR BUSINESS. 
                        </p>
                        <a
                          href="#"
                          className="bg-[#65b722] text-white rounded-full 2xl:px-8 2xl:py-3 py-2 px-9 px-4 2xl:mt-0 2xl:mr-72 md:mr-0 md:mt-8 sm:mr-80 sm:ml-0 hover:bg-white hover:text-black"
                          >OUR UNIQUE APPROACH
                        </a>                        
                      </div>

                  </div>              
                  </div>
                  {/* fourth container ends here */}

                  {/* fifth container starts here */}
                  <div className="container-fluid px-6 md:px-16 lg:px-28 bg-[#1A1A1A] text-white">
                    <div
                        className="container mx-auto py-36 md:py-40 lg:py-40 2xl:py-[11.80rem]"
                      >
                            <h3
                              className="font-[signifier] font-[100] italic text-[2.25rem] leading-[2.813rem] lg:text-6xl lg:leading-[4.688rem] md:text-[3.75rem] md:leading-[4.688rem]"
                            >
                            
                                "Folks at Geexu are  true
                                <br className="md:block lg:hidden xl:hidden 2xl:hidden" />
                                professionals. <br className="2xl:hidden xl:block lg:block block" />
                                They're <br className="2xl:hidden xl:hidden lg:hidden md:hidden hidden" />
                                calm under <br className="2xl:block hidden" />
                                pressure.They're <br className="2xl:hidden xl:block lg:block hidden" />
                                the <br className="2xl:hidden xl:hidden lg:hidden md:block hidden" />
                                kind
                                <br
                                  className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block hidden"
                                />
                                of people you want to  hang out 
                                <br className="2xl:block xl:block lg:block hidden" />
                                with in the event of a natural
                                <br
                                  className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block hidden"
                                />
                                disaster." <br className="lg:hidden md:block block" />
                                
                            </h3>

                            <div className="flex flex-col justify-start items-end">
                              <div className="mt-8 mr-0 md:mr-28">
                                <h4
                                  className="text-[#65b722] font-mono sm:text-left text-right font-semibold tracking-widest md:text-[0.875rem] text-[0.875rem] leading-[1.25rem]"
                                > 
                                Harish Boke
                                </h4>
                                <p
                                  className="font-mono text-[#b3b3b3] tracking-widest text-[0.875rem] leading-[1.25rem]"
                                >
                                president 
                                </p>
                              </div>
                            </div>
                    </div>
                  </div>
                  {/* fifth container ends here */}

                  {/* sixth container starts here [footer content]*/}
                  {/* <div className="bg-[#ffe7c7]">
                    <div className="flex flex-col sm:flex-row">

                    <div classNameName="lg:w-6/12 md:w-6/12 sm:w-3/5 w-full 2xl:py-72 xl:py-[12.25rem] lg:py-[9.5rem] py-[5.9rem] h-auto relative" style={{"background-image":"url('/lets-tallk/footer.jpg')","background-size":"cover"}}>
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
                                  <a className="rounded-full" aria-label="Contact us" href="/contact">
                                    <div className="text-sm md:text-base box-border transition-colors duration-300 font-mono word-spacing-tight font-bold tracking-widest rounded-full py-3 px-6 uppercase leading-none
                                        bg-[#65b722] hover:bg-white text-white hover:text-black">
                                        Drop us a line
                                    </div>
                                  </a>
                                </div>
                    
                          </div>
                      </div>

                    </div>                    
                  </div> */}
                  {/* sixth container ends here */}
                  <FooterCard/>
                  <Footer/>

      </div>
    );
  }
// import Head from 'next/head'
// import styled from 'styled-components';
// const Hero = styled.div`
//   height: 90vh;
//   display: flex;
//   justify-content: center;
//   align-items:center;
//   background:#fff;
// `;

// const Heading = styled.h1`
//   color: #000;
//   font-size:10rem;
//   font-weight:900;
// `;
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Hero>
//         <Heading>
//           Home
//         </Heading>
//       </Hero>
//     </>
//   );
// }




// import Head from 'next/head'


// export default function About() {
//     return (
//       <>
//         <Head>
//           <title>Create Next App</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
        
//         <h1>About</h1>
//       </>
//     )
//   }
  
  
 
