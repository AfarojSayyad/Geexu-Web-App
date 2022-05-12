import Head from 'next/head'
import styled from 'styled-components';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';
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

              {/* 1 starts */}
              <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">

                  <div className="flex-shrink-0">
                    <a href="https://tighten.com/blog/react-hooks-for-beginners-managing-state">
                        <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                data-bg="https://tighten.com/assets/images/blog/react-hooks-for-beginners-managing-state-preview-image.png" 
                                style={{ 'background':'url("https://tighten.com/assets/images/blog/react-hooks-for-beginners-managing-state-preview-image.png") ' ,
                                        'width': "100%",
                                        'height':"[HEIGHT OF THE IMAGE]",
                                        'backgroundRepeat': "no-repeat",
                                        'backgroundSize': "cover"
                                }}>

                            </div>
                            
                        </div>
                    </a>
                  </div>


                  <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                    <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                        <a href="https://tighten.com/blog/react-hooks-for-beginners-managing-state">React Hooks for Beginners: Managing State</a>
                    </div>
  
                    <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                      <div className="flex flex-col space-y-2 pr-2">
                        <div className="flex items-center space-x-3">
                          <div className="flex -space-x-1">
                            <a href="/authors/daniel-coulbourne">
                              <img alt="Photo of Daniel Coulbourne" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/blog-3.jpg"/>
                            </a>
                            <a href="/authors/cenitoria-melton">
                              <img alt="Photo of Cenitoria Melton" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/blog-1-img-1.jpg"/>
                            </a>
                          </div>
  
                          <div>
                            <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/daniel-coulbourne">Daniel Coulbourne</a>,&nbsp;                                    <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/cenitoria-melton">Cenitoria Melton</a>                            </div>
                        </div>
                      </div>
   
  
                      <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                          <div><time dateTime="2022-02-04">Feb 4</time></div>
      
      
                          <div>6 minute read</div>
      
                      </div>
                   </div>
  
                    <a href="https://tighten.com/blog/react-hooks-for-beginners-managing-state" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                      We’ve been using React at Tighten for almost as long as we’ve been using Vue. In fact, one of our most-read blog post series is an extensive React tutorial by former...
                    </a>
                 </div>

                </div>
              </div>
              {/* 1 ends */}

              {/* <!-- 2 starts --> */}
              <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/how-to-train-your-keyboard">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" data-bg="https://tighten.com/assets/images/blog/how-to-train-your-keyboard-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/how-to-train-your-keyboard-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
               <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                  <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                    <a href="https://tighten.com/blog/how-to-train-your-keyboard">How to Train Your Keyboard</a>
                  </div>
  
                  <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                      <div className="flex flex-col space-y-2 pr-2">
                        <div className="flex items-center space-x-3">
                            <a href="/authors/andrew-morgan">
                                <img alt="Photo of Andrew Morgan" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/andrew.jpg"/>
                            </a>
                
                            <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/andrew-morgan">Andrew Morgan</a>
                        </div>
                      </div>
        
        
                        <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                            <div><time dateTime="2021-12-17">Dec 17, 2021</time></div>
        
        
                            <div>34 minute read</div>
        
                        </div>
                  </div>
  
                      <a href="https://tighten.com/blog/how-to-train-your-keyboard" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                      If you’re reading this, odds are you work on a computer. You likely use a combination of your mouse and keyboard to interact with your computer throughout the day. But you're probably also aware that most of the apps you use on a daily basis provide...
                      </a>
                  </div>
                </div>
              </div>
          {/* 2 ends here */}
           {/* 3 starts from here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/flying-solo-my-experience-as-the-only-designer-at-a-programming-agency">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" data-bg="https://tighten.com/assets/images/blog/flying-solo-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/flying-solo-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                          <a href="https://tighten.com/blog/flying-solo-my-experience-as-the-only-designer-at-a-programming-agency">Flying Solo</a>
                        </div>
        
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                  <a href="/authors/nohemi-olvera">
                                      <img alt="Photo of Nohemi Olvera" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/nohemi.jpg"/>
                                  </a>
                      
                                  <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/andrew-morgan">Nohemi Olvera</a>
                              </div>
                            </div>
              
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2021-10-27">Oct 27, 2021</time></div>
            
            
                                <div>3 minute read</div>
        
                            </div>
                        </div>
  
                        <a href="https://tighten.com/blog/flying-solo-my-experience-as-the-only-designer-at-a-programming-agency" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed" >
                            Over the last eight years I’ve worked as a designer in many different contexts: non-profits, startups, corporations, and more. I joined Tighten in 2018 as the company’s first full-time designer. Having the opportunity and freedom to develop a...
                        </a>
                      </div>
                 </div>
            </div>
           {/* 3 ends here */}
           {/* 4 starts here */}
           <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/a-project-managers-top-tips-for-digital-project-management-success">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" data-bg="https://tighten.com/assets/images/blog/a-project-managers-top-tips-for-digital-project-management-success-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/a-project-managers-top-tips-for-digital-project-management-success-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                          <a href="https://tighten.com/blog/a-project-managers-top-tips-for-digital-project-management-success">A Project Manager’s Top Tips</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                          <div className="flex flex-col space-y-2 pr-2">
                            <div className="flex items-center space-x-3">
                              <a href="/authors/jeanne-henry">
                                <img alt="Photo of Jeanne Henry" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/jeanne.jpg"/>
                              </a>
  
                              <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/jeanne-henry">Jeanne Henry</a>
                            </div>
                          </div>
   
  
                          <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                           <div><time dateTime="2021-09-20">Sep 20, 2021</time></div>
   
  
                           <div>8 minute read</div>
   
                          </div>
                       </div>
  
                        <a href="https://tighten.com/blog/a-project-managers-top-tips-for-digital-project-management-success" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                            Just as each workday is a little different, the same can be said about digital projects. Some digital projects are big and require large teams, months of collaboration, and brand new everything to bring them from beginning to end. Some come and go in...
                        </a>
                    </div>
                 </div>
            </div>
            {/* 4 ends here */}
            {/* 5 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/working-through-a-pandemic">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" data-bg="https://tighten.com/assets/images/blog/working-through-a-pandemic-thumbnail.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/working-through-a-pandemic-thumbnail.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                          <a href="https://tighten.com/blog/working-through-a-pandemic">Working Through A Pandemic</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                          <div className="flex flex-col space-y-2 pr-2">
                            <div className="flex items-center space-x-3">
                              <a href="/authors/marje-nitz">
                                <img alt="Photo of Jeanne Henry" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/marje.jpg"/>
                              </a>
  
                              <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/marje-nitz">Marje Holmstrom-Sabo</a>
                            </div>
                          </div>
   
  
                          <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                           <div><time dateTime="2021-09-20">May 6, 2021</time></div>
   
  
                           <div>5 minute read</div>
   
                          </div>
                       </div>
  
                        <a href="https://tighten.com/blog/working-through-a-pandemic" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                          At this point, I think the world is in agreement that global pandemics are terrible.  Even with the advantages of already working as a fully remote company, folks at Tighten still struggle with the realities of working through isolation, finding...
                        </a>
                    </div>
                 </div>
            </div>
            {/* 5 ends here */}
            {/* 6 starts from here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/improving-google-maps-performance-on-large-datasets">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" data-bg="https://tighten.com/assets/images/blog/improving-google-maps-performance-on-large-datasets-thumbnail.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/improving-google-maps-performance-on-large-datasets-thumbnail.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                          <a href="https://tighten.com/blog/improving-google-maps-performance-on-large-datasets">Improving Google Maps Performance on Large Datasets</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                          <div className="flex flex-col space-y-2 pr-2">
                            <div className="flex items-center space-x-3">
                              <a href="/authors/tammy-robinson">
                                <img alt="Photo of Tammy Robinson" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/tammy.jpg"/>
                              </a>
  
                              <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/tammy-robinson">Tammy Robinson</a>
                            </div>
                          </div>
   
  
                          <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                           <div><time dateTime="2021-09-20">May 15, 2021</time></div>
   
  
                           <div>9 minute read</div>
   
                          </div>
                       </div>
  
                        <a href="https://tighten.com/blog/improving-google-maps-performance-on-large-datasets" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                        If you've ever built an app that plots data on a map, you've probably noticed that performance tends to slow down as your dataset grows larger. Zooming out too far causes thousands of map markers to display, slowing your map to a crawl, or perhaps...
                        </a>
                    </div>
                 </div>
            </div>
            {/* 6 ends here */}
            {/* 7 starts form here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/full-text-search-with-meilisearch-and-scout">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/full-text-search-with-meilisearch-preview-image.jpg" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/full-text-search-with-meilisearch-preview-image.jpg")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                          <a href="https://tighten.com/blog/full-text-search-with-meilisearch-and-scout">Full-Text Search with MeiliSearch and Laravel Scout</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                          <div className="flex flex-col space-y-2 pr-2">
                            <div className="flex items-center space-x-3">
                              <a href="/authors/jose-soto">
                                <img alt="Photo of Jose Soto" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/jose.jpg"/>
                              </a>
  
                              <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/jose-soto">Jose Soto</a>
                            </div>
                          </div>
   
  
                          <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                           <div><time dateTime="2021-09-20">Feb 1, 2021</time></div>
   
  
                           <div>2 minute read</div>
   
                          </div>
                       </div>
  
                        <a href="https://tighten.com/blog/full-text-search-with-meilisearch-and-scout" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                          Learn how to add full-text search to your Eloquent models using the free, self-hosted search engine MeiliSearch and Laravel Scout.
                        </a>
                    </div>
                 </div>
            </div>
            {/* 7 ends here */}
            {/* 8 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/2020-reasons-for-gratitude">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/2020-reasons-for-gratitude-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/2020-reasons-for-gratitude-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/2020-reasons-for-gratitude">Reasons for Gratitude</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/marje-nitz">
                                    <img alt="Photo of Marje Holmstrom-Sabo" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/marje.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/marje-nitz">Marje Holmstrom-Sabo</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Dec 22, 2020</time></div>
            
            
                                <div>2 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/2020-reasons-for-gratitude" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                      2020 has been described as many things–unprecedented, a year like no other, a dumpster fire, a train wreck.  It has indeed been a challenging year, for many reasons.
                                      Rather than rehashing those challenges, I asked my favorite team to share some of...
                              </a>
                    </div>
                 </div>
            </div>
            {/* 8 ends here */}
            {/* 9 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/laracon-scholarship-program">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/laracon-scholarship-program-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/laracon-scholarship-program-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/laracon-scholarship-program">The Laravel Community Gathers to Provide Conference Scholarships</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/marje-nitz">
                                    <img alt="Photo of Marje Holmstrom-Sabo" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/marje.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/marje-nitz">Marje Holmstrom-Sabo</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Sep 24, 2020</time></div>
            
            
                                <div>3 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/laracon-scholarship-program" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                 Late last year, Tighten founders Matt Stauffer and Dan Sheetz were planning how they could contribute positively to the Laravel community.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 9 ends here */}
            {/* 10 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/the-tighten-test">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/the-tighten-test-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/the-tighten-test-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/the-tighten-test">The Tighten Test: 12 Steps to a Better Team</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/sara-bine">
                                    <img alt="Photo of Sara Bine" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/sara.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/sara-bine">Sara Bine</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Aug 9, 2020</time></div>
            
            
                                <div>12 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/the-tighten-test" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                A modern take on Joel Spolsky’s “The Joel Test: 12 Steps to Better Code” listing 12 qualities we think the best software development teams have in common.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 10 ends here */}
            {/* 11 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/converting-a-legacy-app-to-laravel">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/legacy-to-laravel-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/legacy-to-laravel-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/converting-a-legacy-app-to-laravel">Legacy to Laravel: How to Modernize an Aging PHP Application</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/andrew-morgan">
                                    <img alt="Photo of Andrew Morgan" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/andrew.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight" href="/authors/andrew-morgan">Andrew Morgan</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Jul 28, 2020</time></div>
            
            
                                <div>19 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/converting-a-legacy-app-to-laravel" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                Many of our clients have legacy PHP apps and want to move to Laravel. We’re often asked "should we rewrite or refactor?" While full rewrites are appealing, they’re also risky. Here’s our approach to gradually refactoring legacy code that lets you start using Laravel right away.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 11 ends here */}
            {/* 12 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/php-powered-alfred-workflows">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/php-powered-alfred-workflows-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/php-powered-alfred-workflows-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/php-powered-alfred-workflows">PHP-Powered Alfred 4 Workflows</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/jose-soto">
                                    <img alt="Photo of Jose Soto" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/jose.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/jose-soto">Jose Soto</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Jul 15, 2020</time></div>
            
            
                                <div>4 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/php-powered-alfred-workflows" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                              Did you know you can use your PHP skills to build a powerful Alfred Workflow? Creating custom workflows can allow you to fully utilize the power of Alfred to save time and automate tasks. It's also a lot of fun to share workflows with others....
                              </a>
                    </div>
                 </div>
            </div>
            {/* 12 ends here */}
            {/* 13 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/making-space-for-brain-stuff">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/making-space-for-brain-stuff-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/making-space-for-brain-stuff-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/making-space-for-brain-stuff">Making Space for Brain Stuff</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/marje-nitz">
                                    <img alt="Photo of Marje Nitz" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/marje.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/jose-soto">Jose Soto</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Jun 9, 2020</time></div>
            
            
                                <div>6 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/making-space-for-brain-stuff" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                 At Tighten, we want to bring our best selves to work, so that we can bring our best work to our team and clients. In order to do that consistently, we make time and space to care for our brains as well as our bodies.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 13 ends here */}
            {/* 14 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/your-app-is-a-package-manager">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/your-app-is-a-package-manager-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/your-app-is-a-package-manager-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/your-app-is-a-package-manager">Your App is a Package Manager</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/chris-trombley">
                                    <img alt="Photo of Chris Trombley" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/chris.jpg"/>
                                </a>
                                <a href="/authors/sara-bine">
                                    <img alt="Photo of Sara Bine" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/sara.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/sara-bine">Sara Bine</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">May 15, 2020</time></div>
            
            
                                <div>7 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/your-app-is-a-package-manager" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                Keeping code organized, readable, and maintainable is tough, and there's no one-size-fits-all solution. Separating your features into dependencies is a good first step for most applications, resulting in cleaner code without the huge complexity cost of a microservice architecture.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 14 ends here */}
            {/* 15 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/intro-to-mobile-app-development-with-nativescript-vue">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/intro-to-mobile-app-development-with-nativescript-vue-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/intro-to-mobile-app-development-with-nativescript-vue-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/intro-to-mobile-app-development-with-nativescript-vue">Intro to Mobile App Development with NativeScript-Vue</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/sara-bine">
                                    <img alt="Photo of Sara Bine" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/sara.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/sara-bine">Sara Bine</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Apr 27, 2020</time></div>
            
            
                                <div>6 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/intro-to-mobile-app-development-with-nativescript-vue" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                              Learn how to build cross-platform, native mobile apps using familiar Vue.js syntax and Tailwind CSS.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 15 ends here */}
            {/* 16 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/opting-out-a-simple-solution-for-conditionally-cancelling-laravel-notifications">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/opting-out-of-laravel-notifications-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/opting-out-of-laravel-notifications-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/opting-out-a-simple-solution-for-conditionally-cancelling-laravel-notifications">Opting Out: A Simple Solution for Conditionally Cancelling Laravel Notifications</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/john-bonaccorsi">
                                    <img alt="Photo of John Bonaccorsi" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/john.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/john-bonaccorsi">John Bonaccorsi</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Mar 16, 2020</time></div>
            
            
                                <div>5 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/opting-out-a-simple-solution-for-conditionally-cancelling-laravel-notifications" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                              The average Laravel app sends between a few and a few dozen notifications to users, but what happens when they want to opt out? With legal regulations like GDPR, it's more important than ever to give users control over the emails they receive.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 16 ends here */}
            {/* 17 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/adding-commits-to-a-pull-request">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/pushing-commits-to-another-persons-pr-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/pushing-commits-to-another-persons-pr-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/adding-commits-to-a-pull-request">Adding Commits to Someone Else's Pull Request</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/jake-bathman">
                                    <img alt="Photo of Jake Bathman" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/jake.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/jake-bathman">Jake Bathman</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Jan 31, 2020</time></div>
            
            
                                <div>2 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/adding-commits-to-a-pull-request" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                              At Tighten, we do lots of open source work. We even have a whole day every week devoted to it. And, thankfully, we have many members of the open source community contributing pull requests to our projects and packages.
  
                              But occasionally we have...
                              </a>
                    </div>
                 </div>
            </div>
            {/* 17 ends here */}
            {/* 18 starts here */}
            <div className="w-full group hover:cursor-pointer">
                <div className="flex flex-col items-start justify-start sm:flex-row md:items-center sm:space-x-2 md:space-x-6">
                      <div className="flex-shrink-0">
                        <a href="https://tighten.com/blog/developing-blocker-friendly-websites">
                          <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-56 md:h-56 mt-1.5 md:mt-0">
                            <div className="w-full h-full bg-center bg-cover md:bg-contain lazyloaded" 
                                 data-bg="https://tighten.com/assets/images/blog/developing-blocker-friendly-websites-preview-image.png" 
                                 style={{'background': 'url("https://tighten.com/assets/images/blog/developing-blocker-friendly-websites-preview-image.png")',
                                //  backgroundImage: "url(" + `${require("./path-to-the-image")}` + ")",
                                      'width': "100%",
                                      'height':"[HEIGHT OF THE IMAGE]",
                                      'backgroundRepeat': "no-repeat",
                                      'backgroundSize': "cover"
                                 }}>
                                 

                            </div>
                          </div>
                        </a>
                      </div>
          
                      <div className="pt-4 pl-0 sm:pt-0 sm:pl-6">
                        <div className="font-serif text-3xl transition-colors duration-300 font-extralight leading-tight-4 2xl:text-4xl 2xl:leading-tight-4 text-[#f0f8ff]  group-hover:text-[#65b722]  ">
                            <a href="https://tighten.com/blog/developing-blocker-friendly-websites">Developing Blocker-Friendly Websites</a>
                        </div>
  
                        <div className="flex flex-col my-5 lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-[#808080] ">
                            <div className="flex flex-col space-y-2 pr-2">
                              <div className="flex items-center space-x-3">
                                <a href="/authors/sara-bine">
                                    <img alt="Photo of Sara Bine" className="object-cover rounded-full h-7 w-7" src="/Blog-Page-img/sara.jpg"/>
                                </a>
                  
                                <a className="font-mono text-lg font-semibold leading-tight tracking-tight text-charcoal-30 hover:text-[#65b722]   word-spacing-tight"  href="/authors/sara-bine">Sara Bine</a>
                              </div>
                            </div>
   
  
                            <div className="flex items-center space-x-4 md:space-x-8 font-mono font-bold text-sm sm:text-base uppercase tracking-wider word-spacing-tight text-[#808080]  pt-0.5">
                                <div><time dateTime="2020-12-22">Jan 10, 2020</time></div>
            
            
                                <div>5 minute read</div>
   
                           </div>
                        </div>
  
                              <a href="https://tighten.com/blog/developing-blocker-friendly-websites" className="text-sm leading-relaxed transition-colors duration-300 text-charcoal-30 group-hover:text-charcoal-15 md:text-base md:leading-relaxed xl:text-lg xl:leading-relaxed">
                                Internet tracking has gotten out of control, and some users are turning to "blocker" browser extensions to protect themselves. Learn how to adapt your website so these users (and all other users) have a better experience.
                              </a>
                    </div>
                 </div>
            </div>
            {/* 18 ends here */}



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
  
  
 
