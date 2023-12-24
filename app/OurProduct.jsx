import Image from 'next/image'
import React from 'react'
import prod1 from '../public/prod1.svg'
import prod2 from '../public/prod2.svg'
import prod3 from '../public/prod3.svg'
import prod4 from '../public/prod4.svg'

const OurProduct = () => {
    return (
       
        <div className=" mx-[6rem] my-[6rem]  max-md:mx-[1.5rem] max-md:my-[3.75rem]">

      <div className="flex">

                {/* //text  */}
                <div>
                    <div className="">
                        <div className="text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold text-[#036B46] mb-2 ">Our Products</div>
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 mb-3 font-semibold  text-[#343736]">Grow Beyond, </div>
                        <div className="text-lg sm:text-xl md:text-3xl lg:text-3xl mt-3 mb-3 font-semibold  text-[#036B46] italic">Cultivate Tomorrow.</div>
                        <div className="max-w-[500px] overflow-hidden text-sm sm:text-base md:text-lg lg:text-[1.1rem] text-[#646464] font-thin max-md:hidden">
                            &quot;Explore our diverse range of agropharma solutions, designed to elevate crop<br/> productivity, foster resilience, and<br/> redefine sustainable farming practices.&quot;
                        </div>
                        <div className="max-w-[500px] overflow-hidden text-sm sm:text-base md:text-lg lg:text-[1.1rem] text-[#646464] font-thin md:hidden">
                            &quot;Explore our diverse range of agropharma<br/> solutions, designed to elevate crop<br/> productivity, foster resilience, and redefine<br/> sustainable farming practices.&quot;
                        </div>
                    </div>
                    <div className="overflow-hidden w-[25.3rem] max-h-[20rem] group border rounded-2xl relative mt-[3.9rem] mr-0 max-md:hidden">
                        <Image src={'/farm.png'} alt="Picture of the author" width={502} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                        <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Herbicide / weedicides</h1>
                        <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <span className="mr-2">Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* //text  */}
                <div className='ml-[0.25rem] mt-[-0.2rem] max-md:hidden'>
                    <div className="overflow-hidden max-w-[25.3rem] max-h-[20rem] group border rounded-2xl relative">
                        <Image src={'/beetle.png'} alt="Picture of the author" width={400} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                        <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Insecticides</h1>
                        <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <span className="mr-2">Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-hidden w-[25.3rem] max-h-[20rem] group border rounded-2xl relative mt-6">
                        <Image src={'/grape.png'} alt="Picture of the author" width={500} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                        <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Fungicides</h1>
                        <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <span className="mr-2">Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden w-[25.3rem] max-h-[38rem] group border rounded-2xl relative ml-7 max-md:hidden">
                        <Image src={'/ourlong.png'} alt="Picture of the author" width={500} height={200} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                        <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Plant Growth Promoter</h1>
                        <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                            <span className="mr-2">Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                </div>
                {/* <div className="overflow-hidden rounded-md">
                    <Image src={prod3} alt="Picture of the author" width={500} height={500} />
                </div> */}
            </div>
            <div className='mt-[1.28rem]'>
                <div className="overflow-hidden max-w-[22.8rem] max-h-[15rem] group border rounded-2xl relative">
                    <Image src={'/beetle.png'} alt="Picture of the author" width={400} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                    <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Insecticides</h1>
                    <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                        <span className="mr-2">Explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='mt-[1.28rem]'>
                <div className="overflow-hidden max-w-[22.8rem] max-h-[15rem] group border rounded-2xl relative">
                    <Image src={'/farm.png'} alt="Picture of the author" width={400} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                    <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Herbicide / weedicides</h1>
                    <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                        <span className="mr-2">Explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='mt-[1.28rem]'>
                <div className="overflow-hidden max-w-[22.8rem] max-h-[15rem] group border rounded-2xl relative">
                    <Image src={'/grape.png'} alt="Picture of the author" width={400} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                    <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Fungicides</h1>
                    <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                        <span className="mr-2">Explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='mt-[1.28rem]'>
                <div className="overflow-hidden max-w-[22.8rem] max-h-[15rem] group border rounded-2xl relative">
                    <Image src={'/ourlongmobile.png'} alt="Picture of the author" width={500} height={500} className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out' />
                    <h1 className="text-[#E3E3E3] text-[1.5rem] font-thin top-5 left-4 absolute">Plant Growth Promoter</h1>
                    <button className='bg-[#FFF] rounded-full px-5 py-2 text-[#005B1B] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-opacity-[90%] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                        <span className="mr-2">Explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-90">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default OurProduct
// 

{/**/ }
