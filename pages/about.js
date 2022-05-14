import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';
import FooterCard from '../components/FooterCard';
import AboutCard from '../components/About/AboutCard';
import { AboutDetails } from '../components/About/AboutDetails';
import Community from '../components/About/Community';
import { CommunityDetails } from '../components/About/CommunityDetails';
import Company from '../components/About/Company';
import { CompanyDetails } from '../components/About/CompanyDetails';


export default function About() {
  return (
    <>
      <Head>
        <title>About | Geexu</title>
        
        <link rel="shortcut icon" 
              href="/header-img/favicon.png"
              type="image/x-icon"/>
         <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* <!-- Mono font link --> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Source+Serif+Pro:wght@300&display=swap"
            rel="stylesheet"
          />
          {/* <!-- mono font link end here --> */}

          {/* <!-- Serif font link --> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap"
            rel="stylesheet"
          />

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
      <div className="bg-black">
        {/* Hero section starts here */}
        <div className="container-fluid bg-black px-6 md:px-16 lg:px-28 2xl:px-0">
          <div
            className="container mx-auto bg-black sm:-mt-24 -m-20 sm:pt-36 pt-14 2xl:pb-[6.5rem] lg:pb-[5.5rem] md:pb-[3.375rem] sm:pb-[1.375rem] pb-[1.563rem] min-h-[490px] md:min-h-[877px]"
          >
          {/* <!-- Hero Section Start Here --> */}
            <div className="md:mt-[0px] box-border">
              <div
                className="main heading 2xl:mt-[8.5rem] lg:mt-[7.5rem] md:mt-[6.5rem] sm:mt-[3.1rem] mt-[7.5rem]"
              >
                <h1
                  className="font-[Signifier] xl:font-[300] 2xl:text-[20rem] 2xl:leading-[20rem] xl:text-[18rem] xl:font-[270] xl:leading-[17rem] lg:text-[14rem] lg:leading-[14rem] lg:font-[275] md:text-[12rem] md:leading-[12rem] md:font-[270] sm:text-[10rem] sm:leading-[10rem] sm:font-[270] text-[3.75rem] leading-[3.75rem] font-[230] text-white 2xl:mt-5 2xl:pb-0 xl:mt-36 lg:mt-0 xl:pb-2 lg:pb-0 lg:mb-8 md:mb-0 sm:mb-4 pb-8"
                >
                  About
                </h1>
              </div>
              <div
                className="font-[signifier] text-white font-[100] lg:text-4xl lg:leading-[3.125rem] md:text-[2.25rem] md:leading-[3.125rem] sm:text-[1.875rem] sm:leading-[2.563rem] text-[1.5rem] leading-[2.063rem] pt-0 pb-40"
              >
                <h3 className="mb-7">Yup, we develop software.</h3>
                <p
                  className="xl:pt-[0.106rem] lg:pt-[0.188rem] md:pt-[0.240rem] sm:pt-[0.195rem] lg:text-4xl lg:leading-[3.125rem] md:text-[2.25rem] md:leading-[3.125rem] sm:text-[1.875rem] sm:leading-[2.563rem] text-[1.5rem] leading-[2.063rem] leading-[2.063rem] pt-[3px]"
                >

                However, we're also here to assist everyone we come across
                  <br className="hidden lg:block" />
                  with in living a better and, more successful life.
                </p>
              </div>
            </div>
          {/* <!-- Hero Section Start Here --> */}
          </div>
        </div>
      {/* Hero section ends here */}
      {/* second contaier starts here */}
      <div className="container-fluid px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 relative bg-[#272727]">
        <div className="container mx-auto">
          <div className="max-w-screen-2xl mx-auto py-6 md:py-10">
            <div className="absolute top-0 right-0 z-0 w-1/4 origin-right scale-110 -translate-y-3 md:-translate-y-6">
              <svg aria-hidden="true" className="w-full h-full" viewBox="0 0 625 825">
                <g>
                  <path d="M824.999 412.5C824.999 640.318 640.317 825.008 412.491 825.008C184.664 825.008 -0.0175781 640.327 -0.0175781 412.5C-0.0175781 255.879 87.2596 119.636 215.862 49.7894C276.206 17.01 343.81 -0.108923 412.482 2.85354e-05C640.317 2.85354e-05 824.999 184.682 824.999 412.5Z" fill="#272727"></path>
                  <path d="M387.437 46.5863C586.421 46.5863 747.719 207.893 747.719 406.868C747.719 605.844 586.421 767.142 387.437 767.142C188.453 767.142 27.1631 605.844 27.1631 406.868C27.1631 270.073 103.399 151.08 215.715 90.0686C268.42 61.4462 327.461 46.4963 387.437 46.5863Z" fill="#295044"></path>
                  <path d="M362.382 93.1725C532.515 93.1725 670.437 231.095 670.437 401.228C670.437 571.361 532.515 709.283 362.382 709.283C192.249 709.283 54.3262 571.361 54.3262 401.228C54.3262 284.26 119.521 182.524 215.542 130.339C260.611 105.868 311.098 93.0901 362.382 93.1725Z" fill="#2d5b4f"></path>
                  <path d="M337.326 139.759C478.617 139.759 593.156 254.306 593.156 395.596C593.156 536.886 478.617 651.425 337.326 651.425C196.036 651.425 81.4971 536.886 81.4971 395.596C81.4971 298.438 135.634 213.961 215.377 170.643C252.805 150.313 294.734 139.694 337.326 139.759Z" fill="#2f665a"></path>
                  <path d="M312.271 186.353C424.719 186.353 515.874 277.508 515.874 389.956C515.874 502.404 424.752 593.567 312.271 593.567C199.791 593.567 108.66 502.412 108.66 389.956C108.644 363.213 113.9 336.73 124.126 312.02C134.353 287.31 149.35 264.858 168.261 245.948C187.171 227.038 209.624 212.042 234.334 201.816C259.045 191.59 285.529 186.336 312.271 186.353Z" fill="#347e72"></path>
                  <path d="M287.249 232.94C370.862 232.94 438.642 300.711 438.642 384.324C438.642 467.938 370.821 535.709 287.249 535.709C203.677 535.709 135.864 467.929 135.864 384.324C135.853 364.441 139.762 344.751 147.366 326.379C154.97 308.008 166.12 291.314 180.18 277.255C194.239 263.195 210.932 252.045 229.304 244.441C247.676 236.837 267.366 232.929 287.249 232.94Z" fill="#368a80"></path>
                  <path d="M262.153 279.551C286.311 279.563 309.632 288.398 327.734 304.395C345.836 320.393 357.471 342.451 360.454 366.424C363.436 390.397 357.56 414.634 343.93 434.579C330.3 454.524 309.854 468.804 286.436 474.735C263.018 480.666 238.239 477.84 216.758 466.787C195.277 455.734 178.573 437.216 169.785 414.714C160.997 392.211 160.73 367.274 169.035 344.588C177.339 321.903 193.644 303.032 214.883 291.522C229.398 283.659 245.646 279.544 262.153 279.551Z" fill="#37978f"></path>
                  <path d="M237.098 419.993C263.022 419.993 284.038 398.977 284.038 373.052C284.038 347.128 263.022 326.112 237.098 326.112C211.173 326.112 190.157 347.128 190.157 373.052C190.157 398.977 211.173 419.993 237.098 419.993Z" fill="#38a49f"></path>
                </g>
              </svg>
            </div>
            <div className="relative z-10 pb-6 font-[signifier] text-5xl text-white md:text-7xl font-[100] sm:pb-12 lg:pb-24">
              <h3>Our core values</h3>
            </div>
            <div>
              
                {AboutDetails.map((items,index)=>
                {
                  return<AboutCard{...items} key={index}/>
                }
                
                )}

              </div>     
          </div>
        </div>
      </div>
    {/* second container ends here */}
    {/* <!-- Third [This is Us] Section Start Here --> */}
    <div
      className="container-fluid bg-black text-white px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-36"
    >
      <div className="container mx-auto">
        <div className="max-w-screen-2xl mx-auto">
          <h1
            className="w-full text-7xl md:text-8xl lg:text-[10rem] font-[signifier] font-[200] 2xl:mt-0 mt-10 mb-10 md:mb-16 lg:mb-20"
          >
            This is us.
          </h1>
          <div className="flex justify-end">
            <div
              className="font-[signifier] text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-[100] w-full md:w-3/4 lg:w-2/3"
            >
              <p>
                Ankush, Trushant, Niraj, Akahay, Jaywardhan, Manju, Love, Baldev,
                Vinod, Naitik, Pooja, Girish and 18 other clever folks.
              </p>
              <div
                className="flex mt-12 space-x-6 md:space-x-10"
              >
                <div className="flex">
                  <a
                    href="/team"
                    className="font-mono 2xl:text-[1rem] 2xl:leading-[1.5rem] text-sm md:text-base text-white hover:bg-white hover:text-black duration-300 tracking-[0.125rem] font-bold tracking-widest rounded-full py-3 px-8 uppercase leading-none bg-[#65b722] box-border"
                  >
                    <span className="hidden sm:inline">Meet </span>Our Team
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="/team"
                    className="font-mono text-sm md:text-base text-white hover:bg-white hover:text-black duration-300 tracking-[0.125rem] font-bold tracking-widest rounded-full py-3 px-4 uppercase leading-none bg-[#65b722] box-border"
                  >
                    <span className=" sm:inline">COLLOBARATE WITH US</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Third [This is Us] Section End Here --> */}

    
    {/* <!-- Fouth [Community initiatives] Section Start Here --> */}
    <div
      className="container-fluid px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 bg-[#1A1A1A]"
    >
      <div className="container max-w-screen-2xl mx-auto">
        <div>
          <h1
            className="text-5xl md:text-7xl font-[signifier] font-[100] text-white mt-6 sm:mt-12 mb-12 sm:mb-16 md:mb-24"
          >
            Community initiatives
          </h1>
        </div>
        <div
          className="grid gap-12 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16"
        >         
                {CommunityDetails.map((items,index)=>
                  {
                    return<Community{...items} key={index}/>
                  }
                )}
       
        </div>
      </div>
    </div>
    {/* Community initiatives end here */}

    {/* Technology and comapany cult. starts here */}
    <div className="container-fulid bg-black -mt-74 text-white px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-28 ">
      <div className="container mt-10 mx-auto">
          
          <div className="w-full sm:w-3/4 text-4xl md:text-5xl lg:text-6xl leading-tight-2 md:leading-tight-2 lg:leading-tight-2 font-[signifier] font-extralight mb-10 sm:mb-20">
            We write, speak, and podcast on technology and company culture.
          
          </div>
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {CompanyDetails.map((items,index)=>
            {
            return<Company{...items} key={index}/>
            }
          )}

        </div>


      </div>
    </div>
    {/* Technology and comapany cult. ends here */}
    {/* <!-- Fouth [Community initiatives] Section End Here --> */}


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
  
  
 
