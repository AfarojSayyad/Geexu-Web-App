import Head from 'next/head'
import styled from 'styled-components';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';
import { BlogDetails } from '../components/Blog/BlogDetails';
import BlogCard from '../components/Blog/BlogCard';

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
export default function Blog() {
  return (
    <>
    <Head>
        <title>Blog | Geexu</title>
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

        {/* <!-- noto sans font link start here --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        {/* <!-- noto sans font link end here -->
        <!-- Serif font link --> */}
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

      <div className="bg-black ">
        {/* hero section starts here */}
        <div className="px-6 md:px-16 lg:px-28 py-24 text-white bg-black md:py-32 lg:py-36 xl:py-40 ">
          <div className="max-w-screen-2xl mx-auto flex flex-col  xl:flex-row xl:items-end lg:justify-start xl:gap-2 lg:flex-col  lg:gap-[3.5rem] xl:gap-[3.8rem] 2xl:justify-between " >
            
          <div>

            <h1 className="2xl:text-[20rem] xl:text-[18rem] xl:font-[270] xl:leading-[17rem] lg:text-[14rem] lg:leading-[14rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[3.75rem] leading-[4rem] text-white font-[Signifier] font-[270] 2xl:mt-6 2xl:pl-0 xl:mt-2 xl:pl-0 lg:pl-8 lg:mt-1 md:mt-0 mb-4 sm:pb-0 pb-3 mt-5">
              Blog
            </h1>
          </div>

            <div className=" flex flex-col items-start justify-end 2xl:pt-[14.5rem] xl:pt-[12.5rem] lg:pt-4 lg:mt-10 md:pt-10 sm:pt-10 pt-7 lg:flex lg:flex-col lg:items-baseline xl:justify-end" style={{}}>
              <div className="2xl:ml-[1.3rem] 2xl:mr-[21.5rem] 2xl:pb-0 lg:mr-0 lg:ml-[2.3rem] lg:pb-0 md:pb-0 sm:pb-0 pb-3 ml-4">
                  <p className="font-[monospace] text-[#808080] 2xl:text-[0.75rem] 2xl:leading-[0.875rem] xl:text-[0.875rem] xl:leading-[0.875rem] xl:tracking-[3px] lg:text-[0.875rem] lg:leading-[0.875rem] text-[.75rem] fond-bold uppercase tracking-[2px]">
                    SIGN UP FOR BLOG UPDATES
                  </p>
              </div>
              <div className="form sm:flex xl:justify-start w-full block items-center sm:ml-0 md:ml-0 lg:ml-0 sm:h-20 h-10 pr-0  xl:w-full" style={{}}>
                <div className="w-2 h-auto"></div>
                  <div className="2xl:w-[28rem] 2xl:mt-0 xl:w-[25rem] xl:-mr-[0.375rem] lg:w-[47%] md:w-[70%] sm:w-[75%] w-[17rem] xl:ml-[0.375rem] xl:mt-0.5 lg:ml-7 lg:-mt-1 md:ml-0 sm:ml-0 xl:pr-2">
                    <input type="email" name="email" placeholder="Your email address" className="bg-[#1A1A1A] 2xl:py-[0.938rem] xl:py-[0.938rem] sm:py-3 pl-6 py-3 xl:-mt-[0.25rem] 2xl:mt-1 tracking-widest text-sm rounded-full w-full "/>
                  </div>
                  <div className="mt-7 sm:mt-0 lg:-mt-2 sm:ml-2 2xl:-mr-0 xl:-mr-[4.7rem] xl:mt-[0.063rem] sm:flex sm:flex-col" style={{}}>
                    <a href="https://tighten.us12.list-manage.com/subscribe/post?u=3abde72ee6ba4dd39cc01bb63&amp;id=24d7253932" className="uppercase font-mono tracking-widest 2xl:py-3.5 2xl:ml-0 xl:ml-0 xl:py-3.5 sm:px-7 sm:w-[9rem] lg:w-[5rem] sm:ml-4 px-7 py-3 text-white border border-[#65b722] leading-normal rounded-full text-[0.85rem] 2xl:text-[1rem] 2xl:leading-[1.5rem] xl:text-[1rem] xl:leading-[1.5rem] lg:text-[0.875rem] hover:bg-[#65b722]      hover:text-white font-semibold" style={{'width': "9rem"}}>Sign up</a>
                  </div>
              </div>
            </div>          

          </div>
        </div>
        {/* hero section ends here */}

        {/* <!-- Third [Blog] Section Start Here --> */}
        <div className="px-6 md:px-16 lg:px-28 py-0 mt-12 sm:-mt-6">
          <div className="max-w-screen-2xl mx-auto pb-4">
            <div className="w-full py-8 group hover:cursor-pointer sm:py-20 lg:pt-0 lg:pb-20">
              <div className="flex flex-col items-start justify-start lg:flex-row xl:items-end lg:space-x-2 lg:space-x-6">

                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <a href="https://tighten.com/blog/learning-laravel-developer-tools" className="relative block w-full aspect-w-1 aspect-h-1 h-72 sm:w-72 sm:h-72 lg:mb-2 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[352px] lg:h-[352px] mt-2.5 xl:mt-0">
                      <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" data-bg="https://tighten.com/assets/images/blog/learning-laravel-preview.png" style={{"background-image":"url(\"https://tighten.com/assets/images/blog/learning-laravel-preview.png\")"}}>
                            <div className="absolute bottom-0 left-0 p-6 lg:bottom-auto lg:top-0">
                                <div className="inline-block bg-yellow font-sans text-black uppercase tracking-widest py-1.5 px-3 text-xs font-bold shadow">
                                    New
                                </div>
                            </div>
                        </div>
                    </a>
                  </div>
          
                  <div className="pt-6 pl-0 sm:pt-12 lg:pt-0 lg:pl-6">
                      <div className="font-serif text-4xl transition-colors duration-300 font-extralight leding-tight-4 md:text-5xl md:leading-tight-4 2xl:text-6xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]">
                          <a href="https://tighten.com/blog/learning-laravel-developer-tools">Learning Laravel</a>
                      </div>
          
                      <div className="flex flex-col my-5 space-y-2 text-[#808080] ">
                        <div className="flex flex-col space-y-2 pr-2">
                          <div className="flex items-center space-x-3">
                            <a href="/authors/kristin-collins">
                                <img alt="Photo of Kristin Collins" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/hero-blog-img.jpg"/>
                            </a>
                
                            <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/Blog-Page-img/hero-blog-img.jpg">Kristin Collins</a>
                          </div>
                        </div>
          
      
                        <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]   pt-0.5">
                          <div><time dateTime="2022-03-01">Mar 1</time></div>
      
      
                          <div>5 minute read</div>
      
                        </div>
                      </div>
        
                      <a href="https://tighten.com/blog/learning-laravel-developer-tools" className="text-base leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-lg md:leading-relaxed xl:text-xl xl:leading-relaxed">
                                            This is a series designed to show off various features of Laravel in fun, easily consumable projects. We’ll be keeping track of the entire series in a public GitHub repo and including the instructions for keeping your own project up to date with ours.
                      </a>
                    </div>
              </div>
            </div>
          </div>
        </div>
    {/* <!-- Third [Blog] Section End Here --> */}
        {/* fourth container starts here */}
        <div className="px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 bg-[#1a1a1a]">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col space-y-16 md:space-y-20">
              {BlogDetails.map((items,index)=>
                {
                  return<BlogCard {...items} key={index}/>
                }
              )}
                         



            </div>
            
          </div>
        </div>
        {/* fourth container ends here */}
        

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
  
  
 
