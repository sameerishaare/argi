import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import icon1 from '../public/icon1.svg'
import icon2 from '../public/icon2.svg'
import icon3 from '../public/icon3.svg'
import icon4 from '../public/icon4.svg'
import CountUp from 'react-countup';

const Counter = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "00px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (isIntersecting) {
            setStartCount(true);
        } else {
            setStartCount(false);
        }
    }, [isIntersecting]);
    return (
        <div id="products" className=' flex flex-col md:flex-row gap-5 bg-[#036B46] py-5'>


            <div className="basis-1/4 flex    md:w-auto  mx-[2rem]  sm:mx-[8rem] md:mx-[0]">
                <div className="p-2 text-[#76B728] flex justify-center items-center">
                    <Image src={icon4} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />

                </div>
                <div ref={ref} className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">{startCount ? <CountUp end={10} /> : "0"}</div>
                    <div className="">Years of Exp</div>
                </div>
            </div>


            <div className="basis-1/4 flex    md:w-auto  mx-[2rem]  sm:mx-[8rem] md:mx-[0]">
                <div className="p-2 text-[#76B728] flex justify-center items-center">

                    <Image src={icon3} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />
                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">{startCount ? <CountUp end={50} /> : "0"}+</div>
                    <div className="">Export Quality Products</div>
                </div>
            </div>
            <div className="basis-1/4 flex    md:w-auto  mx-[2rem]  sm:mx-[8rem] md:mx-[0]">
                <div className="p-2 text-[#76B728] flex justify-center items-center">
                    <Image src={icon2} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />

                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">{startCount ? <CountUp end={200} /> : "0"}+</div>
                    <div className="">Satisfied Customers</div>
                </div>
            </div>
            <div className="basis-1/4 flex    md:w-auto  mx-[2rem]  sm:mx-[8rem] md:mx-[0]">
                <div className="p-2 text-[#76B728] flex justify-center items-center">
                    <Image src={icon1} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />

                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">{startCount ? <CountUp end={20} /> : "0"}</div>
                    <div className="">Well Trained & Dedicated Team</div>
                </div>
            </div>



        </div>
    )
}

export default Counter

