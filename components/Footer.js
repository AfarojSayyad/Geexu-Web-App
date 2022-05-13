import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image'

// const FooterSection = styled.div`
//     background : #000;
//     color: #fff;
//     height:60px;
//     display: flex;
//     justify-content:center;
//     align-items:center;
// `;
const Footer = () =>
{
    return(
        <>
        
        <div
            className="px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-[96px] p-6 sm:p-12 md:p-0 bg-black text-white"
        >
            <div className="container mx-auto">
                <div className="w-full lg:flex md:flex sm:block">

                <div className="lg:w-3/5 md:w-2/5">
                        <div
                        className="mx-auto flex flex-wrap justify-between md:space-y-0 w-full"
                        >
                        <div>
                            <img src="/header-img/favicon.png" alt="Tighten Logo" className=" lg:w-[80px] md:w-[70px] w-[60px]"/>
                        </div>
                        <div className="flex space-x-4 sm:flex md:hidden lg:hidden">
                            <div>
                            <Link href="https://twitter.com/">
                            <a
                                
                                className="text-[22px] text-[#9b9b97] hover:text-white"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            </Link>
                            </div>
                            <div>
                            <Link href="https://github.com/">
                            <a
                                
                                className="text-[22px] text-[#9b9b97] hover:text-white"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            </Link>
                            </div>
                            <div>
                            <Link href="https://www.linkedin.com/">
                            <a
                                
                                className="text-[22px] text-[#9b9b97] hover:text-white"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <div className="pt-[30px] md:pt-[50px] mb-[10px]">
                        <p
                            className="text-[14px] leading-6 text-[#9b9b97] font-mono font-bold tracking-widest word-spacing-tight"
                        >
                            Swar Vishwa, Ekdant Dutta Mandir Rd, Wireless Colony, Next to
                            Siddhart Residency, Aundh Pune 411007
                        </p>
                        </div>

                        <div className="mb-[10px]">
                        <Link href="tel:+91 20 46 7506 40">
                        <a
                            
                            className="border-b-transparent hover:border-b hover:border-yellow-600 text-[#9b9b97] text-[14px] font-mono tracking-widest word-spacing-tight font-bold"
                        >
                            IND: +91 20 46 7506 40 /
                        </a>
                        </Link>
                        <Link href="tel:+91 20 46 7506 40">
                        <a
                            
                            className="border-b-transparent hover:border-b hover:border-yellow-600 text-[#9b9b97] text-[14px] font-mono tracking-widest word-spacing-tight font-bold"
                        >
                            +91 9130 036 036
                        </a>
                        </Link>
                        </div>
                        <div className="mb-[10px]">
                        <Link href="tel:1 860 967 0120">
                        <a
                            
                            className="border-b-transparent hover:border-b hover:border-yellow-600 text-[#9b9b97] text-[14px] font-mono tracking-widest word-spacing-tight font-bold"
                        >
                            USA: 1 860 967 0120
                        </a>
                        </Link>
                        </div>
                        <div className="mb-[20px]">
                        <Link href="mailto:hello@geexu.in">
                        <a
                            
                            className="border-b-transparent hover:border-b hover:border-yellow-600 text-[#9b9b97] text-[14px] font-mono tracking-widest font-bold"
                        >
                            hello@geexu.in
                        </a>
                        </Link>
                        </div>
                        <div className="flex space-x-6 hidden sm:hidden md:flex lg:flex">
                        <div>
                            <Link href="https://www.linkedin.com/company/geexu/">
                            <a
                            
                            className="text-[22px] text-[#9b9b97] hover:text-white"
                            >
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.facebook.com/geexu.org/">
                            <a
                            
                            className="text-[22px] text-[#9b9b97] hover:text-white"
                            >
                            <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.instagram.com/geexu.co.in/">
                            <a
                            
                            className="text-[22px] text-[#9b9b97] hover:text-white"
                            >
                            <i className="fa-brands fa-instagram"></i>
                            </a>
                            </Link>
                        </div>
                        </div>
                    </div>


                    <div
                        className="w-full xl:flex lg:flex md:flex md:flex-row sm:flex-col justify-between"
                    >
                        <div
                        className="space-y-2 px-0 mt-10 sm:mt-0 sm:w-2/5 w-full 2xl:pl-9 xl:pl-7"
                        >
                        <h4
                            className="font-serif mb-4 sm:mb-6 text-2xl md:text-[1.875rem] lg:text-3xl font-extralight"
                        >
                            Work
                        </h4>
                        <div>
                            <Link href="/method">
                            <a
                           
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono word-spacing-tight"
                            >METHOD
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://tighten.com/manifesto/">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono word-spacing-tight"
                            >MANIFESTO
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono word-spacing-tight"
                            >CASE STUDIES</a>
                            </Link>
                            
                        </div>
                        </div>
                        <div className="space-y-2 mt-10 sm:mt-0 sm:w-2/5 w-full 2xl:pl-6 pl-0">
                        <h4
                            className="font-serif mb-4 sm:mb-6 text-2xl md:text-2xl lg:text-3xl font-extralight"
                        >
                            Company
                        </h4>
                        <div>
                            <Link href="/about">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono text-[16px] tracking-widest"
                            >ABOUT
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/team">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono text-[16px] tracking-widest"
                            >TEAM
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/blog">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono text-[14px] tracking-widest"
                            >BLOG
                            </a> 
                            </Link>           
                        </div>
                        <div>
                            <Link href="/workWithUs">
                            <a
                           
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono text-[14px] tracking-widest"
                            >WORK WITH US
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/contact">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono text-[14px] tracking-widest"
                            >CONTACT
                            </a>
                            </Link>
                        </div>
                        <div>
                        <Link href = 'https://app.pyjamahr.com/careers?company=geexu&company_uuid=E908CB82CF'>
                        <a  className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono text-[14px] tracking-widest">CAREER</a>
                        </Link>
                        </div>

                        </div>
                        <div
                        className="space-y-2 mt-10 sm:mt-0 sm:w-2/5 w-full 2xl:pl-2 xl:pl-0"
                        >
                        <h4
                            className="font-[serif] mb-4 sm:mb-6 text-2xl md:text-2xl lg:text-3xl font-extralight"
                        >
                            Community
                        </h4>
                        <div>
                            <Link href="#">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono tracking-widest"
                            >THE LARAVEL PODCAST</a>
                            </Link>
                            
                        </div>
                        <div>
                            <Link  href="https://twentypercent.fm/">
                            <a
                           
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono tracking-widest"
                            >TWENTY PERCENT TIME PODECAST</a>
                            </Link>
                            
                        </div>
                        <div>
                            <Link href="https://onramp.dev/en">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono tracking-widest"
                            >LARAVEL ONRAMP</a>
                            </Link>
                            
                        </div>
                        <div>
                            <Link href="https://novapackages.com/">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono tracking-widest"
                            >NOVA PACKAGES
                            </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://laravel-tricks.com/tricks">
                            <a
                            
                            className="border-b-transparent hover:border-b hover:border-[#65b722] text-[#9b9b97] font-mono tracking-widest"
                            >LARAVEL TRICKS</a>
                            </Link>
                            
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* footer ends here */}
        <div
            className="bg-[#1A1A1A] xl:py-8 lg:px-28 lg:py-6 md:px-16 px-4 py-10 -mt-1"
            >
            <div className="container mx-auto">
                <div
                className="flex md:flex-row flex-col-reverse lg:justify-between lg:items-center md:justify-between items-center text-xs sm:text-sm"
                >
                <div className="text-[#9b9b97] mt-0">
                    <span className="w-full object-cover h-64"
                    >&copy;2022 All rights reserved.</span
                    >
                </div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Footer;