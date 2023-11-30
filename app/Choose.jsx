import Image from 'next/image'
import React from 'react'
import icon8 from '../public/icon8.svg'
import icon7 from '../public/icon7.svg'
import icon6 from '../public/icon6.svg'
import icon5 from '../public/icon5.svg'
import choose from '../public/choose.png.png'
import choose1 from '../public/choose1.svg'
import choose2 from '../public/choose2.svg'
import choose3 from '../public/choose3.svg'


const Choose = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row jsutify-center items-center px-[3rem] py-[3rem] bg-gray-100 '>


            <div className="basis-2/5 grid grid-cols-2  gap-6">
                <div className=" ">
                    <div className="flex flex-row">
                        <div className="">
                            <Image src={icon5} alt="Picture of the author" width={40} height={40} />
                        </div>
                        <div className="">Our Mission</div>
                    </div>
                    <div className="">Nurturing a sustainable future through agropharma innovation is our unwavering mission.</div>

                </div>
                <div className="">
                    <div className="flex flex-row">
                        <div className="">
                            <Image src={icon6} alt="Picture of the author" width={40} height={500} />
                        </div>
                        <div className="">Our Mission</div>
                    </div>
                    <div className="">Nurturing a sustainable future through agropharma innovation is our unwavering mission.</div>

                </div>
                <div className="">
                    <div className="flex flex-row">
                        <div className="">
                            <Image src={icon7} alt="Picture of the author" width={40} height={500} />
                        </div>
                        <div className="">Our Mission</div>
                    </div>
                    <div className="">Nurturing a sustainable future through agropharma innovation is our unwavering mission.</div>

                </div>
                <div className="">
                    <div className="flex flex-row">
                        <div className="">
                            <Image src={icon8} alt="Picture of the author" width={40} height={500} />
                        </div>
                        <div className="">Left Mission</div>
                    </div>
                    <div className="">Nurturing a sustainable future through agropharma innovation is our unwavering mission.</div>

                </div>


            </div>
            <div className="basis-3/5 px-10">
                <div className="text-green-700">WHY CHOOSE US?</div>
                <div className="font-semibold text-gray-800">Learn why we&apos;re <span className='text-green-700 italic'>the best</span></div>
                <div className="">Unlocking agropharma excellence — where innovation meets results.  Explore why we stand out in cultivating success.&quot;</div>

                <div className="py-3  relative flex flex-wrap">
                    <div>
                        <Image src={choose} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} />
                    </div>
                    {/* <div className="absolute top-[25%] left-10 flex  justify-center items-center flex-row 
                    
                    md:gap-16">
                        <Image src={choose1} alt="Picture of the author" width={100} height={50} style={{ borderRadius: '2%' }} />
                        <Image src={choose2} alt="Picture of the author" width={100} height={50} style={{ borderRadius: '2%' }} />
                        <Image src={choose3} alt="Picture of the author" width={100} height={50} style={{ borderRadius: '2%' }} />
                    </div> */}
                </div>


            </div>

        </div>
    )
}

export default Choose
