import Image from 'next/image'
import React from 'react'
import icon1 from '../../public/icon1.svg'
import icon2 from '../../public/icon2.svg'
import icon3 from '../../public/icon3.svg'
import icon4 from '../../public/icon4.svg'

const Counter = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 bg-green-800 py-5 justify-center items-center'>


            <div className="basis-1/4 flex  justify-center">
                <div className="p-2 text-green-500 flex justify-center items-center">
                    <Image src={icon4} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />

                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">100+</div>
                    <div className="font-semibold">Years of Experince</div>
                </div>
            </div>
            <div className="basis-1/4 flex  justify-center">
                <div className="p-2 text-green-500 flex justify-center items-center">

                    <Image src={icon3} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />
                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">100+</div>
                    <div className="font-semibold">Years of Experince</div>
                </div>
            </div>
            <div className="basis-1/4 flex  justify-center">
                <div className="p-2 text-green-500 flex justify-center items-center">
                    <Image src={icon2} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />

                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">100+</div>
                    <div className="font-semibold">Years of Experince</div>
                </div>
            </div>
            <div className="basis-1/4 flex  justify-center">
                <div className="p-2 text-green-500 flex justify-center items-center">
                    <Image src={icon1} alt="Picture of the author" width={40} style={{ borderRadius: '2%' }} height={500} />

                </div>
                <div className="flex-col text-white ms-2">
                    <div className="font-bold text-2xl">100+</div>
                    <div className="font-semibold">Years of Experince</div>
                </div>
            </div>




        </div>
    )
}

export default Counter

