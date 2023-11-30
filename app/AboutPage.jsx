import Image from 'next/image'
import React from 'react'
import image1 from '../../public/image1.jpeg'
import image2 from '../../public/image2.jpeg'
import image3 from '../../public/image3.jpeg'

const AboutPage = () => {
    return (
        <div className='flex  w-100 flex-col md:flex-row gap-4 m-4
         py-3 justify-center items-center'>
            <div className="basis-2/5 flex-col justify-center items-center p-4">
                <div className="">
                    <div className="">
                        <Image src={image1} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} />
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="m-3   rounded-md"><Image src={image2} alt="Picture of the author" width={500} height={500} style={{ borderRadius: '2%' }} /></div>
                    <div className="m-3 mt-5 rounded-md"><Image src={image3} alt="Picture of the author" width={500} style={{ borderRadius: '2%' }} height={500} /></div>
                </div>


            </div>
            <div className="basis-3/5">
                <div className='mb-2 text-3xl text-green-700'>ABOUT US</div>
                <div className=' mb-2 font-bold text-3xl text-gray-700'> &quot;Sterling Agrichem Pvt. Ltd. is a Leading producer and global marketer of Agrochemicals, Insecticide, Fungicide, Herbicide, Weedicides, House Hold and Plant Growth Promoter.&quot;</div>

                <div className='text-xl text-gray-600'>&quot;Our strategy is to grow through incremental expansion of its existing operations and acquisitions as well as the development, commercialization and marketing of new products and international opportunities. The aim of both our directors is that every product of the company should be manufactured within the company’s own factory and under its own supervision, Theirfor Every product that is sold in our market is made and sold by the company itself.&quot;</div>
            </div>
        </div>
    )
}

export default AboutPage
