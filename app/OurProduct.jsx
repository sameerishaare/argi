import Image from 'next/image'
import React from 'react'
import image1 from '../../public/image1.jpeg'
import image4 from '../../public/image4.jpeg'


const OurProduct = () => {
    return (
        // <div className="flex  flex-col md:flex-row  gap-3  justify-center ">






        //     <div className="basis-1/3 flex flex-col gap-5">
        //         <div className="basis-1/2 flex-col flex-wrap">
        //             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Our Products</div>
        //             <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 mb-3">Grow Beyond, Cultivate Tomorrow.</div>
        //             <div className="max-w-[500px] overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl">
        //                 Explore our diverse range of agropharma solutions, designed to elevate crop productivity, foster resilience, and redefine sustainable farming practices.
        //             </div>
        //         </div>
        //         <div className="flex-1">
        //             <Image src={image1} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
        //         </div>
        //     </div>







        //     <div className="basis-1/3 flex flex-col gap-3">
        //         <div className="">
        //             <Image src={image1} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} />

        //         </div>
        //         <div className="">
        //             <Image src={image1} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} />

        //         </div>

        //     </div>
        //     <div className="basis-1/3 flex flex-col gap-3">
        //         <div className="">
        //             <Image src={image1} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} />

        //         </div>
        //         <div className="">
        //             <Image src={image1} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} />

        //         </div>

        //     </div>












        // </div>
        <div className=" mx-[3rem] my-[4rem] ">
            <div className="flex justify-center items-center flex-wrap -mx-4">
                <div className="w-full  md:w-1/2 xl:w-1/3 px-4 mb-4 p-3 ">




                    <div className=" flex-col flex-wrap ">
                        <div className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-green-700 mb-2 ">Our Products</div>
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 mb-3 font-semibold  text-gray-700">Grow Beyond, </div>
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 mb-3 font-semibold  text-green-700 italic">Cultivate Tomorrow.</div>
                        <div className="max-w-[500px] overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                            Explore our diverse range of agropharma solutions, designed to elevate crop productivity, foster resilience, and redefine sustainable farming practices.
                        </div>
                    </div>


                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
                    <Image src={image1} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
                    <Image src={image1} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
                    <Image src={image1} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
                    <Image src={image1} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-4">
                    <Image src={image1} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
                </div>

            </div>
        </div>

    )
}

export default OurProduct
// 

{/**/ }
