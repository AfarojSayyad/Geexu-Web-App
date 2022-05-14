import Head from 'next/head'
import styled from 'styled-components';
// import "aos/dist/aos.css"

import "aos/dist/aos.css"
import Footer from '../components/Footer';
import FooterCard from '../components/FooterCard';
import { MethodDetails } from '../components/Method/MethodDetails';
import MethodCard from '../components/Method/MethodCard';


export default function Method() {
  return (
    <>
      <Head>
        <title>Method | Geexu</title>
        <link rel="shortcut icon" href="/header-img/favicon.png" type="image/x-icon" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
        <link rel="stylesheet" />
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

      <div className="m-0 p-0 box-border transition-all duration-300">
        {/* <!-- Hero Section Start Here --> */}


        <div
          className="container-fluid bg-black px-6 md:px-16 lg:px-28 2xl:px-0 2xl:pb-[11.6rem] xl:pb-[11rem] lg:pb-[10.50rem] md:pb-[8.3rem sm:pb-[6.8rem] pb-[6.8rem]"
        >
          <div
            className="bg-black container mx-auto 2xl:pt-6 xl:pt-10 lg:pt-4 md:pt-10 sm:pt-12 -mt-24 pt-10"
          >
            {/* <!-- Hero Section Start Here --> */}
            <div className="mt-40 lg:mt-56 md:mt-52 sm:mt-36 mt-[9.5rem]">
              <div className="main heading">
                <h1
                  className="2xl:text-[20rem] xl:text-[18rem] xl:leading-[18rem] lg:text-[14rem] lg:leading-[14rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[3.75rem] leading-[3.75rem] text-white font-[signifier] font-[270] 2xl:pt-12 xl:pt-4 lg:pt-6 md:pt-0 mb-4"
                >
                  Method
                </h1>
              </div>
              <div>
                <p
                  className="font-[signifier] text-white font-[100] 2xl:text-[2.25rem] 2xl:leading-[3.125rem] text-2xl leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug 2xl:mt-12 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8 mt-8"
                >

                  Development that is interpersonally opinionated <br className="hidden md:block" />
                  and expertly executed.
                </p>
              </div>
            </div>
            {/* <!-- Hero Section Start Here --> */}
          </div>
        </div>
        {/* <!-- Hero Section End Here --> */}

        {/* second container start here */}
        <div className="relative overflow-hidden bg-[#1a1a1a]">
          <div>
            <svg id="gradient-triangles-[#74cae8]-to-[#73d260]" viewBox="0 0 998.39 998.39" aria-hidden="true" className="hidden sm:block absolute h-full w-full rotate-180 2xl:right-0 xl:right-5 lg:-right-12 md:-right-12 -right-16 sm:translate-x-1/2">
              <g>
                <g>
                  <polygon fill="#34d877" points="998.39 998.39 646.78 631.17 998.39 0 0 0 348.59 631.17 0 998.39 998.39 998.39"></polygon>
                  <polygon fill="#2bd686" points="63.98 63.98 362.77 613.6 63.98 934.41 934.41 934.41 633.03 613.59 934.41 63.98 63.98 63.98"></polygon>
                  <polygon fill="#28d290" points="127.96 127.96 376.95 596.02 127.96 870.43 870.43 870.43 619.28 596.01 870.43 127.96 127.96 127.96"></polygon>
                  <polygon fill="#27cd99" points="191.94 191.94 391.13 578.45 191.94 806.45 806.45 806.45 605.53 578.43 806.45 191.94 191.94 191.94"></polygon>
                  <polygon fill="#26ca9e" points="255.92 255.92 405.32 560.88 255.92 742.47 742.47 742.47 591.77 560.85 742.47 255.92 255.92 255.92"></polygon>
                  <polygon fill="#28cf95" points="319.9 319.9 419.5 543.3 319.9 678.49 678.49 678.49 578.02 543.26 678.49 319.9 319.9 319.9"></polygon>
                  <polygon fill="#27cd99" points="383.88 383.88 433.68 525.73 383.88 614.5 614.5 614.5 564.27 525.68 614.5 383.88 383.88 383.88"></polygon>
                  <rect fill="#26ca9e" x="447.86" y="447.86" width="102.66" height="102.66"></rect>
                </g>
              </g>
            </svg>
          </div>

          <div className="px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24">
            <div className="max-w-screen-2xl mx-auto">
              <div className="flex flex-col py-8 space-y-8 xl:py-16">
                <div className="font-serif text-4xl text-white font-extralight leading-tight-2 md:text-5xl md:leading-tight-2 lg:text-6xl lg:leading-tight-2 xl:text-7xl xl:leading-tight-2">
                  A manifesto two decades
                  <br className="hidden sm:block" />
                  in the making.
                </div>

                <div className="font-sans leading-loose text-[#C0C0C0] lg:text-lg xl:text-xl xl:leading-loose sm:w-3/4 lg:w-2/3 2xl:w-1/2">
                  We’ve been in web development since damn near the beginning. Along the way, we’ve formed plenty of strong opinions on how to do things right.
                </div>

                <div className="font-sans leading-loose text-[#C0C0C0] lg:text-lg xl:text-xl xl:leading-loose sm:w-3/4 lg:w-2/3 2xl:w-1/2">
                  Imagine a super-smart friend who tells you the truth no matter what, without being a jerk. That’s what we’re going for.
                </div>

                <div className="pt-2 font-mono text-sm font-bold tracking-widest uppercase word-spacing-tight lg:text-base text-[#65b722] sm:pt-6 xl:pt-10">
                  Empathetically opinionated;
                  <br className="block lg:hidden" />
                  here’s why that matters.
                </div>

                <div className="flex">
                  <a className="rounded-full" aria-label="Manifesto" href="/manifesto">
                    <div className="text-sm md:text-base box-border transition-colors duration-300 font-mono word-spacing-tight font-bold tracking-widest rounded-full py-3 px-6 uppercase leading-none
                                      bg-[#65b722] hover:bg-white text-white hover:text-black">
                      Read Our Manifesto
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* second container ends here */}

        {/* Third [how we work] container start here */}
        <div
          className="container-fluid px-6 md:px-16 md:py-16 lg:px-28 py-10 -mt-1 lg:py-24 bg-[#272727] relative overflow-hidden"
        >
          <div className="container mx-auto">
            {/* Left side info */}
            <div>
              {/* Heading title starts here */}
              <div>
                <h3
                  className="text-white font-[100] font-[signifier] xl:text-[4.5rem] xl:leading-[4.75rem] lg:text-6xl lg:leading-[4.77rem] md:text-5xl md:leading-[3.18rem] text-4xl leading-[2.385rem] z-50 xl:mt-8 lg:mt-6 mt-10"
                >
                  We have a uniqueness when it
                  <br className="hidden sm:block" />
                  comes to how we work.
                  <br className="hiiden sm:block" />
                  You'll be surprised by
                  <br className="hidden sm:block" />
                  what you find.
                </h3>
              </div>
              {/* Heading title ends here */}

              {/* sub container starts here */}
              <div
                className="w-full lg:w-3/4 xl:w-2/3 text-white flex flex-col sm:flex-row space-y-8 sm:space-y-0 2xl:space-x-0 xl:space-x-16 lg:space-x-6 md:space-x-16 sm:space-x-12 pt-12 lg:pt-20 2xl:pt-[5.25rem]"
              >
                {/* <!-- 1st Vertical Line Wrapper Start Here --> */}
                <div
                  className="w-full sm:w-4/5 space-y-6 md:space-y-8 lg:space-y-10 2xl:basis-[47%] xl:basis-[45%] lg:basis-[60%]"
                >
                  <div className="full-stack 2xl:pb-3 2xl:pt-0 xl:pt-1">
                    <h3
                      className="text-[#65b722] font-[signifier] font-[100] text-[1.5rem] leading-[1.75rem] md:text-3xl md:pb-3 sm:mb-0 mb-2"
                    >
                      Meeting
                    </h3>
                    <p
                      className="text-[#C0C0C0] font-sans lg:text-lg sm:text-base sm:leading-relaxed text-[0.875rem] leading-[1.438rem] w-[17rem]"
                    >
                      Let us know more about your company's needs and how we can assist you.
                      We will go deep inside to find perfect solutions to grow your business.

                    </p>
                  </div>

                  <div className="estimate 2xl:pb-2">
                    <h3
                      className="text-[#65b722] font-[signifier] font-[100] text-[1.5rem] leading-[1.75rem] md:text-3xl md:pb-3 sm:mb-0 mb-2"
                    >
                      Proposal
                    </h3>
                    <p
                      className="text-[#C0C0C0] font-sans lg:text-lg sm:text-base sm:leading-relaxed text-[0.875rem] leading-[1.438rem]"
                    >
                      After learning about your requirements,
                      our technical team will work together to create a proposal that meets your expectations.
                      We will consider every point you suggested while creating a proposal.
                    </p>
                  </div>

                  <div className="material">
                    <h3
                      className="text-[#65b722] font-[signifier] font-[100] text-[1.5rem] leading-[1.75rem] md:text-3xl md:pb-3 sm:mb-0 mb-2"
                    >
                      Composition
                    </h3>
                    <p
                      className="text-[#C0C0C0] font-sans lg:text-lg sm:text-base sm:leading-relaxed text-[0.875rem] leading-[1.438rem]"
                    >We'll figure out how much money and time we'll need to complete the project.
                      Our team of experts can predict the best possible consumption of money and time.

                    </p>
                  </div>

                </div>
                {/* <!-- 1st Vertical Line Wrapper End Here --> */}

                {/* <!-- 2nd Vertical Line Wrapper Start Here --> */}
                <div
                  className="w-full sm:1/2 space-y-6 md:space-y-8 lg:space-y-10 2xl:basis-[50%] xl:w-[45%] lg:basis-[50%]"
                >
                  <div className="project-time">
                    <h3
                      className="text-[#65b722] font-[signifier] font-[100] text-[1.5rem] leading-[1.75rem] md:text-3xl md:pb-3 sm:mb-0 mb-2"
                    >
                      Development
                    </h3>
                    <p
                      className="text-[#C0C0C0] font-sans lg:text-lg sm:text-base sm:leading-relaxed text-[0.875rem] leading-[1.438rem]"
                    >Our team will be able to implement suggested changes to your firm.
                      We seek to thrive, and develop through proper planning and time investment.
                    </p>
                  </div>

                  <div className="friday">
                    <h3
                      className="text-[#65b722] font-[signifier] font-[100] text-[1.5rem] leading-[1.75rem] md:text-3xl md:pb-3 sm:mb-0 mb-2"
                    >
                      Deployment
                    </h3>
                    <p
                      className="text-[#C0C0C0] font-sans lg:text-lg sm:text-base sm:leading-relaxed text-[0.875rem] leading-[1.438rem]"
                    >We prefer to consider every possibility before taking any steps,
                      Hence we follow the best practice to deploy the solution.
                    </p>
                  </div>

                  <div className="overtime">
                    <h3
                      className="text-[#65b722] font-[signifier] font-[100] text-[1.5rem] leading-[1.75rem] md:text-3xl md:pb-3 sm:mb-0 mb-2"
                    >
                      Support and monitoring
                    </h3>
                    <p
                      className="text-[#C0C0C0] font-sans lg:text-lg sm:text-base sm:leading-relaxed text-[0.875rem] leading-[1.438rem]"
                    >
                      Our team will focus on every step while finding a solution to ensure that it's fast,
                      secure, and reliable. Our working team will always be there to support at every point.

                    </p>
                  </div>
                </div>
                {/* <!-- 2nd Vertical Line Wrapper End Here --> */}
              </div>
              {/* sub container ends here */}
            </div>
            {/* Left side info ends */}

            {/* Right side info starts */}
            <div className="z-0 py-8">
              <div className="2xl:w-[520px] 2xl:h-[600px] xl:w-[480px] xl:h-[500px] lg:w-[410px] lg:h-[500px] hidden lg:block absolute right-0 top-24">
                <img className="w-full h-full" src="/method/new-geexu-bg.png" />
              </div>
            </div>
            {/* Right side info ends */}
          </div>
        </div>
        {/* Third container ends here */}

        {/* Fourth container [your service] starts here */}
        <div
          className="container-fluid bg-black w-full px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 pb-20 -mt-1"
        >
          <div className="container mx-auto max-w-screen-2xl">
            {/* <!-- Section Heading Start Here --> */}
            <div>
              <h3
                className="text-white font-[signifier] font-[100] lg:text-6xl leading-1 md:text-5xl sm:text-4xl text-3xl mt-10"
              >
                At your service in three <br className="hidden sm:block" />
                essential partnership roles.
              </h3>
            </div>
            {/* <!-- Section Heading End Here --> */}

            {/* <!-- 2nd Line Container Start Here --> */}

            <div className=" flex w-full mt-16 md:justify-between justify-center items-center">
              {/* <!-- Technical Advise Container Start Here --> */}
              {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center"  className="aos-init aos-animate"> */}
              <div data-aos="fade-left" className="aos-init aos-animate">
                <div className="fadesection 2xl:w-[400px] 2xl:h-[370px] xl:w-[250px] xl:h-[250px] lg:w-[12.625rem] lg:h-[12.563rem] md:w-[10rem] md:h-[10rem] sm:w-[10rem] sm:h-[10rem] w-[5rem] h-[5rem] bg-[#333333] aspect-auto border border-[#9B9B97] sm:border-2 border-1">

                  <div className="2xl:w-[100%] w-full h-full flex justify-center items-center">
                    <div className="w-4/5 h-4/5 flex justify-center">
                      <div className="w-10 h-full bg-[#74cae8]"></div>
                      <div className="w-10 h-full bg-[#88c8c7]"></div>
                      <div className="w-10 h-full bg-[#9cc6a6]"></div>
                      <div className="w-10 h-full bg-[#b0c485]"></div>
                      <div className="w-10 h-full bg-[#94cb70]"></div>
                      <div className="w-10 h-full bg-[#88d76f]"></div>
                      <div className="w-10 h-full bg-[#73d260]"></div>
                      <div className="w-10 h-full bg-[#27cd99]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Technical Advise Container End Here --> */}

              <div className="text-white sm:block hidden">
                <svg className="svg-inline--fa fa-arrow-right-long text-[28px]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>
              </div>

              {/* <!-- Embedded Team container start here --> */}
              <div>

                <div className="fadesectionmain 2xl:w-[26rem] 2xl:h-[28rem] xl:w-[23rem] xl:h-[24rem] lg:w-[18rem] lg:h-[20rem] md:w-[14rem] md:h-[14rem] sm:w-[13rem] sm:h-[14rem] w-[7rem] h-[8rem] bg-[#333333] aspect-auto border border-[#9B9B97] border-white sm:border-2 border-1 flex justify-center items-center">
                  <div className="w-[80%] h-full lg:w-[80%] md:w-[80%] flex justify-center items-center">
                    <div className="w-[100%] h-[85%] flex justify-center items-center">
                      <div className="w-10 h-full bg-[#74cae8]"></div>
                      <div className="w-10 h-full bg-[#88c8c7]"></div>
                      <div className="w-10 h-full bg-[#9cc6a6]"></div>
                      <div className="w-10 h-full bg-[#b0c485]"></div>
                      <div className="w-10 h-full bg-[#94cb70]"></div>
                      <div className="w-10 h-full bg-[#88d76f]"></div>
                      <div className="w-10 h-full bg-[#73d260]"></div>
                      <div className="w-10 h-full bg-[#27cd99]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Embedded Team Container End Here --> */}

              <div className="text-white sm:block hidden">
                <svg className="svg-inline--fa fa-arrow-right-long text-[28px]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>
              </div>

              {/* <!-- Sustained Service Container Start Here --> */}
              <div data-aos="fade-right" className="aos-init aos-animate">

                <div className="fadesection 2xl:w-[400px] 2xl:h-[370px] xl:w-[250px] xl:h-[250px] lg:w-[12.625rem] lg:h-[12.563rem] md:w-[10rem] md:h-[10rem] sm:w-[10rem] sm:h-[10rem] w-[5rem] h-[5rem] bg-[#333333] aspect-auto border border-[#9B9B97] sm:border-2 border-1 flex justify-center items-center">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-4/5 h-4/5 flex">
                      <div className="w-10 h-full bg-[#74cae8]"></div>
                      <div className="w-10 h-full bg-[#88c8c7]"></div>
                      <div className="w-10 h-full bg-[#9cc6a6]"></div>
                      <div className="w-10 h-full bg-[#94cb70]"></div>
                      <div className="w-10 h-full bg-[#88d76f]"></div>
                      <div className="w-10 h-full bg-[#73d260]"></div>
                      <div className="w-10 h-full bg-[#27cd99]"></div>
                      <div className="w-10 h-full bg-[#24beae]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Sustained Service Container End Here --> */}
            </div>

            <div
              className="flex md:flex-row sm:justify-between flex-col block all-info mt-14"
            >
              {MethodDetails.map((items, index)=>
                {
                  return<MethodCard {...items} key={index}/>
                }
              )}
              {/* <!-- Technical Info Here --> */}
              {/* <div className="text-white 2xl:w-[24.5rem] xl:w-[15rem] lg:w-[35rem]">
                <div>
                  <h4
                    className="text-[#65b722] font-Pitch-Sans tracking-widest 2xl:text-[1.125rem] 2xl:leading-[1.75rem] 2xl:pb-3 sm:text-[1rem] sm:leading-[1.5rem] pb-2"
                  >
                    TECHNICAL ADVISING
                  </h4>
                </div>
                <div>
                  <p
                    className="text-[#c0c0c0] 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.25rem] xl:leading-[2.125rem] lg:text-lg md:text-base md:leading-loose sm:text-[1rem] sm:leading-[1.5rem] leading-[1.875rem]"
                  >

                    We will take stock of your issues and goals,
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    carefully assess your needs,
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    and custom-tailor a route forward
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />in order for our embedded staff to
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    accomplish the best for
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />your organization.
                  </p>
                </div>
              </div> */}
              {/* <!-- Technical Info Here --> */}

              <div></div>

              {/* <!-- Embedded Team Info Here --> */}
              {/* <div
                className="2xl:w-[33rem] 2xl:px-14 xl:w-[20rem] lg:w-[60rem] md:pl-10 md:pr-18 lg:pl-0 lg:pr-0 md:my-0 my-10 "
              >
                <div>
                  <h4
                    className="text-[#65b722] font-Pitch-Sans tracking-widest 2xl:text-[1.125rem] 2xl:leading-[1.75rem] sm:text-[1rem] sm:leading-[1.5rem] pb-2"
                  >
                    EMBEDDED TEAMS
                  </h4>
                </div>
                <div>
                  <p
                    className="text-[#c0c0c0] 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.25rem] xl:leading-[2.125rem] lg:text-lg md:text-base md:leading-loose sm:text-[1rem] sm:leading-[1.5rem] leading-[1.875rem]"
                  >

                    We'll be your expert development team for
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    as long as you need us. If you
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    opt to form an internal team,
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    we'll lay the framework for their
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    sucess and help you make the move as pleasant as possible.
                  </p>
                </div>
              </div> */}
              {/* <!-- Embedded Team Info Here --> */}

              <div></div>

              {/* <!-- Sustained Info Here --> */}
              {/* <div
                className="2xl:w-[24.5rem] xl:w-[15rem] lg:w-[35rem] md:pl-0 lg:pl-0 pl-0"
              >
                <div>
                  <h4
                    className="text-[#65b722] font-Pitch-Sans tracking-widest 2xl:text-[1.125rem] 2xl:leading-[1.75rem] sm:text-[1rem] sm:leading-[1.5rem] pb-2"
                  >
                    SUSTAINED SERVICE
                  </h4>
                </div>
                <div>
                  <p
                    className="text-[#c0c0c0] 2xl:text-[1.125rem] 2xl:leading-[2.125rem] xl:text-[1.25rem] xl:leading-[2.125rem] lg:text-lg md:text-base md:leading-loose sm:text-[1rem] sm:leading-[1.5rem] leading-[1.875rem]"
                  >

                    After our embedded team has completed
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    their job, our sustained support  team
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    is available to provide guidance,
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    work through a new feature,
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    maintain your app up to date,
                    <br
                      className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                    />
                    or resolve a problematic blog.
                  </p>
                </div>
              </div> */}
              {/* <!-- Sustained Info Here --> */}
            </div>
            {/* <!-- 2nd Line Container Start Here --> */}
          </div>
        </div>
        {/* fouth container ends here */}

              

      </div>
      <FooterCard />
      <Footer />
    </>
  );
}











