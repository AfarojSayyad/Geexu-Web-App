import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function WorkWithUs() {
    return (
        <>
            <Head>
                <title>Team | Geexu</title>
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
            <div className="bg-black">
                {/* <!-- Hero Section Start Here --> */}
                <div>
                    <div className="px-6 md:px-16 lg:px-28 py-16 text-white bg-black md:py-24 lg:py-36 xl:py-40">
                        <div className="max-w-screen-2xl mx-auto">
                            <h1 className="2xl:text-[20rem] xl:text-[18rem] xl:leading-[18rem] lg:text-[14rem] lg:leading-[14rem] md:text-[12rem] md:leading-[12rem] sm:text-[10rem] sm:leading-[10rem] text-[3.75rem] leading-[3.75rem] text-white font-[signifier] font-[270] 2xl:pt-12 xl:pt-4 lg:pt-6 md:pt-0 mb-4" title="Work With Us">
                                Work With Us
                            </h1>

                            <div className="w-full mb-2 font-serif text-2xl leading-snug font-extralight sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:mb-6">
                                we’re a delightful group of people who are also insanely
                                <br className="hidden md:block" />
                                good at software development.
                            </div>
                        </div>
                    </div>



                    <img src="/work-with-us/work-with-us-hero.jpg" className="w-full" alt="Drawing of two people inside screens talking to each other" />
                    <div className="flex w-full h-auto lg:h-[320px] xl:h-[460px]">
                        <div className="relative z-10 flex flex-col w-full md:flex-row">
                            <div className="-z-10 absolute bg-yellow flex items-start justify-end h-[320px] xl:h-[460px] md:w-5/12 overflow-hidden top-0 w-full">
                                <div className="relative w-auto h-[340px] md:h-[560px] bg-yellow-to-blue-1 flex-1 aspect-w-1 aspect-h-1">
                                    <div className="absolute w-5/6 top-8 left-8 h-5/6 bg-yellow-to-blue-2">
                                        <div className="absolute w-5/6 top-4 left-5 h-5/6 bg-yellow-to-blue-3">
                                            <div className="absolute w-5/6 top-4 left-5 h-5/6 bg-yellow-to-blue-4">
                                                <div className="absolute w-5/6 top-4 left-5 h-5/6 bg-yellow-to-blue-5">
                                                    <div className="absolute w-5/6 top-4 left-5 h-5/6 bg-yellow-to-blue-6">
                                                        <div className="absolute w-2/3 top-4 left-5 h-2/3 bg-yellow-to-blue-7">
                                                            <div className="absolute w-1/2 top-4 left-5 h-1/2 bg-yellow-to-blue-8">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="px-6 md:px-16 lg:px-28 py-0 mx-auto ">
                                <div className="bg-[#1a1a1a] max-w-screen-2xl mx-auto px-12 py-10 mt-6 text-white xl:py-16 2xl:py-20 xl:px-20 bg-charcoal md:-mt-20">
                                    <div className="flex flex-col items-start lg:flex-row">
                                        <h1 className="mb-6 font-serif text-4xl lg:w-1/3 xl:w-2/5 font-extralight md:text-5xl 2xl:text-6xl">
                                            Geexu culture
                                        </h1>

                                        <div className="py-2 font-sans leading-loose lg:w-2/3 xl:w-3/5 text-charcoal-10 xl:text-lg xl:leading-loose 2xl:text-xl 2xl:leading-loose space-y-4 lg:space-y-8 lg:pr-8">
                                            <p>
                                                We are committed to providing a respectful, diverse environment for our employees to develop as professionals and human beings.

                                            </p>

                                            <p>
                                                We have a few open positions right now, and we hope you'll consider applying if you're interested in Geexu's culture. If you think you'd like to work at Geexu someday, keep an eye out on LinkedIn for future job openings.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="px-6 md:px-16 lg:px-28 w-full py-24 bg-black md:pb-32">
                        <div className="max-w-screen-2xl mx-auto flex flex-col space-y-12 md:space-y-20">
                            <div className="flex flex-col items-stretch space-y-10 lg:space-y-0 lg:space-x-16 xl:space-x-20 lg:flex-row-reverse lg:space-x-reverse xl:space-x-reverse">
                                <div className="w-full lg:w-1/2 xl:w-3/5">
                                    <img src="/work-with-us/work-with-us-learning.png" className="object-cover w-full h-full" alt="Drawing of smiling person with flowers in head" />

                                </div>

                                <div className="flex flex-col items-center justify-center w-full text-white lg:w-1/2 xl:w-2/5">
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-serif text-4xl font-extralight md:text-5xl">
                                            Constantly Learning
                                        </div>

                                        <p className="text-base leading-loose sm:text-lg sm:leading-loose lg:text-base lg:leading-loose xl:text-lg xl:leading-loose text-charcoal-10">
                                            We're a small but rapidly expanding company with a desire to do good things alongside our clients, write beautiful code, and solve problems in new and innovative ways. We strive to learn new things and improve our techniques and processes on a regular basis, and we enjoy delving into the details of code, technology, and experience. Each project provides us with the opportunity to grow as a team, as developers, as managers, and as individuals.

                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col items-stretch space-y-10 lg:space-y-0 lg:space-x-16 xl:space-x-20 lg:flex-row">
                                <div className="w-full lg:w-1/2 xl:w-3/5">
                                    <img src="/work-with-us/work-with-us-dogwood.png" className="object-cover w-full h-full" alt="Drawing of two hands holding flowers" />

                                </div>

                                <div className="flex flex-col items-center justify-center w-full text-white lg:w-1/2 xl:w-2/5">
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-serif text-4xl font-extralight md:text-5xl">
                                            Do well, be good
                                        </div>

                                        <p className="text-base leading-loose sm:text-lg sm:leading-loose lg:text-base lg:leading-loose xl:text-lg xl:leading-loose text-charcoal-10">
                                            People and relationships are extremely important to us at Geexu. We enjoy our jobs, but we don't believe they should be "hard" or out of proportion to the rest of our lives. We believe that doing things outside of the office that make us happy makes us better workers and people, and we can confidently state that everyone on our team is a good, honest, and thoughtful individual.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="px-6 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24 relative bg-[#272727]">
                        <div className="max-w-screen-2xl mx-auto py-6 md:py-10">
                            <div className="relative z-10 pb-6 font-serif text-5xl text-white md:text-7xl font-extralight sm:pb-12 lg:pb-24">
                                Perks and Benefits
                            </div>

                            <div className="relative z-10 lg:pl-12 lg:pr-24 xl:pl-12 xl:pr-32 2xl:pl-28 2xl:pr-48">
                                <div className="flex flex-col md:flex-row md:space-x-16 xl:space-x-24">
                                    <div>
                                        <div className="py-6 lg:py-8" heading="Remote Work">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Medical Insurance

                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                People working at Geexu are offered great benefits of medical insurance covering the cost of medical bills.

                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Great Insurance">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Vacation/Paid time off

                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                All of our employees receive 12 paid leaves, wherein, each month, One paid leave will be credited to the employer's account. In addition, Geexu offers Ten public holidays.

                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Twenty Percent Time">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Annual performance review
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                Geexu believes in a holistic approach to make a workplace better. That’s why, we undertake a formal assessment called ‘Annual performance review’ in which a manager evaluates an employee's work performance, identifies strengths and weaknesses, offers feedback, and sets goals for future performance.

                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="401(k) with Employer Match">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Ergonomic desk accessories (like chairs and keyboards)
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                To work efficiently, we provide our employees with chairs, a keyboard and other related required marital.


                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Work / Life Balance">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Learn real world knowledge, work ethics, and team spirit
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                geexu has a very rational work culture. We believe in learning constantly. If you decide to join geexu or do business with geexu, you will also have the opportunity to learn real-world knowledge, work ethics, and team spirit.


                                            </p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="py-6 lg:py-8" heading="Wellness Stipend">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Casual dress code
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                Geexu allows the employee to wear a casual dress code, like relaxed and informal clothing. We believe that having comfort while working ultimately gives us the best results.


                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Generous Time Off">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Flexible schedule (Work from home)
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                Geexu has a hybrid work model. This means you can work from home if it’s not possible to join the office after consulting with the team and reporting manager. It can be beneficial too, twice a month.


                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Student Loan Assistance">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Well stocked office pantry
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                Yep, we have a well-stocked office pantry. Employees can grab anything they want if they are feeling tired or hungry.

                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Bi-annual Onsites">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                ESOP
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                We offer an 'employee stock ownership plan' to our employees, which means they will be granted company share for a specific duration of time while working at geexu.


                                            </p>
                                        </div>


                                        <div className="py-6 lg:py-8" heading="Workspace Allowance">
                                            <h3 className="pb-4 font-serif text-3xl lg:text-4xl text-[#65b722] font-extralight lg:pb-8">

                                                Company retreats
                                            </h3>

                                            <p className="leading-loose md:leading-loose text-white text-base md:text-lg">
                                                Geexu provides an opportunity for every employee to give their opinion or suggestions which can lead to improvement. We care about what our employees have to say.


                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- Hero Section End Here --> */}

            </div>
            <Footer />
        </>
    );
}








