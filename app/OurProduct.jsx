import Image from 'next/image'
import React from 'react'
import prod1 from '../public/prod1.svg'
import prod2 from '../public/prod2.svg'
import prod3 from '../public/prod3.svg'
import prod4 from '../public/prod4.svg'

const OurProduct = () => {
    return (
       
        <div className=" mx-[6rem] my-[6rem]  ">

      <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* //text  */}

                <div className="">
                    <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-green-700 mb-2 ">Our Products</div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 mb-3 font-semibold  text-gray-700">Grow Beyond, </div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 mb-3 font-semibold  text-green-700 italic">Cultivate Tomorrow.</div>
                    <div className="max-w-[500px] overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                        &quot;Explore our diverse range of agropharma solutions, designed to elevate crop productivity, foster resilience, and redefine sustainable farming practices.&quot;
                    </div>
                </div>

                {/* //text  */}


                <div className="overflow-hidden rounded-md">
                    <Image src={prod4} alt="Picture of the author" width={500} height={500} />
                </div>
                <div className="overflow-hidden rounded-md">
                    <Image src={prod3} alt="Picture of the author" width={500} height={500} />
                </div>
                <div className="overflow-hidden rounded-md">
                    <Image src={prod2} alt="Picture of the author" width={500} height={500} />
                </div>
                <div className="overflow-hidden rounded-md">
                    <Image src={prod4} alt="Picture of the author" width={500} height={500} />
                </div>
                <div className="overflow-hidden rounded-md">
                    <Image src={prod3} alt="Picture of the author" width={500} height={500} />
                </div>











            </div>
        </div>

    )
}

export default OurProduct
// 

{/**/ }
