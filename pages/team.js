import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';
import FooterCard from '../components/FooterCard';
const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items:center;
  background:#fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size:10rem;
  font-weight:900;
`;
export default function Team() {
  return (
    <>
      <Head>
        <title>Team | Geexu</title>
        <link rel="shortcut icon" 
              href="/header-img/favicon.png"  
              type="image/x-icon"
        />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Mono font link */}
        <link 
              href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Source+Serif+Pro:wght@300&display=swap"
              rel="stylesheet"
        />

        {/* Mono font link end here */}

        {/* <!-- Serif font link --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/style.css" />
        {/* <!-- fontawsome link Start here --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        {/* <!-- fontawsome link End here --> */}

        {/* <!-- Tailwind Css Script Tag Start Here --> */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* <!-- Taiwind Css Script Tag End Here --> */}
      </Head>
      
      {/* <!-- Hero Section Start Here --> */}
      <div class="container-fluid bg-black px-6 md:px-16 lg:px-28 2xl:px-0">
          <div
            class="container mx-auto bg-black pt-0 sm:-mt-24 -m-20 sm:pt-36 pt-14 pb-28 min-h-[490px] md:min-h-[877px]"
          >
            {/* <!-- Hero Section Start Here --> */}
            <div class="md:mt-[0px] box-border">
              <div class="main heading mt-36">
                <h1
                  class="xl:text-[17rem] xl:font-[270] xl:leading-[17rem] mt-5 lg:text-[22rem] lg:leading-[22rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[4rem] leading-[4rem] text-white font-[Signifier] font-[300] sm:mb-8 sm:pb-0 pb-4"
                >
                  Team
                </h1>
              </div>
              <div
                class="text-white lg:text-4xl lg:leading-[3.125rem] text-2xl leading-normal font-[signifier] font-[100] sm:pt-2 pt-0"
              >
                <p>
                  The best development team at any agency on the planet. 
                  <br class="hidden lg:block" />
                  No, we aren't joking.
                </p>
              </div>
              <div class="mt-20">
                <a
                  href="/workWithUs"
                  class="lg:px-8 lg:py-[14px] lg:text-base sm:px-4 sm:py-3 px-5 py-2 hover:bg-white hover:text-black bg-[#65b722] uppercase text-white sm:font-semibold rounded-full font-mono tracking-widest leading-normal"
                  >COLLABORATE WITH US</a>
                
              </div>
            </div>
            {/* <!-- Hero Section Start Here --> */}
          </div>
        </div>
        {/* <!-- Hero Section End Here --> */}
        {/* second team section starts here */}
        <div class="container-fluid bg-black text-white px-6 md:px-16 lg:px-28 lg:pt-40 pt-10 pb-10 md:pb-16 lg:pb-32">
          <div class="container mx-auto">
            <div class="gap-[20px] grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">

              {/* 1 member starts here */}
              <div class="relative group cursor-pointer">

                <div class="img">
                <img
                  src="/Team-Page-img/1.jpg"
                  alt="Dan Sheetz"
                  title="PARTNER + TECHNICAL DIRECTOR"
                  class="sm:w-11/12 w-full grayscale hover:grayscale-0 cursor-pointer"
                />
              </div>

              <div class="info">
                <div class="flex justify-end mr-14 absolute top-4 right-0">
                  <img
                    src="/header-img/favicon.png"
                    alt="favicon img"
                    class="w-8"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
                >
                  <h4
                    class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                  >
                    Dan <br />
                    Sheetz
                  </h4>
                  <p
                    class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                  >
                    partner + MANAGING DIRECTOR
                  </p>
                </div>
              </div>

              <div class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 sm:w-[93%] w-full h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block">
                <div class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden">
                  <h5>featured contributions</h5>
                </div>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                  >
                    <div
                      class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div class="py-2 text-black pl-2">
                      <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                        The Great Tighten Ex...
                      </h5>
                      <p class="uppercase text-xs text-gray-700">writter</p>
                    </div>
                  </div>
                </a>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                  >
                    <div
                      class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div class="py-2 text-black pl-2">
                      <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                        Tighten Manifesto
                      </h5>
                      <p class="uppercase text-xs text-gray-700">writter</p>
                    </div>
                  </div>
                </a>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                  >
                    <div
                      class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                      <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="py-2 text-black pl-2">
                      <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                        Filed Goal
                      </h5>
                      <p class="uppercase text-xs text-gray-700 tracking-widest">
                        contributor
                      </p>
                    </div>
                  </div>
                </a>
                <div class="mt-4 ml-8">
                  <h4
                    class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100]"
                  >
                    Dan <br />
                    Sheetz
                  </h4>
                  <p
                    class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                  >
                    partner + MANAGING DIRECTOR
                  </p>
                </div>
            </div>

              </div>
              {/* 1 member ends here */}
              {/* 2 member starts here */}
              <div class="relative group cursor-pointer">
                <div class="img">
                  <img
                    src="/Team-Page-img/2.jpg"
                    alt="Dan Sheetz"
                    title="PARTNER + TECHNICAL DIRECTOR"
                    class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
                  />
                </div>
                <div class="info">
                  <div class="flex justify-end mr-14 absolute top-4 right-0">
                    <img
                      src="/header-img/favicon.png"
                      alt="favicon img"
                      class="w-8"
                    />
                  </div>
                  <div
                    class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
                  >
                    <h4
                      class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                    >
                      Matt <br />
                      Stauffer
                    </h4>
                    <p
                      class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                    >
                      partner + TECHNICAL DIRECTOR
                    </p>
                  </div>
                </div>
                
                <div
                  class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
                >
                  <div
                    class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
                  >
                    <h5>featured contributions</h5>
                  </div>
                  <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                    <div
                      class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                    >
                      <div
                        class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div class="py-2 text-black pl-2">
                        <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                          The Great Tighten Ex...
                        </h5>
                        <p class="uppercase text-xs text-gray-700">writter</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                    <div
                      class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                    >
                      <div
                        class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div class="py-2 text-black pl-2">
                        <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                          Tighten Manifesto
                        </h5>
                        <p class="uppercase text-xs text-gray-700">writter</p>
                      </div>
                    </div>
                  </a>
                  <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                    <div
                      class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                    >
                      <div
                        class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                      >
                        <i class="fa-solid fa-bars"></i>
                      </div>
                      <div class="py-2 text-black pl-2">
                        <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                          Filed Goal
                        </h5>
                        <p class="uppercase text-xs text-gray-700 tracking-widest">
                          contributor
                        </p>
                      </div>
                    </div>
                  </a>
                  <div class="mt-4 ml-8">
                    <h4
                      class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100]"
                    >
                      Matt <br />
                      Stauffer
                    </h4>
                    <p
                      class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                    >
                      partner + TECHNICAL DIRECTOR
                    </p>
                  </div>
                </div>
          </div>
          {/* 2 ends here */}
          {/* 3 starts here */}
          <div class="relative group cursor-pointer">
            <div class="img">
              <img
                src="/Team-Page-img/3.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Alison <br />
                  Krik
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Alison <br />
                  Kirk
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* 3 ends here */}
          {/* 4 starts here */}
          <div class="relative group cursor-pointer 2xl:mt-0 mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/4.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Andrew <br />
                  Morgen
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Andrew <br />
                  Morgan
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
          </div>
          {/* 4 ends here */}
          {/* <!-- 5 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/5.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Anna <br />
                  Youngyeun
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Apprentice Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Anna <br />
                  Youngyeun
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Apprentice Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 5 Member end -->

          <!-- 6 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/6.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Anna <br />
                  Shevlin
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Operation Coordinatior
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Anna <br />
                  Shevlin
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Operation Coordinatior
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 6 Member end --> */}

          {/* <!-- 7 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/7.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Anthony <br />
                  Clark
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Anthony <br />
                  Clark
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 7 Member end --> */}

          {/* <!-- 8 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/8.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Cenitoria <br />
                  Melton
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Cenitoria <br />
                  Melton
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 8 Member end --> */}

          {/* <!-- 9 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/9.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Chirs <br />
                  Trombley
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Chris <br />
                  Trombley
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 9 Member end --> */}

          {/* <!-- 10 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/10.jpg"
                alt="Dan Sheetz"
                title="PARTNER + TECHNICAL DIRECTOR"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Dave <br />
                  Hicking
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Head of Client Service
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Dave <br />
                  Hicking
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Head of Client Service
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 10 Member end --> */}

          {/* <!-- 11 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/11.jpg"
                alt="Jacob Baker-Kretzmer"
                title="Lead Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Jacob <br />
                  Baker-Kretzmer
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Jacob <br />
                  Baker-Kretzmer
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Lead Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 11 Member end --> */}

          {/* <!-- 12 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/12.jpg"
                alt="Jack Bathman"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Jack <br />
                  Bathman
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Jack <br />
                  Bathman
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 12 Member end --> */}

          {/* <!-- 13 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/13.jpg"
                alt="Jamison"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Jamison <br />
                  valenta
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Jamison <br />
                  valenta
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 13 Member end --> */}

          {/* <!-- 14 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/14.jpg"
                alt="Jeanne"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Jeanne <br />
                  Henry
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Senior Project Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Jeanne <br />
                  Henry
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Senior Project Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 14 Member end --> */}

          {/* <!-- 15 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/15.jpg"
                alt="Jeanne"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  John <br />
                  Bonaccorsi
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  John <br />Bonaccorsi
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Lead Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 15 Member end --> */}

          {/* <!-- 16 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/16.jpg"
                alt="Jeanne"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Keith <br />
                  Damiani
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Principal Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Keith <br />Damiani
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Principal Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 16 Member end --> */}

          {/* <!-- 17 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/17.jpg"
                alt="Jeanne"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Kristin <br />
                  Collins
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Kristin <br />Collins
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Lead Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 17 Member end --> */}

          {/* <!-- 17 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/18.jpg"
                alt="Jeanne"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Marcus <br />
                  Moore
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Marcus <br />Moore
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 18 Member end --> */}

          {/* <!-- 19 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/19.jpg"
                alt="Marcy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Marcus <br />
                  Moore
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Associate Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Marcy <br />Acevedo
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Associate Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 19 Member end --> */}

          {/* <!-- 20 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/20.jpg"
                alt="Marcy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Marje <br />
                  Holmstrom-Sabo
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Associate Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Marje <br />Holmstrom-Sabo
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Operation + Content Manager
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 20 Member end --> */}

          {/* <!-- 21 Member end --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/21.jpg"
                alt="Marcy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Nathan <br />
                  Morgen
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Nathan <br />
                  Morgen
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 21 Member end -->

          <!-- 22 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/22.jpg"
                alt="Marcy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Nohemi <br />
                  Olvera
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Designer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Nohemi <br />Olvera
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  designer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 22 Member end -->

          <!-- 23 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/23.jpg"
                alt="Marcy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Rissa <br />
                  Jackson
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Apprentice Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Rissa <br />Jackson
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Apprentice Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 23 Member end -->

          <!-- 24 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/24.jpg"
                alt="Marcy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Sara <br />
                  Bine
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Sara <br />Bine
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Lead Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 24 Member end -->

          <!-- 25 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/25.jpg"
                alt="Shawn"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Shawn <br />
                  Jones
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Shawn <br />Jones
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 25 Member end -->

          <!-- 26 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/26.jpg"
                alt="Tammy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Tammy <br />
                  Robinson
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Lead Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Tammy <br />Robinson
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Lead Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 26 Member end -->

          <!-- 27 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/27.jpg"
                alt="Tammy"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Tony <br />
                  Messias
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Tony <br />Messias
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 27 Member end -->

          <!-- 27 Member start --> */}
          <div class="relative group cursor-pointer mt-8">
            <div class="img">
              <img
                src="/Team-Page-img/28.jpg"
                alt="Zuzana"
                title="Programer"
                class="w-[100%] grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
            <div class="info">
              <div class="flex justify-end mr-14 absolute top-4 right-0">
                <img
                  src="/header-img/favicon.png"
                  alt="favicon img"
                  class="w-8"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pl-8 pb-6 bg-gradient-to-t from-black to-transperent"
              >
                <h4
                  class="text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] mb-2"
                >
                  Zuzana <br />
                  Kunckova
                </h4>
                <p
                  class="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                >
                  Programer
                </p>
              </div>
            </div>
            <div
              class="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 w-[100%] h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block"
            >
              <div
                class="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden"
              >
                <h5>featured contributions</h5>
              </div>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      Nova Stripe
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>
              <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                <div
                  class="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center my-4"
                >
                  <div
                    class="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                  >
                    <i class="fa-brands fa-github"></i>
                  </div>
                  <div class="py-2 text-black pl-2">
                    <h5 class="font-[pitch-sans] font-semibold tracking-widest">
                      PHP Release
                    </h5>
                    <p class="uppercase text-xs text-gray-700">contributor</p>
                  </div>
                </div>
              </a>

              <div class="mt-1 ml-8">
                <h4
                  class="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100] pb-2"
                >
                  Zuzana <br />Kunckova
                </h4>
                <p
                  class="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm tracking-widest"
                >
                  Programer
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 28 Member end --> */}           



          </div>
          </div>
        </div>
        <FooterCard/>
        <Footer/>



    </>
  );
}




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
  
  
 
