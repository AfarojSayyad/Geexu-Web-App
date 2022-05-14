import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';
import FooterCard from '../components/FooterCard';
import TeamCard from '../components/Team/TeamCard';
import { TeamDetails } from '../components/Team/TeamDetails';

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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
      <div className="container-fluid bg-black px-6 md:px-16 lg:px-28 2xl:px-0">
          <div
            className="container mx-auto bg-black pt-0 sm:-mt-24 -m-20 sm:pt-36 pt-14 pb-28 min-h-[490px] md:min-h-[877px]"
          >
            {/* <!-- Hero Section Start Here --> */}
            <div className="md:mt-[0px] box-border">
              <div className="main heading mt-36">
                <h1
                  className="xl:text-[17rem] xl:font-[270] xl:leading-[17rem] mt-5 lg:text-[22rem] lg:leading-[22rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[4rem] leading-[4rem] text-white font-[Signifier] font-[300] sm:mb-8 sm:pb-0 pb-4"
                >
                  Team
                </h1>
              </div>
              <div
                className="text-white lg:text-4xl lg:leading-[3.125rem] text-2xl leading-normal font-[signifier] font-[100] sm:pt-2 pt-0"
              >
                <p>
                  The best development team at any agency on the planet. 
                  <br className="hidden lg:block" />
                  No, we aren't joking.
                </p>
              </div>
              <div className="mt-20">
                <a
                  href="/workWithUs"
                  className="lg:px-8 lg:py-[14px] lg:text-base sm:px-4 sm:py-3 px-5 py-2 hover:bg-white hover:text-black bg-[#65b722] uppercase text-white sm:font-semibold rounded-full font-mono tracking-widest leading-normal"
                  >COLLABORATE WITH US</a>
                
              </div>
            </div>
            {/* <!-- Hero Section Start Here --> */}
          </div>
        </div>
        {/* <!-- Hero Section End Here --> */}
        {/* second team section starts here */}
        <div className="container-fluid bg-black text-white px-6 md:px-16 lg:px-28 lg:pt-40 pt-10 pb-10 md:pb-16 lg:pb-32">
          <div className="container mx-auto">
            <div className="gap-[20px] grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            
              {TeamDetails.map((items,index)=>
                {
                  return<TeamCard {...items} key={index}/>
                }
              )}
              
              
              {/* 1 member starts here */}
              {/* <div className="relative group cursor-pointer">

                <div className="img">
                <img
                  src="/Team-Page-img/1.jpg"
                  alt="Dan Sheetz"
                  title="PARTNER + TECHNICAL DIRECTOR"
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
                    Dan <br />
                    Sheetz
                  </h4>
                  <p
                    className="uppercase text-yellow-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                  >
                    partner + MANAGING DIRECTOR
                  </p>
                </div>
              </div>

              <div className="absolute -top-96 left-96 group-hover:block group-hover:top-0 group-hover:left-0 sm:w-[93%] w-full h-full transition-top duration-1000 right-8 bg-[#FFBC00] hidden group-hover:block">
                <div className="w-4/5 mx-auto uppercase text-slate-600 font-sans text-sm py-4 overflow-hidden">
                  <h5>featured contributions</h5>
                </div>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
                  <div
                    className="border border-2 border-[#C97F09] w-4/5 mx-auto flex items-center"
                  >
                    <div
                      className="text-black text-2xl px-2 py-2 font-[100] border-r border-r-2 border-r-black"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="py-2 text-black pl-2">
                      <h5 className="font-[pitch-sans] font-semibold tracking-widest">
                        The Great Tighten Ex...
                      </h5>
                      <p className="uppercase text-xs text-gray-700">writter</p>
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
                      <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="py-2 text-black pl-2">
                      <h5 className="font-[pitch-sans] font-semibold tracking-widest">
                        Tighten Manifesto
                      </h5>
                      <p className="uppercase text-xs text-gray-700">writter</p>
                    </div>
                  </div>
                </a>
                <a href="https://tighten.com/blog/the-great-tighten-experiment/">
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
                        Filed Goal
                      </h5>
                      <p className="uppercase text-xs text-gray-700 tracking-widest">
                        contributor
                      </p>
                    </div>
                  </div>
                </a>
                <div className="mt-4 ml-8">
                  <h4
                    className="text-black text-3xl leading-tight-2 2xl:text-4xl 2xl:leading-tight-2 font-[serif] font-[100]"
                  >
                    Dan <br />
                    Sheetz
                  </h4>
                  <p
                    className="uppercase text-gray-600 font-mono font-bold tracking-[0.1rem] text-[#65b722] text-sm"
                  >
                    partner + MANAGING DIRECTOR
                  </p>
                </div>
            </div>


              </div> */}  
                               

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
  
  
 
