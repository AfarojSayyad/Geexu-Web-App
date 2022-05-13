export default function Company(props) {
  return (
    <>
      <div className="group cursor-pointer flex-1 flex flex-col mb-8 text-white">
        <a
          href="#"
          aria-label={props.label}
          className="transition ease-in-out duration-300 group-hover:scale-105 group-hover:shadow-2xl  bg-neutral-800"
        >
          <div
            className="flex flex-col justify-end overflow-hidden aspect-w-1 aspect-h-1 bg-charcoal"
            title={props.label}
            subtext={props.label}
            link={props.link}
          >
            <div className="flex items-center justify-center transition duration-300 sm:grayscale sm:group-hover:grayscale-0 h-[327px] sm:p-6 xl:p-12 2xl:p-20 sm:opacity-50 sm:group-hover:opacity-100">
              {/* svg is used here for image */}
              <img src={props.src}/>
            </div>

            <div></div>
          </div>
        </a>

        <div className="pt-6 font-serif font-light text-3xl leading-tight sm:text-2xl sm:leading-tight xl:text-4xl xl:leading-tight group-hover:text-[#65b722]">
          <a
            href="#"
            aria-label={props.label}
            className="block"
          >
           {props.label}
          </a>
        </div>

        <div className="text-charcoal-20 mt-4 md:mt-6 xl:mt-10 leading-loose sm:text-sm sm:leading-loose lg:text-base lg:leading-loose 2xl:text-lg 2xl:leading-loose px-0">
          <a
            href="#"
            aria-label={props.label}
            className="block"
          >
           {props.para}
          </a>
        </div>
      </div>
    </>
  );
}
