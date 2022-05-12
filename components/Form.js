import Head from 'next/head'
import styled from 'styled-components';
import Footer from './Footer';
import FooterCard from './FooterCard';
import UseForm from './UseForm';
import validate from './validateInfo';


// const form = styled.p
// ` 'color': "red";`;

export default function Form({formSubmit}) {
  const {values, handleChange, handleSubmit, errors} = UseForm(formSubmit, validate);
  
  return (
    <>
      
      {/* <!-- Hero Section Start Here --> */}
    <div className="container-fluid bg-black px-6 md:px-16 lg:px-28 2xl:px-0">
      <div
        className="container mx-auto bg-black pt-0 sm:-mt-24 -m-20 sm:pt-48 pt-24 2xl:pt-56 pb-28"
      >
        {/* <!-- Hero Section Start Here --> */}
        <div
          className="flex sm:flex-row flex-col-reverse justify-between items-center"
        >
          <div className="flex flex-col sm:mt-0 mt-10">
            <h3
              className="font-[signifier] font-[100] text-gray-400 text-4xl lg:text-5xl 2xl:text-6xl pb-2"
            >
              Got an idea?
            </h3>
            <h2
              className="text-[6.5rem] leading-[6.5rem] lg:text-[8rem] 2xl:text-[10rem] text-white font-[signifier] font-[100] mb-6 md:mb-10 lg:mb-12"
            >
              Let’s talk.
            </h2>
            <div
              className="font-[signifier] font-extralight text-xl leading-snug sm:text-2xl sm:leading-snug xl:text-3xl xl:leading-snug w-full mb-2 lg:mb-6 text-white"
            >
              Leave us a note here, or give us
              <br className="xl:hidden" />
              a call at
              <a
                href="tel:+91 20 46 7506 40"
                className="underline decoration-1 decoration-white underline-offset-8 hover:text-[#65b722] hover:decoration-[#65b722]"
              >
                +91 20 46 7506 40
              </a>
            </div>
          </div>
          <div>
            <img
              src="/contact-us/right.png"
              className="2xl:w-[35rem] 2xl:pl-0 lg:pl-0 md:pl-10 lg:w-96 md:w-60"
            />
          </div>
        </div>
        {/* <!-- Hero Section Start Here --> */}
      </div>
      
      
      {/* <!-- Form Section Start Here --> */}
      <div className="container mx-auto bg-[#272727] mt-10">
        <form onSubmit={handleSubmit}>
            
          <div className="flex-col space-y-10 py-8 px-6 sm:py-8 sm:px-12 lg:py-12 lg:px-16">
            <div className="max-w-5xl mx-auto">
            <div className="mb-20 grid grid-cols-2 gap-y-10 sm:gap-y-6 gap-x-10 sm:mb-12">
              <div className="relative col-span-2 lg:col-span-1  basis-[50%] focus-within:text-[#65b722]" style={{}}>
              <div className='form-inputs'>
                <input className="signup-input bg-transparent border-b border-b-[#666666] pb-2 placeholder:text-white w-full outline-0 text-white" 
                       type="text" 
                       title="Please enter a valid Name."
                        maxLength="30" 
                       id="first_name" 
                       name="first_name" 
                       placeholder="NAME"
                       value={values.first_name}
                       onChange ={handleChange}
                       
                      
                       />
                        {errors.first_name && <p style={{'color':"red"}}>{errors.first_name}</p>}
              </div>
              </div>

              <div className="relative col-span-2 lg:col-span-1 basis-[50%] focus-within:text-[#65b722]">
                <input className="signup-input bg-transparent border-b border-b-[#666666] pb-2 placeholder:text-white w-full outline-0 text-white" 
                       type="number"
                       maxLength="10" 
                       pattern="[789][0-9]{9}" 
                       id="phone_no" 
                       name="phone_no" 
                       placeholder="MOBILE NUMBER" 
                       title="Please enter a valid Number." 
                       value={values.phone_no}
                       onChange={handleChange}
                       />
                       {errors.phone_no && <p style={{'color':"red"}}>{errors.phone_no}</p>}
              </div>

              <div className="relative col-span-2 ">
                    <input className="block w-full pl-0 pr-0  font-mono text-lg tracking-tight text-white bg-transparent border-t-0 rounded-none word-spacing-tighter border-x-0 e md:text-2xl signup-input bg-transparent border-b border-b-[#666666] pb-2  w-full outline-0 " 
                           type="email" 
                           id="email"  
                           name="email" 
                           placeholder="EMAIL" 
                           title="Please enter a valid email address." 
                           value={values.email}
                           onChange={handleChange}
                           required=""/>
                           {errors.email && <p style={{'color':"red"}}>{errors.email}</p>}
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[#c0c0c0] pb-2 tracking-widest font-mono text-[15px]">TELL US ABOUT YOUR IDEA</span>
              <textarea className="signup-input bg-transparent border border-1 border-[#666666] mt-2 text-white pl-3" id="message" name="message" title="Please enter a where you based." required="" cols="30" rows="10"></textarea>
            </div>
            <div className="flex justify-end w-full mt-10 mb-6">
              <button type="submit" 
                      className="bg-[#65b722] text-white px-6 py-3 rounded-full hover:bg-white hover:text-black" 
                      value="submit">
                Submit
              </button>
            </div>
         
          
            </div>
        </div>
        </form>
      </div>
      {/* <!-- Form Section Start Here --> */}
    </div>
    {/*  */}
    <div id="success">
      Thanks you for contacting, We will get back to you shortly.
    </div>
    <div id="error">Please try again, something wrong !</div>
    {/*  */}
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
  
  
 
