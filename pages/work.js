import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';

import WorkCard from '../components/Work/WorkCard';
import { QuoteDetails } from '../components/Work/QuoteDetails';
import Quote from '../components/Work/Quote';
// import { QuoteDetails } from './Work/QuoteDetails';
// import { Quote } from './Work/Quote';


export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Geexu</title>
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

      {/* Hero section start here */}
      <div className="bg-black">
        <div className="container-fluid bg-black px-6 md:px-16 lg:px-28 m-1">
          <div className="bg-black container mx-auto 2xl:px-0 -mt-24 pt-20 2xl:pb-64 min-h-[615px] sm:min-h-[645px] md:min-h-[850px] lg:min-h-[825px] xl:min-h-[940px]">

            <div className="mt-[8.538rem] sm:mt-28 md:mt-52">
              <div className="main heading">
                <h1 className="2xl:text-[20rem] 2xl:leading-[20rem] xl:text-[18rem] xl:leading-[18rem] lg:text-[14rem] lg:leading-[14rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[3.75rem] leading-[4rem] text-white font-[signifier] font-[100]">
                  Work
                </h1>
              </div>
              <div>
                <p className="font-[signifier] text-white font-[100] md:text-4xl sm:text-3xl text-[1.5rem] leading-[2.063rem] md:leading-snug sm:leading-snug lg:mt-12 mt-9 sm:pl-2">

                  we look at every corner of <br className="block sm:hidden md:hidden lg:hidden lx:hidden 2xl:hidden" />
                  the details <br className="hidden sm:block lg:hidden" />
                  to help businesses <br className="hidden lg:block" />
                  like yours overcome <br className="hidden sm:block lg:hidden" />
                  obstacles to advancement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Hero section ends here */}

      {/* Second section starts here */}
      <div className="w-full mx-auto pt-5  py-5 md:py-14 lg:py-14 xl:pb-14 xl:pt-[6.5rem] xl:px-28 px-6 md:px-16 bg-zinc-900">
        <div className="flex flex-wrap justify-evenly  gap-14 md:flex-wrap lg:flex-nowrap  max-w-screen-2xl mx-auto bg-zinc-900 -mt-24 lg:-mt-40">
           <WorkCard 
            image="/work/four.jpg"
            title="Genentech + Roche"
            label1="Laravel"
            label2="Vanilla JS"
            text="Over the past 15 years, we've partnered on a wide array of groundbreaking digital projects."
            learn="Learn More"

          />

          <WorkCard 
            image="/work/three.jpg"
            title="Sweetwater Sound"
            label1="Laravel"
            label2="Vanilla JS"
            text="Our enduring partnership has helped solidify Sweetwater as the industry leader in music and pro audio gear."
            learn="Learn More"
          />
          

        </div>
      </div>
      {/* second section ends here */}

      {/* <!-- third section starts here --> */}
      <div className=" bg-zinc-900">

        <div className="max-w-screen-2xl mx-auto flex flex-col py-5 px-5 pt-10  py-5 md:py-20 lg:py-20 lg:px-40 xl:py-20 py-20 px-6 md:px-16  ">
          <div className="font-serif font-extralight text-2xl xs:text-3xl leading-tight xl:text-4xl xl:leading-tight text-white mb-4">
            Treat people with respect, solve the correct issues, and
            <br className="hidden xl:block" />
            create amazing software. That's how we do things around here.
            <br className="hidden xl:block" />
          </div>

          <div className="flex">
            <a className="rounded-full" inverted="inverted" aria-label="Our Method">
              <div className="text-sm md:text-base box-border transition-colors duration-300 font-mono word-spacing-tight font-bold tracking-widest rounded-full py-3 px-6 uppercase leading-none
                        bg-transparent text-white border border-[#65b722] hover:bg-[#65b722] hover:text-white">
                OUR UNIQUE APPROACH
              </div>
            </a>
          </div>
        </div>
        
        

        <div className="w-full mx-auto pt-5  py-5 md:py-14 lg:py-14  xl:px-28 px-6">
          <div className="flex flex-wrap justify-evenly md-mx-1  gap-14 md:flex-wrap lg:flex-nowrap max-w-screen-2xl mx-auto ">
            <WorkCard 
            image="/work/three.jpg"
            title="Genentech + Roche"
            label1="Laravel"
            label2="Vanilla JS"
            text=" Over the past 15 years, we've partnered on a wide array of groundbreaking digital projects."
            learn="Learn More"
          />

          <WorkCard 
            image="/work/four.jpg"
            title="Sweetwater Sound"
            label1="Laravel"
            label2="Vanilla JS"
            text="Our enduring partnership has helped solidify Sweetwater as the industry leader in music and pro audio gear."
            learn="Learn More"
          />

          </div>
        </div>
      </div>
      {/* <!-- third Section End Here --> */}

      {/* fourth section [customer review section] starts here */}
      <div>
        
        {QuoteDetails.map((items,index)=>
          {
            return<Quote {...items} key={index}/>
          }
      )}

      </div>
      <FooterCard />
      <Footer />





    </>
  );
}








