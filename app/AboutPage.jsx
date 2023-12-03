import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import image1 from '../public/image1.svg'
import image2 from '../public/image2.svg'
import image3 from '../public/image3.svg'

const AboutPage = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "00px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);
    observer.observe(ref1.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        console.log(el);
        el.classList.add("slide-in");
        el.classList.remove("slide-out");
      });
      ref1.current.querySelectorAll("div").forEach((el) => {
        console.log(el);
        el.classList.add("slide-in");
        el.classList.remove("slide-out");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
        el.classList.add("slide-out");
      });
      ref1.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
        el.classList.add("slide-out");
      });
    }
  }, [isIntersecting]);
    return (
        <div className='flex flex-col md:flex-row gap-4 m-4
         py-10'>
            <div className="flex-col justify-center items-center p-4 mr-[2rem] scale-90 relative">
                <div className='w-[32rem] h-[20.5rem] absolute border-[1.991px] border-[#036B46] scale-90 top-[5.5rem] left-[4rem] z-[-10]'>
                </div>
                <div ref={ref1} className="ml-[8rem]">
                  <div>
                    <Image src={image1} alt="Picture of the author" width={350} className='rounded-2xl' height={350} />
                  </div>
                </div>
                <div ref={ref} className="flex mt-5">
                    <div className="m-3 mt-5 rounded-md mr-[3rem]"><Image src={image2} alt="Picture of the author" width={200} height={200} className='rounded-2xl' /></div>
                    <div className="m-3 rounded-md"><Image src={image3} alt="Picture of the author" width={300} className='rounded-2xl' height={300} /></div>
                </div>
            </div>
            <div className="basis-3/6 mt-9">
                <div className='mb-2 text-2xl text-[#036B46]'>ABOUT US</div>
                <div className='mb-1.5 font-bold text-[2rem] text-[#343736] mt-3 leading-[3.25rem]'> &quot;Empowering agriculture with precision and innovation,<span className='text-[#036B46] italic '> Agrity Crop Science<br/> </span>pioneers sustainable growth for a<br/> flourishing tomorrow.&quot;</div>

                <div className='text-xl text-[#646464] font-thin'>&quot;Welcome to Agrity Crop Science, a pioneering force in agropharma. At the intersection of agriculture and pharmaceutical innovation, we cultivate sustainable growth for farmers worldwide. Our commitment to excellence, cutting-edge solutions, and a passion for greener futures define us as leaders in agropharma, nurturing the roots of prosperity in every field we touch.&quot;</div>
            </div>
        </div>
    )
}

export default AboutPage
