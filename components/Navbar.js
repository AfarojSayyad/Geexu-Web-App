import React,{useState, useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import Hero from '../pages/home';
import styles from './styles.module.css';



const Nav = styled.nav`
    height: 80px;
    background: #000;
    color:#fff;
    display: flex;
    justify-content:space-between;
    align-items:center;
    
`;

// const StyledLink = styled.nav`
// padding : 0rem 2rem;
// cursor:pointer
// `;
const Navbar = () =>
{
  // const [handleClick] = useState();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    
    
    
  };

  
  
  
    return(
   <>
   {/* <div className="m-0 p-0 box-border transition-all duration-300"> */}
       <div
      className="sticky header top-0 z-50 bg-[#1A1A1A] md:flex justify-between items-center w-full 2xl:w-[97.5%] xl:w-[96.5%] lg:w-[95.3%] md:w-[94%] h-[80px] md:h-[90px] lg:h-[90px] md:mx-auto md:top-6 lg:pl-10 lg:pr-12 md:pl-4 md:pr-4 sm:pl-2 sm:pr-0 sm:pt-0 pl-2 pt-[0.125rem]"
    >
      {/* <!-- Tablate and Dektopview Logo Start Here --> */}
      <div
        className="tab-desk-logo flex justify-between md:items-center sm:items-end items-center 2xl:pl-[8.3rem] xl:pl-11 lg:pl-10 md:pl-0 pl-4 md:pr-0 md:pt-0 pr-4 pt-[0.8rem]"
      >
        
        <div>
          <a href='/'>
            <img
              src="/header-img/logo.png"
              alt="Tighten Logo"
              className="logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] md:pt-0 sm:pt-[0.125rem]"
            />
            <img
              src="/header-img/logo.png"
              alt="Tighten Logo"
              className="sticky-logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] "
            />
          </a>
        </div>
        <nav className=" pl-60  navbar block md:hidden opacity-100 ">
        <button
              className=' inline-flex p-3  bg-black rounded lg:hidden text-white ml-auto hover:text-white outline-none'
              onClick={handleClick}
            >
              <svg
                className='w-6 h-6 '
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
          </svg>
        </button>
{/* 
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          
          
          
          <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-black hover:text-white '>
            <ul>
              <li className="h-full md:mt-0 mt-7 list-none">
                <a href="/method" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">Method </a>
              </li>
              <li className="h-full md:mt-0 mt-7 list-none">
                <a href="/work" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">WORK</a>
              </li>
              <li className="h-full md:mt-0 mt-7 list-none">
                <a href="/blog" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">BLOG</a>
              </li>
              <li className="h-full md:mt-0 mt-7 list-none">
                <a href="/team" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">TEAM</a>
              </li>
              <li className="h-full md:mt-0 mt-7 list-none">
                <a href="/about" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">ABOUT</a>
              </li>
              <li className="h-full md:mt-0 mt-7 list-none">
                <a href="/contact" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">CONTACT</a>
              </li>
              </ul>
            </div>
            
            
          
        </div> */}
        </nav>
        <div>
          {/* <ion-icon name="menu-outline" className="text-3xl cursor-pointer md:hidden block text-[#e2e2e2] mr-2 md hydrated" onclick="Menu(this)" role="img" aria-label="menu outline">
          </ion-icon> */}
        </div>
      </div>
      {/* <!-- Tablate and Dektopview Logo End Here --> */}
      <div className="2xl:pr-20 h-full">
        {/* <!-- Tablate and Desktop View NavLink Strat here --> */}
        <nav className="navbar lg:flex md:flex h-full opacity-100">
        
          <div className="nav-link h-full flex" >
          
          
            <ul className="bg-[#1A1A1A] list-none md:flex items-center 2xl:space-x-[3.563rem] xl:space-x-[3.580rem] lg:space-x-[2.570rem] md:space-x-[20px] md:static absolute w-full -top-[500px] left-0 duration-1000 text-white hover:text-gray-400 text-right md:text-center pb-[2.5rem] sm:pb-[2.625rem] md:pb-0 pr-8 md:pr-0 lg:mr-7 2xl:mr-10 2xl:-mt-0 mt-0 lg:h-full">
              
              <li className="h-full md:mt-0 mt-7">
                <Link href="/method" >
                <a className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">Method</a>
                </Link>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <Link href="/work">
                <a  className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">WORK</a>
                </Link>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <Link href="/blog">
                <a  className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">BLOG</a>
                </Link>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <Link href="/team">
                <a  className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">TEAM</a>
                </Link>
              </li>
              <li className="h-full md:mt-0 mt-7">
                <Link href="/about">
                <a  className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">ABOUT</a>
                </Link>
              </li>

              <Link href="/contact">
              <a  className="mt-7 md:mt-0 btn  inline-block  border border-white rounded-full text-white font-mono font-bold lg:text-[1rem] lg:leading-[1.5rem] lg:font-[700] md:text-[14px] text-[0.875rem] leading-[0.875rem] tracking-[4px] hover:bg-gradient-to-r from-[#68ccd9] to-[#62bd64] hover:text-white hover:border-transparent shadow-button-inner-gray border-white bg-origin-border hover:border-transparent
              py-3 lg:py-2.5 px-5 uppercase text-white border ">CONTACT</a>
              </Link>
           
            </ul>
            {/* toggle start here */}
            <nav className=" lg:hidden navbar lg:flex md:flex h-screen opacity-100">

            
              <div
                className={`${
                  active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
              >
          
          
          
              <div className='lg:inline-flex h-screen absolute top-0 right-0 px-3 w-[350px] py-2 rounded text-white font-bold items-center justify-center bg-black hover:text-white '>
                <p className="ml-auto mt-5 text-56 text-white text-right mr-10" >
                  <button onClick={handleClick}>
                  <i className="fa-solid fa-xmark" ></i>
                  </button>
                </p>
                <ul>
                  <li className="h-full md:mt-0 mt-7 list-none" >
                    <a href="/method" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">Method</a>
                  </li>
                  <li className="h-full md:mt-0 mt-7 list-none">
                    <a href="/work" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">WORK</a>
                  </li>
                  <li className="h-full md:mt-0 mt-7 list-none">
                    <a href="/blog" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">BLOG</a>
                  </li>
                  <li className="h-full md:mt-0 mt-7 list-none">
                    <a href="/team" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">TEAM</a>
                  </li>
                  <li className="h-full md:mt-0 mt-7 list-none">
                    <a href="/about" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">ABOUT</a>
                  </li>
                  <li className="h-full md:mt-0 mt-7 list-none">
                    <a href="/contact" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">CONTACT</a>
                  </li>
                  </ul>
                </div>
              
              
            
              </div>
              </nav>
              {/* toggle end here */}

            </div>

          
        </nav>
        {/* <!-- Tablate and Desktop View NavLink Strat here --> */}
      </div>
    </div>
    {/* </div> */}
    </>
    );
};
export default Navbar;
// {/* <Nav>
//          <div>
//           <a href='/'>
//             <img
//               src="/header-img/logo.png"
//               alt="Tighten Logo"
//               className="logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] md:pt-0 sm:pt-[0.125rem]"
//             />
//             {/* <Image
//             width={164.8}
//             height={50}
//               src="/header-img/logo.png"
//               alt="Tighten Logo"
//               className="sticky-logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] "
//             /> */}
//          </a> 
//         </div>
        
//         {/* <div>
//             <Link href='/' passHref>
//                NXT
//             </Link>
//         </div>

//         <div>
//             <Link href='/home' passHref>
//                 <StyledLink>Home</StyledLink>
//             </Link>
//         </div>

//         <div>
//             <Link href='/method' passHref>
//                 <StyledLink>METHOD</StyledLink>
//             </Link>
//         </div>

//         <div>
//             <Link href='/work' passHref
//                 className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center"
//             >
//                 <StyledLink>WORK</StyledLink>
//             </Link>
//         </div>

//         <div>
//             <Link href='/blog' passHref>
//                 <StyledLink>BLOG</StyledLink>
//             </Link>
//         </div>

//         <div>
//             <Link href='/about' passHref>
//                 <StyledLink>ABOUT</StyledLink>
//             </Link>
//         </div>

//         <div>
//             <button>
//             <Link href='/contact' passHref>
//                 <StyledLink>Contact</StyledLink>
//             </Link>
//             </button>
//         </div> */}
//         {/* <div className="nav-link h-full flex relative z-50"> */}
//          <div className="nav-link h-full flex relative z-50">
//             <ul className="bg-[#1A1A1A] list-none md:flex items-center 2xl:space-x-[3.563rem] xl:space-x-[3.580rem] lg:space-x-[2.570rem] md:space-x-[20px] md:static absolute w-full -top-[500px] left-0 duration-1000 text-white hover:text-gray-400 text-right md:text-center pb-[2.5rem] sm:pb-[2.625rem] md:pb-0 pr-8 md:pr-0 lg:mr-7 2xl:mr-10 2xl:-mt-0 mt-0 lg:h-full">
//               <li className="h-full md:mt-0 mt-7">
//                 <a href="/method" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">Method</a>
//               </li>
//               <li className="h-full md:mt-0 mt-7">
//                 <a href="/work" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">WORK</a>
//               </li>
//               <li className="h-full md:mt-0 mt-7">
//                 <a href="/blog" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">BLOG</a>
//               </li>

//               <li className="h-full md:mt-0 mt-7">
//                 <a href="/team" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">TEAM</a>
//               </li>

//               <li className="h-full md:mt-0 mt-7">
//                 <a href="/about" className="h-full font-mono font-bold hover:text-white uppercase border-b-[5px] border-t-[5px] border-t-transparent border-t-transparent border-b-transparent hover:border-b-[#65b722] lg:text-[1rem] lg:leading-[0.710rem] md:text-sm text-[1.125rem] leading-[1.75rem] tracking-[3px] pb-0 lg:flex lg:items-center md:flex md:items-center">ABOUT</a>
//               </li>

//               <a href="/contact" className="mt-7 md:mt-0 btn  inline-block  border border-white rounded-full text-white font-mono font-bold lg:text-[1rem] lg:leading-[1.5rem] lg:font-[700] md:text-[14px] text-[0.875rem] leading-[0.875rem] tracking-[4px] hover:bg-gradient-to-r from-[#68ccd9] to-[#62bd64] hover:text-white hover:border-transparent shadow-button-inner-gray border-white bg-origin-border hover:border-transparent
//               py-3 lg:py-2.5 px-5 uppercase text-white border ">CONTACT</a>
//             </ul>
//           </div> 
       
        
//     </Nav>
//     <Hero/> */}