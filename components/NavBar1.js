// import Link from 'next/link';
// import { useState } from 'react';
// import styled from 'styled-components'

// const Nav = styled.nav`
//     height: 80px;
//     background: #000;
//     color:#fff;
//     display: flex;
//     justify-content:space-between;
//     align-items:center;
    
// `;

// export const Navbar1 = () => {
//   const [active, setActive] = useState(false);

//   const handleClick = () => {
//     setActive(!active);
//   };

//   return (
//     <>
     
//       <Nav className="navbar lg:flex md:flex h-full opacity-100">
//       <div>
//           <a href='/'>
//             <img
//               src="/header-img/logo.png"
//               alt="Tighten Logo"
//               className="logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] md:pt-0 sm:pt-[0.125rem]"
//             />
//             <img
//               src="/header-img/logo.png"
//               alt="Tighten Logo"
//               className="sticky-logo 2xl:w-[11.325rem] xl:w-44 lg:w-[11.5rem] md:w-[10rem] sm:w-[9.2rem] w-[9.2rem] "
//             />
//           </a>
//         </div>
//         <button
//           className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
//           onClick={handleClick}
//         >
//           <svg
//             className='w-6 h-6'
//             fill='none'
//             stroke='currentColor'
//             viewBox='0 0 24 24'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               strokeWidth={2}
//               d='M4 6h16M4 12h16M4 18h16'
//             />
//           </svg>
//         </button>
//         {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
//         <div
//           className={`${
//             active ? '' : 'hidden'
//           }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
//         >
//           <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          
              
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
//             {/* <Link href='/'>
//               <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
//                 Home
//               </a>
//             </Link>
//             <Link href='/'>
//               <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
//                 Services
//               </a>
//             </Link>
//             <Link href='/'>
//               <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
//                 About us
//               </a>
//             </Link>
//             <Link href='/'>
//               <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
//                 Contact us
//               </a>
//             </Link> */}
            
//           </div>
//         </div>
//       </Nav>
      
//     </>
//   );
// };