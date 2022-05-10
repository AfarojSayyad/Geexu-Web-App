import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';

export default function Work() {
  return (
    <>
       <Head>
        <title>Work | Geexu</title>
        <link rel="shortcut icon" href="/header-img/favicon.png"  type="image/x-icon"/>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Mono font link */}
        <link 
              href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Source+Serif+Pro:wght@300&display=swap"
              rel="stylesheet"
        />

        {/* Mono font link end here */}

        {/* fontawsome link start here */}
        <link
           rel="stylesheet"
           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        {/* <link rel="stylesheet" href="css/style.css" /> */}
        <link rel="stylesheet"  />
        <script
           type="module"
           src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        {/* fontawsome link end here */}

        {/* <!-- AOS Animation Css Link Start Here --> */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        {/* <!-- AOS Animation Css Link End Here --> */}

        {/* <!-- Tailwind Css Script Tag Start Here --> */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* <!-- Taiwind Css Script Tag End Here --> */}

      </Head>

      {/* Hero section start here */}
      <div class="bg-black">
      <div class="container-fluid bg-black px-6 md:px-16 lg:px-28 m-1">
      <div class="bg-black container mx-auto 2xl:px-0 -mt-24 pt-20 2xl:pb-64 min-h-[615px] sm:min-h-[645px] md:min-h-[850px] lg:min-h-[825px] xl:min-h-[940px]">
        
        <div class="mt-[8.538rem] sm:mt-28 md:mt-52">
          <div class="main heading">
            <h1 class="2xl:text-[20rem] 2xl:leading-[20rem] xl:text-[18rem] xl:leading-[18rem] lg:text-[14rem] lg:leading-[14rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[3.75rem] leading-[4rem] text-white font-[signifier] font-[100]">
              Work
            </h1>
          </div>
          <div>
            <p class="font-[signifier] text-white font-[100] md:text-4xl sm:text-3xl text-[1.5rem] leading-[2.063rem] md:leading-snug sm:leading-snug lg:mt-12 mt-9 sm:pl-2">

              we look at every corner of <br class="block sm:hidden md:hidden lg:hidden lx:hidden 2xl:hidden"/>
              the details <br class="hidden sm:block lg:hidden"/>
              to help businesses <br class="hidden lg:block"/>
              like yours overcome <br class="hidden sm:block lg:hidden"/>
              obstacles to advancement.
            </p>
          </div>
        </div>        
      </div>

      </div>
      </div>
      {/* Hero section ends here */}

      {/* Second section starts here */}
      <div class="w-full mx-auto pt-5  py-5 md:py-14 lg:py-14 xl:pb-14 xl:pt-[6.5rem] xl:px-28 px-6 md:px-16 bg-zinc-900">
            <div class="flex flex-wrap justify-evenly  gap-14 md:flex-wrap lg:flex-nowrap  max-w-screen-2xl mx-auto bg-zinc-900 -mt-24 lg:-mt-40">

            {/* image 1 */}
            <div class="w-full">
              <div style={{backgroundImage : "url('/work/four.jpg')"}} className=" hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 hover:scale-105 duration-300 relative h-64 lg:h-80 xl:h-80 w-full flex items-end justify-start text-left bg-cover bg-center">
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              
                  <div class="absolute flex flex-col justify-end inset-0 p-4 sm:p-6">
                    <div class="text-white hidden sm:block flex font-serif font-light text-shadow tracking-wide text-2xl xs:text-3xl lg:text-4xl">
                      Genentech + Roche
                    </div>
                          
                    <div class="text-white hidden sm:flex flex-wrap">
                      <div class=" font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Laravel</div>
                        <div class="font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Vanilla JS</div>
                    </div>
                  </div>
              </div>
              
                <div class="leading-loose sm:leading-loose lg:leading-loose text-white mt-4 sm:mt-8 text-base sm:text-lg">
                    Over the past 15 years, we've partnered on a wide array of groundbreaking digital projects.
                </div>
                <div class="flex items-center font-mono word-spacing-tight font-bold text-xs sm:text-base text-[#65b722] uppercase tracking-widest mt-2">
                  Learn More
                  <svg class="h-4 w-6 text-[#65b722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
            </div>
            {/* image 1 ends */}

            {/* image 2 starts */}
            <div class="w-full">
              <div  style={{backgroundImage : "url('/work/three.jpg')"}} class="hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 hover:scale-105 duration-300 relative h-64 lg:h-80 xl:h-80  w-full flex items-end justify-start text-left bg-cover bg-center">
                <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                    
                <div class="absolute flex flex-col justify-end inset-0 p-4 sm:p-6">
                    <div class="text-white hidden sm:block flex font-serif font-light text-shadow tracking-wide text-2xl xs:text-3xl lg:text-4xl">              
                          Sweetwater Sound                        
                    </div>
                                            
                    <div class="text-white hidden sm:flex flex-wrap">
                        <div class=" font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Laravel</div>
                        <div class="font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Vanilla JS</div>
                    </div>
                </div>
          
              </div>
              <div class="leading-loose sm:leading-loose lg:leading-loose text-white mt-4 sm:mt-8 text-base sm:text-lg">
              
                Our enduring partnership has helped solidify Sweetwater as the industry leader in music and pro audio gear.

              </div>
              <div class="flex items-center font-mono word-spacing-tight font-bold text-xs sm:text-base text-[#65b722] uppercase tracking-widest mt-2">
                  Learn More
                  <svg class="h-4 w-6 text-[#65b722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
              </div>
          </div>
          {/* image 2 ends */}
      
        </div>
      </div>
      {/* second section ends here */}

      {/* <!-- third section starts here --> */}
   <div class=" bg-zinc-900">

    <div class="max-w-screen-2xl mx-auto flex flex-col py-5 px-5 pt-10  py-5 md:py-20 lg:py-20 lg:px-40 xl:py-20 py-20 px-6 md:px-16  ">
        <div class="font-serif font-extralight text-2xl xs:text-3xl leading-tight xl:text-4xl xl:leading-tight text-white mb-4">
          Treat people with respect, solve the correct issues, and  
          <br class="hidden xl:block"/>
          create amazing software. That's how we do things around here.
            <br class="hidden xl:block"/>
        </div>

         <div class="flex">
            <a class="rounded-full" inverted="inverted" aria-label="Our Method">
                <div class="text-sm md:text-base box-border transition-colors duration-300 font-mono word-spacing-tight font-bold tracking-widest rounded-full py-3 px-6 uppercase leading-none
                        bg-transparent text-white border border-[#65b722] hover:bg-[#65b722] hover:text-white">
                        OUR UNIQUE APPROACH
                </div>
            </a>
        </div>
    </div>

    <div class="w-full mx-auto pt-5  py-5 md:py-14 lg:py-14  xl:px-28 px-6">
        <div class="flex flex-wrap justify-evenly md-mx-1  gap-14 md:flex-wrap lg:flex-nowrap max-w-screen-2xl mx-auto ">
          <div class="w-full">
            <div style={{backgroundImage : "url('/work/three.jpg')"}}
                 class="hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 hover:scale-105 duration-300 relative h-64 lg:h-80 xl:h-80 w-full flex items-end justify-start text-left bg-cover bg-center">
              <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            
              <div class="absolute flex flex-col justify-end inset-0 p-4 sm:p-6">
                <div class="text-white hidden sm:block flex font-serif font-light text-shadow tracking-wide text-2xl xs:text-3xl lg:text-4xl">
                    Genentech + Roche
                </div>
                        
                <div class="text-white hidden sm:flex flex-wrap">
                    <div class=" font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Laravel</div>
                    <div class="font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Vanilla JS</div>
                </div>
            </div>
        
            </div>
            <div class="leading-loose sm:leading-loose lg:leading-loose text-white mt-4 sm:mt-8 text-base sm:text-lg">
                Over the past 15 years, we've partnered on a wide array of groundbreaking digital projects.
            </div>
            <div class="flex items-center font-mono word-spacing-tight font-bold text-xs sm:text-base text-[#65b722] uppercase tracking-widest mt-2">
                Learn More
                 <svg class="h-4 w-6 text-[#65b722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
          
          <div class="w-full">
            <div style={{backgroundImage:"url('/work/four.jpg')"}} class=" hover:shadow-[10px_20px_40px_0px_rgba(46,204,113,0.1)] scale-100 hover:scale-105 duration-300 relative h-64 lg:h-80 xl:h-80 w-full flex items-end justify-start text-left bg-cover bg-center">
              <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              
              <div class="absolute flex flex-col justify-end inset-0 p-4 sm:p-6">
                <div class="text-white hidden sm:block flex font-serif font-light text-shadow tracking-wide text-2xl xs:text-3xl lg:text-4xl">
                        Sweetwater Sound
                </div>
                                      
                <div class="text-white hidden sm:flex flex-wrap">
                    <div class=" font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Laravel</div>
                    <div class="font-mono word-spacing-tight font-bold text-xs uppercase bg-[#65b722] text-white mr-3 mt-3 py-1 px-3">Vanilla JS</div>
                </div>
              </div>
          
            </div>
              <div class="leading-loose sm:leading-loose lg:leading-loose text-white mt-4 sm:mt-8 text-base sm:text-lg">
                  Our enduring partnership has helped solidify Sweetwater as the industry leader in music and pro audio gear.
              </div>
              <div class="flex items-center font-mono word-spacing-tight font-bold text-xs sm:text-base text-[#65b722] uppercase tracking-widest mt-2">
                  Learn More
                  <svg class="h-4 w-6 text-[#65b722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
          </div>        
                 
        </div>
      </div>
  </div>
    {/* <!-- third Section End Here --> */}

    {/* fourth section [customer review section] starts here */}
    <div class="container-fluid px-6 md:px-16 lg:px-28  text-white  bg-zinc-900">
      <div class="container mx-auto py-36 md:py-40 lg:py-40 2xl:py-[11.80rem] ">
        <h3 class="font-[signifier] font-[100] italic text-[2.25rem] leading-[2.813rem] lg:text-6xl lg:leading-[4.688rem] md:text-[3.75rem] md:leading-[4.688rem]">
        
          "Folks at Geexu are  true
          <br class="md:block lg:hidden xl:hidden 2xl:hidden"/>
          professionals. <br class="2xl:hidden xl:block lg:block block"/>
          They're <br class="2xl:hidden xl:hidden lg:hidden md:hidden hidden"/>
          calm under <br class="2xl:block hidden"/>
          pressure.They're <br class="2xl:hidden xl:block lg:block hidden"/>
          the <br class="2xl:hidden xl:hidden lg:hidden md:block hidden"/>
          kind
          <br class="2xl:hidden xl:hidden lg:hidden md:hidden sm:block hidden"/>
          of people you want to  hang out 
          <br class="2xl:block xl:block lg:block hidden"/>
          with in the event of a natural
          <br class="2xl:hidden xl:hidden lg:hidden md:hidden sm:block hidden"/>
          disaster." <br class="lg:hidden md:block block"/>
          
        </h3>
        <div class="flex flex-col justify-start items-end">
          <div class="mt-8 mr-0 md:mr-28">
            <h4 class="text-[#65b722] font-mono sm:text-left text-right font-semibold tracking-widest md:text-[0.875rem] text-[0.875rem] leading-[1.25rem]"> 
            Harish Boke
            </h4>
            <p class="font-mono text-[#b3b3b3] tracking-widest text-[0.875rem] leading-[1.25rem]">
            president 
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterCard/>
    <Footer/>

    


      
    </>
  );
}





  
  
 
